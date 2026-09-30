import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');
const firebase = JSON.parse(readFileSync(resolve(root, 'firebase.json'), 'utf-8'));
const html = readFileSync(resolve(publicDir, 'index.html'), 'utf-8');
const appJs = readFileSync(resolve(publicDir, 'app.js'), 'utf-8');

function headersFor(source) {
  const entry = firebase.hosting.headers.find((h) => h.source === source);
  return Object.fromEntries((entry ? entry.headers : []).map((h) => [h.key, h.value]));
}

function parseCsp(value) {
  return Object.fromEntries(
    value.split(';').map((d) => d.trim()).filter(Boolean).map((d) => {
      const [name, ...sources] = d.split(/\s+/);
      return [name, sources];
    })
  );
}

describe('Hosting config', () => {
  it('deploys only the public/ directory', () => {
    expect(firebase.hosting.public).toBe('public');
  });

  it('public/ contains only site assets (no repo, tooling, or dotfiles)', () => {
    const entries = readdirSync(publicDir).sort();
    expect(entries).toEqual([
      'app.js',
      'disney-coin.png',
      'disney-dollar.jpg',
      'gtag-init.js',
      'index.html',
      'styles.css',
    ]);
  });

  it('every local asset referenced by index.html exists in public/', () => {
    const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((u) => !/^https?:/.test(u))
      .map((u) => u.split('?')[0]);
    expect(refs.length).toBeGreaterThan(0);
    const entries = readdirSync(publicDir);
    refs.forEach((ref) => expect(entries).toContain(ref));
  });

  it('SPA rewrite only applies to extensionless paths', () => {
    expect(firebase.hosting.rewrites).toEqual([{ regex: '^/[^.]*$', destination: '/index.html' }]);
    const re = new RegExp(firebase.hosting.rewrites[0].regex);
    expect(re.test('/')).toBe(true);
    expect(re.test('/some/route')).toBe(true);
    expect(re.test('/.claude/settings.local.json')).toBe(false);
    expect(re.test('/scripts/op-preflight.sh')).toBe(false);
  });

  it('sets baseline security headers on every response', () => {
    const h = headersFor('**');
    expect(h['X-Content-Type-Options']).toBe('nosniff');
    expect(h['X-Frame-Options']).toBe('DENY');
    expect(h['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(h['Content-Security-Policy']).toBeTruthy();
  });

  it('enforces a CSP without unsafe-inline / unsafe-eval', () => {
    const csp = parseCsp(headersFor('**')['Content-Security-Policy']);
    expect(csp['default-src']).toEqual(["'self'"]);
    expect(csp['object-src']).toEqual(["'none'"]);
    expect(csp['frame-ancestors']).toEqual(["'none'"]);
    expect(csp['style-src']).toEqual(["'self'"]);
    expect(csp['script-src']).toContain("'self'");
    expect(csp['script-src']).toContain('https://*.googletagmanager.com');
    expect(csp['img-src']).toContain('https://disney.images.edge.bamgrid.com');
    Object.values(csp).flat().forEach((src) => {
      expect(src).not.toMatch(/unsafe-inline|unsafe-eval|unsafe-hashes|^\*$|^https?:$|^data:$/);
    });
  });

  it('every external image host used by the content pool is allowed by img-src', () => {
    const csp = parseCsp(headersFor('**')['Content-Security-Policy']);
    const hosts = new Set([...appJs.matchAll(/(?:background|titleImage):\s*"(https:\/\/[^/"]+)/g)].map((m) => m[1]));
    expect(hosts.size).toBeGreaterThan(0);
    hosts.forEach((host) => expect(csp['img-src']).toContain(host));
  });

  it('index.html has no inline scripts, inline handlers, or style attributes', () => {
    // Parse with the DOM rather than regex so tag/attribute case and
    // whitespace variants are all covered.
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const scripts = [...doc.querySelectorAll('script')];
    expect(scripts.length).toBeGreaterThan(0);
    scripts.forEach((script) => {
      expect(script.hasAttribute('src')).toBe(true);
      expect(script.textContent.trim()).toBe('');
    });
    expect(doc.querySelectorAll('style').length).toBe(0);
    doc.querySelectorAll('*').forEach((el) => {
      [...el.attributes].forEach(({ name }) => {
        expect(name.toLowerCase().startsWith('on')).toBe(false);
        expect(name.toLowerCase()).not.toBe('style');
      });
    });
  });

  it('app.js does not build markup with innerHTML or inline handlers', () => {
    expect(appJs).not.toMatch(/\.innerHTML\s*=/);
    expect(appJs).not.toMatch(/onerror=/);
    expect(appJs).not.toMatch(/style="/);
  });
});

describe('Card rendering without inline handlers', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    window.gtag = vi.fn();
    window.dataLayer = [];
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('swipewatch_onboarding_completed', 'true');
    new Function(appJs)();
  });

  it('falls back to the gradient poster when the background image fails to load', () => {
    const img = document.querySelector('#card-stack .card img.poster-background, #card-stack .card img.poster-background-letterbox');
    expect(img).toBeTruthy();
    const poster = img.parentElement;
    const fallback = poster.nextElementSibling;
    expect(fallback.classList.contains('card-poster-fallback')).toBe(true);
    expect(fallback.style.display).toBe('none');
    expect(img.hasAttribute('onerror')).toBe(false);

    img.dispatchEvent(new Event('error'));

    expect(poster.style.display).toBe('none');
    expect(fallback.style.display).toBe('flex');
  });

  it('hides a title treatment image that fails to load', () => {
    // Leave only a layered poster title (id 103 has a titleImage) unshown so
    // the top card deterministically has a title treatment.
    const allIds = [...appJs.matchAll(/^\s*id: (\d+),$/gm)].map((m) => Number(m[1]));
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    localStorage.setItem('swipewatch_shown_content', JSON.stringify(allIds.filter((id) => id !== 103)));
    new Function(appJs)();

    const titleImg = document.querySelector('#card-stack .card[data-index="0"] img.poster-title-image');
    expect(titleImg).toBeTruthy();
    expect(titleImg.style.display).toBe('');
    titleImg.dispatchEvent(new Event('error'));
    expect(titleImg.style.display).toBe('none');
    // The background poster stays visible
    expect(titleImg.parentElement.style.display).toBe('');
  });

  it('renders card text as text, not HTML', () => {
    const card = document.querySelector('#card-stack .card');
    expect(card.querySelector('.card-title').textContent.length).toBeGreaterThan(0);
    expect(card.querySelector('.card-description').children.length).toBe(0);
    expect(card.querySelector('.card-poster-fallback').style.background).toMatch(/linear-gradient/);
  });
});
