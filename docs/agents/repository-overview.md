# Repository Overview

### Description
Swipe Watch is a Tinder-style web application for discovering Disney+ and Hulu content through swipe interactions. Features session-based content rotation and gamified engagement with Disney Coins.

**Live Application:** https://swipewatch.web.app

### Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla — no frameworks)
- **Backend:** None (static site)
- **Hosting:** Firebase Hosting with CDN
- **Analytics:** Google Analytics 4 (GA4) — Measurement ID `G-0SFL3RGC0H`
- **Build Process:** None required — static files only
- **Asset Versioning:** Query params on CSS/JS (`?v=1.6`)

### Project Structure
```
swipewatch/
├── public/             # Firebase Hosting root — the only deployed directory
│   ├── index.html      # Main HTML structure with onboarding
│   ├── app.js          # Core application logic
│   ├── styles.css      # All styling, animations, responsive design
│   ├── gtag-init.js    # Google Analytics bootstrap (external for the CSP)
│   ├── disney-coin.png # Disney Coins reward image (used in end screen)
│   └── disney-dollar.jpg # Unused asset (not referenced in code)
├── firebase.json       # Firebase Hosting config (public/ root, security headers, no-cache headers, SPA rewrite)
├── .firebaserc         # Firebase project configuration
├── README.md           # Main documentation
├── RIPCUT_GUIDE.md     # Disney RipCut image system documentation
├── POSTER_GUIDE.md     # Poster format specifications
├── AGENTS.md           # Agent instructions index (points to docs/agents/)
├── DEPLOYMENT.md       # Deploy instructions
├── CONTRIBUTING.md     # Contribution guidelines
├── .ai_context.md      # Supplemental AI agent context
├── rules/              # Repository-level binding constraints
├── plans/              # Feature rollout and migration plans
├── specs/              # Feature specifications and acceptance criteria
├── tests/              # Vitest suites for public/ + hub-propagated shell tests
├── functions/          # Serverless functions (placeholder)
├── docs/               # Extended documentation
└── scripts/ci/         # CI enforcement scripts
```

---

The repository enables current-head external-review enforcement through `codex.external_review_gate.enabled`; see [the local review policy](../../REVIEW_POLICY.md#external-clearance-enforcement-in-this-repository) for activation and approval-count rollout requirements.
