import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const appJs = readFileSync(resolve(__dirname, '../app.js'), 'utf-8');
const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');

function setupDOM() {
  document.documentElement.innerHTML = '';
  document.write(html);
  document.close();
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

describe('Analytics', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    setupDOM();
  });

  it('trackEvent calls gtag when defined', () => {
    const gtagMock = vi.fn();
    window.gtag = gtagMock;
    loadApp();

    vi.useFakeTimers();
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);

    const likeCalls = gtagMock.mock.calls.filter(
      (call) => call[0] === 'event' && call[1] === 'like'
    );
    expect(likeCalls.length).toBe(1);
    expect(likeCalls[0][2]).toHaveProperty('event_category', 'Card Interaction');
    vi.useRealTimers();
  });

  it('fires dislike event on left swipe', () => {
    const gtagMock = vi.fn();
    window.gtag = gtagMock;
    loadApp();

    vi.useFakeTimers();
    const dislikeBtn = document.getElementById('dislike-btn');
    dislikeBtn.click();
    vi.advanceTimersByTime(500);

    const dislikeCalls = gtagMock.mock.calls.filter(
      (call) => call[0] === 'event' && call[1] === 'dislike'
    );
    expect(dislikeCalls.length).toBe(1);
    vi.useRealTimers();
  });

  it('fires super_like event on up swipe', () => {
    const gtagMock = vi.fn();
    window.gtag = gtagMock;
    loadApp();

    vi.useFakeTimers();
    const superBtn = document.getElementById('super-btn');
    superBtn.click();
    vi.advanceTimersByTime(500);

    const superCalls = gtagMock.mock.calls.filter(
      (call) => call[0] === 'event' && call[1] === 'super_like'
    );
    expect(superCalls.length).toBe(1);
    vi.useRealTimers();
  });

  it('fires onboarding event when onboarding is completed', () => {
    const gtagMock = vi.fn();
    window.gtag = gtagMock;

    // Start with fresh onboarding
    localStorage.removeItem('swipewatch_onboarding_completed');
    loadApp();

    const startBtn = document.getElementById('start-btn');
    startBtn.click();

    const onboardingCalls = gtagMock.mock.calls.filter(
      (call) => call[0] === 'event' && call[1] === 'onboarding'
    );
    expect(onboardingCalls.length).toBe(1);
  });

  it('does not throw when gtag is undefined', () => {
    delete window.gtag;
    loadApp();

    vi.useFakeTimers();
    expect(() => {
      document.getElementById('like-btn').click();
      vi.advanceTimersByTime(500);
    }).not.toThrow();
    vi.useRealTimers();
  });

  it('guards analytics with typeof check', () => {
    expect(appJs).toContain("typeof globalThis.gtag === 'function'");
  });
});
