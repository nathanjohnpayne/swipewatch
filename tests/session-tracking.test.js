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

describe('Session Tracking', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
    loadApp();
  });

  it('SESSION_SIZE is referenced as 10 in the code', () => {
    expect(appJs).toContain('SESSION_SIZE = 10');
  });

  it('progress label shows "1 of X recommendations" initially', () => {
    const label = document.getElementById('progress-label');
    expect(label.textContent).toMatch(/1 of \d+ recommendations/);
  });

  it('progress bar starts at 0% width', () => {
    const bar = document.getElementById('progress-bar');
    expect(bar.style.width).toBe('0%');
  });

  it('saves shown content IDs to localStorage after swiping', () => {
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);
    const stored = JSON.parse(localStorage.getItem('swipewatch_shown_content') || '[]');
    expect(stored.length).toBe(1);
    vi.useRealTimers();
  });

  it('shows end screen after all cards in session are swiped', () => {
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    // Swipe through all cards
    for (let i = 0; i < 10; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }
    const endScreen = document.getElementById('end-screen');
    expect(endScreen.classList.contains('hidden')).toBe(false);
    vi.useRealTimers();
  });

  it('end screen displays correct session stats', () => {
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');

    likeBtn.click();
    vi.advanceTimersByTime(500);
    likeBtn.click();
    vi.advanceTimersByTime(500);
    dislikeBtn.click();
    vi.advanceTimersByTime(500);

    // Swipe remaining to trigger end screen
    for (let i = 0; i < 7; i++) {
      likeBtn.click();
      vi.advanceTimersByTime(500);
    }

    const likedCount = document.getElementById('end-liked-count');
    const dislikedCount = document.getElementById('end-disliked-count');
    expect(likedCount.textContent).toBe('9');
    expect(dislikedCount.textContent).toBe('1');
    vi.useRealTimers();
  });
});
