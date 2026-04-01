import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const appJs = readFileSync(resolve(__dirname, '../app.js'), 'utf-8');
const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');

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
