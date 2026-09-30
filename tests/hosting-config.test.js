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
    const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
    expect(scripts.length).toBeGreaterThan(0);
    scripts.forEach(([, attrs, body]) => {
      expect(attrs).toMatch(/\bsrc=/);
      expect(body.trim()).toBe('');
    });
    expect(html).not.toMatch(/\son[a-z]+\s*=/i);
    expect(html).not.toMatch(/\sstyle\s*=/i);
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

  it('renders card text as text, not HTML', () => {
    const card = document.querySelector('#card-stack .card');
    expect(card.querySelector('.card-title').textContent.length).toBeGreaterThan(0);
    expect(card.querySelector('.card-description').children.length).toBe(0);
    expect(card.querySelector('.card-poster-fallback').style.background).toMatch(/linear-gradient/);
  });
});
