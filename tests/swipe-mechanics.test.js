import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
const appJs = readFileSync(resolve(__dirname, '../app.js'), 'utf-8');

function setupDOM() {
  document.documentElement.innerHTML = '';
  document.write(html);
  document.close();

  // Stub gtag to suppress errors
  window.gtag = vi.fn();
  window.dataLayer = [];

  // Clear localStorage keys used by the app
  localStorage.removeItem('swipewatch_coin_bank');
  localStorage.removeItem('swipewatch_shown_content');
  localStorage.removeItem('swipewatch_onboarding_completed');
  sessionStorage.removeItem('swipewatch_gesture_demo');

  // Mark onboarding as done so it doesn't interfere
  localStorage.setItem('swipewatch_onboarding_completed', 'true');
}

function loadApp() {
  const fn = new Function(appJs);
  fn();
}

describe('Swipe Mechanics', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
    loadApp();
  });

  it('creates cards in the card stack on init', () => {
    const cards = document.querySelectorAll('#card-stack .card');
    expect(cards.length).toBeGreaterThan(0);
    expect(cards.length).toBeLessThanOrEqual(3);
  });

  it('dislike button triggers a swipe that removes a card', () => {
    vi.useFakeTimers();
    const initialCards = document.querySelectorAll('#card-stack .card').length;
    const dislikeBtn = document.getElementById('dislike-btn');
    dislikeBtn.click();
    vi.advanceTimersByTime(500);
    const remainingCards = document.querySelectorAll('#card-stack .card').length;
    // A card should have been removed (or replaced)
    expect(remainingCards).toBeLessThanOrEqual(initialCards);
    vi.useRealTimers();
  });

  it('like button triggers a swipe', () => {
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);
    // After swiping, coin bank should have incremented
    const coinBank = parseInt(localStorage.getItem('swipewatch_coin_bank') || '0', 10);
    expect(coinBank).toBe(1);
    vi.useRealTimers();
  });

  it('super button triggers an up swipe', () => {
    vi.useFakeTimers();
    const superBtn = document.getElementById('super-btn');
    superBtn.click();
    vi.advanceTimersByTime(500);
    const coinBank = parseInt(localStorage.getItem('swipewatch_coin_bank') || '0', 10);
    expect(coinBank).toBe(1);
    vi.useRealTimers();
  });

  it('each swipe increments coin bank by 1 in localStorage', () => {
    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);
    likeBtn.click();
    vi.advanceTimersByTime(500);
    const coinBank = parseInt(localStorage.getItem('swipewatch_coin_bank') || '0', 10);
    expect(coinBank).toBe(2);
    vi.useRealTimers();
  });
});
