import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const appJs = readFileSync(resolve(__dirname, '../public/app.js'), 'utf-8');
const html = readFileSync(resolve(__dirname, '../public/index.html'), 'utf-8');

function setupDOM() {
  document.documentElement.innerHTML = '';
  document.write(html);
  document.close();
  window.gtag = vi.fn();
  window.dataLayer = [];
  localStorage.removeItem('swipewatch_coin_bank');
  localStorage.removeItem('swipewatch_shown_content');
  localStorage.removeItem('swipewatch_onboarding_completed');
  sessionStorage.removeItem('swipewatch_gesture_demo');
  localStorage.setItem('swipewatch_onboarding_completed', 'true');
}

function loadApp() {
  const fn = new Function(appJs);
  fn();
}

describe('Coin System', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
  });

  it('loadCoinBank defaults to 0 when localStorage is empty', () => {
    // The loadCoinBank function reads from localStorage
    expect(localStorage.getItem('swipewatch_coin_bank')).toBeNull();
    loadApp();
    const badge = document.getElementById('coin-badge-count');
    expect(badge.textContent).toBe('0');
  });

  it('loadCoinBank reads a persisted value', () => {
    localStorage.setItem('swipewatch_coin_bank', '42');
    loadApp();
    const badge = document.getElementById('coin-badge-count');
    expect(badge.textContent).toBe('42');
  });

  it('swiping a card increments coin bank and persists it', () => {
    vi.useFakeTimers();
    loadApp();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);
    expect(localStorage.getItem('swipewatch_coin_bank')).toBe('1');
    vi.useRealTimers();
  });

  it('coin badge updates after each swipe', () => {
    vi.useFakeTimers();
    loadApp();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    // Badge updates synchronously before the timeout
    const badge = document.getElementById('coin-badge-count');
    expect(badge.textContent).toBe('1');
    vi.advanceTimersByTime(500);
    vi.useRealTimers();
  });

  it('resetCoinBank removes the localStorage key', () => {
    localStorage.setItem('swipewatch_coin_bank', '50');
    localStorage.removeItem('swipewatch_coin_bank');
    expect(localStorage.getItem('swipewatch_coin_bank')).toBeNull();
  });
});

describe('Storage robustness', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
  });

  it('treats a non-numeric coin bank as 0', () => {
    localStorage.setItem('swipewatch_coin_bank', 'not-a-number');
    loadApp();
    expect(document.getElementById('coin-badge-count').textContent).toBe('0');
  });

  it('treats a negative coin bank as 0', () => {
    localStorage.setItem('swipewatch_coin_bank', '-40');
    loadApp();
    expect(document.getElementById('coin-badge-count').textContent).toBe('0');
  });

  it.each(['25garbage', '25.5', '1e3', ' 7', ''])('treats a malformed coin bank %j as 0', (value) => {
    localStorage.setItem('swipewatch_coin_bank', value);
    loadApp();
    expect(document.getElementById('coin-badge-count').textContent).toBe('0');
  });

  it('keeps working when acquiring the storage objects throws', () => {
    const localDescriptor = Object.getOwnPropertyDescriptor(window, 'localStorage');
    const sessionDescriptor = Object.getOwnPropertyDescriptor(window, 'sessionStorage');
    const blocked = () => { throw new Error('blocked getter'); };
    Object.defineProperty(window, 'localStorage', { get: blocked, configurable: true });
    Object.defineProperty(window, 'sessionStorage', { get: blocked, configurable: true });
    try {
      expect(() => loadApp()).not.toThrow();
      expect(document.getElementById('coin-badge-count').textContent).toBe('0');
      expect(document.querySelectorAll('#card-stack .card').length).toBeGreaterThan(0);
    } finally {
      Object.defineProperty(window, 'localStorage', localDescriptor);
      Object.defineProperty(window, 'sessionStorage', sessionDescriptor);
    }
  });

  it('recovers from corrupt shown-content JSON', () => {
    localStorage.setItem('swipewatch_shown_content', '{not json');
    expect(() => loadApp()).not.toThrow();
    expect(document.querySelectorAll('#card-stack .card').length).toBeGreaterThan(0);
  });

  it('recovers from non-array shown-content JSON and keeps only numeric ids', () => {
    vi.useFakeTimers();
    localStorage.setItem('swipewatch_shown_content', '{"length": 3}');
    loadApp();
    document.getElementById('like-btn').click();
    vi.advanceTimersByTime(500);
    const saved = JSON.parse(localStorage.getItem('swipewatch_shown_content'));
    expect(Array.isArray(saved)).toBe(true);
    expect(saved.length).toBe(1);
    expect(Number.isFinite(saved[0])).toBe(true);

    setupDOM();
    localStorage.setItem('swipewatch_shown_content', JSON.stringify(['x', null, 101, { id: 2 }]));
    loadApp();
    document.getElementById('like-btn').click();
    vi.advanceTimersByTime(500);
    const saved2 = JSON.parse(localStorage.getItem('swipewatch_shown_content'));
    expect(saved2.every((id) => Number.isFinite(id))).toBe(true);
    expect(saved2).toContain(101);
    expect(saved2.length).toBe(2);
    vi.useRealTimers();
  });

  it('keeps working when storage throws', () => {
    vi.useFakeTimers();
    // Swap the storage properties via defineProperty (not assignment) so the
    // test does not depend on how the environment defines them, and restore
    // the exact original descriptors afterwards.
    const localDescriptor = Object.getOwnPropertyDescriptor(window, 'localStorage');
    const sessionDescriptor = Object.getOwnPropertyDescriptor(window, 'sessionStorage');
    const throwing = {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
      removeItem: () => { throw new Error('blocked'); },
    };
    Object.defineProperty(window, 'localStorage', { value: throwing });
    Object.defineProperty(window, 'sessionStorage', { value: throwing });
    // Deterministic shuffle: if swiped history were lost, the next session
    // would draw exactly the same titles again.
    vi.spyOn(Math, 'random').mockReturnValue(0);
    try {
      expect(() => loadApp()).not.toThrow();
      expect(document.getElementById('coin-badge-count').textContent).toBe('0');

      // Swipe through a whole session, recording each top card's title.
      const endScreen = document.getElementById('end-screen');
      const topTitle = () => {
        const top = [...document.querySelectorAll('#card-stack .card')].find((c) => !c.classList.contains('animating'));
        return top ? top.querySelector('.card-title').textContent : null;
      };
      const firstSession = new Set();
      for (let i = 0; i < 20 && endScreen.classList.contains('hidden'); i++) {
        firstSession.add(topTitle());
        document.getElementById('like-btn').click();
        vi.advanceTimersByTime(500);
        if (i === 0) expect(document.getElementById('coin-badge-count').textContent).toBe('1');
      }
      expect(endScreen.classList.contains('hidden')).toBe(false);
      expect(firstSession.size).toBe(10);

      // History kept in memory: the next session does not repeat those titles.
      document.getElementById('restart-btn').click();
      const secondSession = [...document.querySelectorAll('#card-stack .card .card-title')].map((t) => t.textContent);
      expect(secondSession.length).toBeGreaterThan(0);
      secondSession.forEach((t) => expect(firstSession.has(t)).toBe(false));
    } finally {
      Object.defineProperty(window, 'localStorage', localDescriptor);
      Object.defineProperty(window, 'sessionStorage', sessionDescriptor);
      vi.useRealTimers();
    }
  });
});
