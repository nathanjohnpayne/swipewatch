import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const html = readFileSync(resolve(__dirname, '../public/index.html'), 'utf-8');
const appJs = readFileSync(resolve(__dirname, '../public/app.js'), 'utf-8');

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

// Pointer helpers: the app reads clientX/clientY for mouse events and
// touches[0].clientX/Y for touch events.
function mouse(target, type, x, y) {
  target.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y }));
}

function touch(target, type, x, y) {
  const e = new Event(type, { bubbles: true, cancelable: true });
  const points = type === 'touchend' ? [] : [{ clientX: x, clientY: y }];
  Object.defineProperty(e, 'touches', { value: points });
  target.dispatchEvent(e);
}

const topCard = () => document.querySelector('#card-stack .card[data-index="0"]');
const coinBank = () => parseInt(localStorage.getItem('swipewatch_coin_bank') || '0', 10);
const cardIndexes = () => [...document.querySelectorAll('#card-stack .card')].map((c) => Number(c.dataset.index));

describe('Swipe Mechanics: tap vs drag', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useFakeTimers();
    setupDOM();
    loadApp();
  });

  it('a mouse click without movement does not swipe the card', () => {
    const card = topCard();
    mouse(card, 'mousedown', 200, 300);
    mouse(document, 'mouseup', 200, 300);
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(0);
    expect(topCard()).toBe(card);
    expect(card.classList.contains('animating')).toBe(false);
  });

  it('a touch tap without movement does not swipe the card', () => {
    const card = topCard();
    touch(card, 'touchstart', 150, 250);
    touch(document, 'touchend');
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(0);
    expect(topCard()).toBe(card);
  });

  it('a tap after an earlier partial drag does not reuse stale coordinates', () => {
    const card = topCard();
    // Partial drag (below the swipe threshold) snaps back
    mouse(card, 'mousedown', 100, 300);
    mouse(document, 'mousemove', 150, 300);
    mouse(document, 'mouseup', 150, 300);
    // Then a plain tap far away from the previous end point
    mouse(card, 'mousedown', 400, 300);
    mouse(document, 'mouseup', 400, 300);
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(0);
    expect(topCard()).toBe(card);
  });

  it('movement below the drag threshold does not move the card', () => {
    const card = topCard();
    const before = card.style.transform;
    mouse(card, 'mousedown', 200, 300);
    mouse(document, 'mousemove', 204, 303);
    expect(card.style.transform).toBe(before);
    mouse(document, 'mouseup', 204, 303);
    expect(coinBank()).toBe(0);
  });

  it('a drag past the swipe threshold still swipes', () => {
    const card = topCard();
    mouse(card, 'mousedown', 100, 300);
    mouse(document, 'mousemove', 180, 300);
    mouse(document, 'mousemove', 260, 300);
    mouse(document, 'mouseup', 260, 300);
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(1);
    expect(card.isConnected).toBe(false);
  });
});

describe('Swipe Mechanics: animation re-entry', () => {
  let addSpy;

  beforeEach(() => {
    vi.restoreAllMocks();
    vi.useFakeTimers();
    setupDOM();
    addSpy = vi.spyOn(document, 'addEventListener');
    loadApp();
  });

  it('a second button press during the exit animation is ignored', () => {
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    likeBtn.click();
    document.getElementById('dislike-btn').click();
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(1);
    expect(document.getElementById('progress-label').textContent).toMatch(/^2 of /);
    expect(cardIndexes()).toEqual([1, 2, 3]);
  });

  it('dragging the exiting card during its animation does not swipe again', () => {
    const card = topCard();
    document.getElementById('like-btn').click();
    // The swiped card is still in the DOM while it animates out
    mouse(card, 'mousedown', 100, 300);
    mouse(document, 'mousemove', 300, 300);
    mouse(document, 'mouseup', 300, 300);
    vi.advanceTimersByTime(500);
    expect(coinBank()).toBe(1);
  });

  it('rapid presses through a whole session keep the stack consistent and end cleanly', () => {
    const likeBtn = document.getElementById('like-btn');
    const endScreen = document.getElementById('end-screen');
    const total = Number(document.getElementById('progress-label').textContent.match(/of (\d+)/)[1]);

    for (let i = 0; i < total * 4 && endScreen.classList.contains('hidden'); i++) {
      likeBtn.click();
      likeBtn.click();
      vi.advanceTimersByTime(150);
      const idx = cardIndexes();
      expect(new Set(idx).size).toBe(idx.length);
    }
    vi.advanceTimersByTime(500);

    expect(endScreen.classList.contains('hidden')).toBe(false);
    expect(coinBank()).toBe(total);
    expect(document.getElementById('end-liked-count').textContent).toBe(String(total));
    const shown = JSON.parse(localStorage.getItem('swipewatch_shown_content'));
    expect(shown.length).toBe(total);
    expect(new Set(shown).size).toBe(total);
  });

  it('removes a card\'s document listeners once it is swiped', () => {
    const liveMoveListeners = () => addSpy.mock.calls
      .filter(([type, , opts]) => type === 'mousemove' && opts && opts.signal)
      .filter(([, , opts]) => !opts.signal.aborted).length;

    expect(liveMoveListeners()).toBe(1);
    const likeBtn = document.getElementById('like-btn');
    likeBtn.click();
    vi.advanceTimersByTime(500);
    likeBtn.click();
    vi.advanceTimersByTime(500);
    // Only the current top card has live drag listeners on document
    expect(liveMoveListeners()).toBe(1);
  });
});
