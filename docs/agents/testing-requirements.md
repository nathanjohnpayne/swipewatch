# Testing Requirements

**Automated tests.** `npm test` runs the Vitest suites in `tests/*.test.js` (jsdom), which load the real `public/index.html` and `public/app.js` and drive them through the DOM. `npm run lint` runs ESLint. Both run in CI on every push and pull request via `.github/workflows/repo_lint_local.yml` (`npm ci && npm test && npm run lint`), so `package-lock.json` is committed and must be updated with any `package.json` change. There is still no build step. Add or extend a Vitest case for every behavior fix (swipe/tap handling, stack and animation state, storage parsing, coin bank).

**Manual testing checklist (run before any PR that changes UI behavior):**
1. Onboarding screen appears on first visit (clear localStorage to test)
2. Swipe interactions (right/left/up) work on both touch and mouse
3. Coin bank increments correctly and persists across page reload
4. Discovery mode unlock deducts 25 coins and filters content correctly
5. End screen appears after all session tiles are swiped
6. "Start Fresh" resets coin bank, shown content, and returns to onboarding when pool is exhausted
7. No console errors in Chrome and Safari
8. Responsive layout correct on mobile (375px), tablet (768px), and desktop (1280px)

---
