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
├── index.html          # Main HTML structure with onboarding (171 lines)
├── app.js              # Core application logic (1564 lines)
├── styles.css          # All styling, animations, responsive design (1281 lines)
├── disney-coin.png     # Disney Coins reward image (used in end screen)
├── disney-dollar.jpg   # Unused asset (not referenced in code)
├── firebase.json       # Firebase Hosting config (no-cache headers, SPA rewrites)
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
├── tests/              # Test definitions (placeholder)
├── functions/          # Serverless functions (placeholder)
├── docs/               # Extended documentation
└── scripts/ci/         # CI enforcement scripts
```

---
