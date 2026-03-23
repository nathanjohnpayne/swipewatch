# Testing Requirements

No automated test framework is currently in use. This is a static site with no build step.

**Manual testing checklist (run before any PR):**
1. Onboarding screen appears on first visit (clear localStorage to test)
2. Swipe interactions (right/left/up) work on both touch and mouse
3. Coin bank increments correctly and persists across page reload
4. Discovery mode unlock deducts 25 coins and filters content correctly
5. End screen appears after all session tiles are swiped
6. "Start Fresh" resets coin bank, shown content, and returns to onboarding when pool is exhausted
7. No console errors in Chrome and Safari
8. Responsive layout correct on mobile (375px), tablet (768px), and desktop (1280px)

**When to add automated tests:** If application logic is extracted into importable modules, add unit tests for `getSessionContent()`, `shuffleArray()`, session rotation, and coin bank calculations.

---
