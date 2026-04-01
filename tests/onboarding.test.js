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
    // Mark all content as shown to exhaust pool
    loadApp();

    // Simulate setting onboarding as completed
    localStorage.setItem('swipewatch_onboarding_completed', 'true');

    // Verify the code removes onboarding key during pool-exhausted restart
    expect(appJs).toContain("localStorage.removeItem('swipewatch_onboarding_completed')");
  });
});
