# Contributing

## Overview

Swipe Watch is a small, focused static web app. Contributions should stay in that spirit: minimal dependencies, no frameworks, and changes that are easy to reason about in plain HTML/CSS/JS.

## Branch Naming

| Type | Format | Example |
|------|--------|---------|
| New feature | `feature/<short-description>` | `feature/super-like-animation` |
| Bug fix | `fix/<short-description>` | `fix/coin-bank-reset` |
| Maintenance | `chore/<short-description>` | `chore/update-content-pool` |

## Commit Message Format

Use imperative present tense. Keep the subject line under 72 characters.

```
Add Disney Vault discovery mode filter
Fix coin bank not persisting across tab reloads
Update content pool to 90 titles
```

For larger changes, add a body after a blank line explaining why, not what.

## Pull Request Process

1. Branch from `main`
2. Make changes in small, focused commits
3. Test manually in browser (see Testing below) before opening a PR
4. Open a PR against `main` with a clear title and description of what changed and why
5. At least one human review is required before merge
6. Squash merge to keep history clean

## Code Style

- **JavaScript:** Vanilla ES6+. No frameworks, no bundlers. Keep functions focused and named clearly.
- **CSS:** All styles in `styles.css`. Use CSS custom properties for design tokens (colors, spacing). No inline styles in JS except for dynamic transforms.
- **HTML:** Semantic markup. Accessibility attributes (`aria-label`, `role`) where relevant.
- No linter is currently configured. Follow the patterns already in the file.

## Testing

There is no automated test suite. Before submitting a PR, manually verify:

1. Onboarding shows on first visit (clear localStorage to test)
2. Swipe interactions (right/left/up) work on both touch and mouse
3. Coin bank increments correctly and persists across page reload
4. Discovery mode unlock deducts 25 coins and filters content
5. End screen appears after all session tiles are swiped
6. "Start Fresh" resets everything when content pool is exhausted
7. No console errors in Chrome and Safari

Document any manual testing steps specific to your change in the PR description.

## Agent Contributions

AI agent contributions must follow `AGENTS.md`. All agent-proposed changes require human review before merge. Agents must not autonomously merge PRs or modify credentials.

## Questions

Open an issue on GitHub or contact the repo owner directly.
