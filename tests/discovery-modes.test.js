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

describe('Discovery Modes', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
  });

  it('defines four discovery modes in the code', () => {
    expect(appJs).toContain("id: 'disney-vault'");
    expect(appJs).toContain("id: 'streaming-originals'");
    expect(appJs).toContain("id: 'nature-discovery'");
    expect(appJs).toContain("id: 'new-trending'");
  });

  it('spend button is hidden when coins < 25', () => {
    loadApp();
    vi.useFakeTimers();
    // Swipe all 10 to show end screen (earns 10 coins, below 25)
    const likeBtn = document.getElementById('like-btn');
    for (let i = 0; i < 10; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    const spendBtn = document.getElementById('spend-btn');
    expect(spendBtn.classList.contains('hidden')).toBe(true);
    vi.useRealTimers();
  });

  it('spend button is visible when coins >= 25', () => {
    localStorage.setItem('swipewatch_coin_bank', '15');
    loadApp();
    vi.useFakeTimers();
    // Swipe all 10 cards (15 + 10 = 25)
    const likeBtn = document.getElementById('like-btn');
    for (let i = 0; i < 10; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    const spendBtn = document.getElementById('spend-btn');
    expect(spendBtn.classList.contains('hidden')).toBe(false);
    vi.useRealTimers();
  });

  it('cancel button on unlock modal returns to end screen', () => {
    localStorage.setItem('swipewatch_coin_bank', '25');
    loadApp();
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    for (let i = 0; i < 10; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    // Click spend to open unlock modal
    const spendBtn = document.getElementById('spend-btn');
    spendBtn.click();
    const unlockModal = document.getElementById('unlock-modal');
    expect(unlockModal.classList.contains('hidden')).toBe(false);

    // Cancel
    const cancelBtn = document.getElementById('unlock-cancel');
    cancelBtn.click();
    expect(unlockModal.classList.contains('hidden')).toBe(true);
    const endScreen = document.getElementById('end-screen');
    expect(endScreen.classList.contains('hidden')).toBe(false);
    vi.useRealTimers();
  });

  it('unlock modal renders mode buttons', () => {
    localStorage.setItem('swipewatch_coin_bank', '25');
    loadApp();
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    for (let i = 0; i < 10; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    document.getElementById('spend-btn').click();
    const modeButtons = document.querySelectorAll('#unlock-modes .unlock-mode-btn');
    expect(modeButtons.length).toBe(4);
    vi.useRealTimers();
  });
});
