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
}

function loadApp() {
  const fn = new Function(appJs);
  fn();
}

describe('Onboarding', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
  });

  it('shows onboarding overlay on first visit', () => {
    loadApp();
    const onboarding = document.getElementById('onboarding');
    expect(onboarding.classList.contains('hidden')).toBe(false);
  });

  it('hides onboarding after clicking Let\'s Go', () => {
    loadApp();
    const startBtn = document.getElementById('start-btn');
    startBtn.click();
    const onboarding = document.getElementById('onboarding');
    expect(onboarding.classList.contains('hidden')).toBe(true);
  });

  it('persists onboarding completion to localStorage', () => {
    loadApp();
    const startBtn = document.getElementById('start-btn');
    startBtn.click();
    expect(localStorage.getItem('swipewatch_onboarding_completed')).toBe('true');
  });

  it('skips onboarding on subsequent visits', () => {
    localStorage.setItem('swipewatch_onboarding_completed', 'true');
    loadApp();
    const onboarding = document.getElementById('onboarding');
    expect(onboarding.classList.contains('hidden')).toBe(true);
  });

  it('resets onboarding when pool is exhausted and user restarts', () => {
    // Mark all content as shown to exhaust the pool
    const allIds = [...appJs.matchAll(/^\s*id: (\d+),$/gm)].map((m) => Number(m[1]));
    expect(allIds.length).toBeGreaterThan(0);
    localStorage.setItem('swipewatch_shown_content', JSON.stringify(allIds));
    localStorage.setItem('swipewatch_onboarding_completed', 'true');

    vi.useFakeTimers();
    loadApp();
    const likeBtn = document.getElementById('like-btn');
    const endScreen = document.getElementById('end-screen');
    for (let i = 0; i < 20 && endScreen.classList.contains('hidden'); i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    expect(endScreen.classList.contains('hidden')).toBe(false);

    const restartBtn = document.getElementById('restart-btn');
    expect(restartBtn.textContent).toBe('Start Fresh');
    restartBtn.click();

    // Pool-exhausted restart clears the onboarding flag and shows onboarding
    expect(localStorage.getItem('swipewatch_onboarding_completed')).toBeNull();
    expect(document.getElementById('onboarding').classList.contains('hidden')).toBe(false);
    vi.useRealTimers();
  });
});
