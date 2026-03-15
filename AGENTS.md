# AGENTS.md — Swipe Watch

## 1. Repository Overview

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
├── AGENTS.md           # This file
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

## 2. Agent Operating Rules

### Key Concepts

#### Content Types
The content pool has **80 titles** across two platforms and multiple visual formats:

- **Disney+ Content** (45 items):
  - IDs 1–15: Modern format (WebP, 800px width, `max=800|450`)
  - IDs 16–30: Classic format (JPEG, 381px width, `max=339|162`)
  - IDs 31–45: Modern format (WebP, 800px width, `max=800|450`)
  - All use vertical posters with layered title treatments
  - IDs 7, 9, 11, 34 use `poster_vertical_disney-original_080` label

- **Hulu Content** (35 items):
  - IDs 101, 102, 104, 106, 108–110, 112, 114: 16:9 letterbox with `standard_art_*_178` labels (9 items)
  - IDs 103, 105, 107, 111, 113, 115–135: Vertical posters with `poster_vertical_*_080` labels and title treatments (26 items)

#### Swipe Actions
- **Right Swipe / Heart:** Like — get more recommendations like this
- **Left Swipe / X:** Dislike — remove from recommendations
- **Up Swipe / Star:** Super Like — add to watchlist

#### Session Management
- 10 tiles per session (configurable via `SESSION_SIZE`)
- 80 total titles in content pool
- Smart rotation prevents repeats until all content shown
- Partial sessions: if fewer than 10 unshown items remain, shows all remaining
- `localStorage` tracks shown content IDs

### Architecture & Patterns

#### Data Model
```javascript
// Disney+ content — classic format (IDs 16-30, with title treatment)
{
    id: 16,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "Description...",
    background: "ripcut-url/compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "ripcut-url/trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}

// Disney+ content — modern format (IDs 1-15, 31-45, with title treatment)
{
    id: 1,
    title: "Ocean with David Attenborough",
    type: "Series",
    description: "Description...",
    background: "ripcut-url/compose?format=webp&label=poster_vertical_080&width=800",
    titleImage: "ripcut-url/trim?format=webp&max=800|450",
    color: "#0369a1",
    year: "2025",
    genres: "Documentaries, Animals & Nature"
}

// Hulu content — standard art letterbox (IDs 101, 102, 104, 106, 108-110, 112, 114)
{
    id: 101,
    title: "Family Guy",
    type: "Series",
    description: "Description...",
    background: "ripcut-url/compose?format=webp&label=standard_art_178&width=800",
    color: "#1e3a8a",
    year: "1999",
    genres: "Animation, Comedy"
}

// Hulu content — poster vertical (IDs 103, 105, 107, 111, 113, 115-135, with title treatment)
{
    id: 116,
    title: "The Beauty",
    type: "Hulu Original Series",
    description: "Description...",
    background: "ripcut-url/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
    titleImage: "ripcut-url/trim?format=webp&max=800|450",
    color: "#7c2d12",
    year: "2026",
    genres: "Horror, Science Fiction, Hulu Original"
}
```

#### Key Functions
- `init()`: Initialize/reset app state, get session content, load initial cards, arm idle pulse
- `getSessionContent()`: Get next batch of random tiles from unshown content pool; applies `activeMode.filter` when set
- `createCard(index)`: Render card with poster/letterbox/fallback based on URL label detection; adds mode badge during unlock batches
- `swipeCard(card, direction)`: Handle swipe animation, update stats, mark content as shown, show toast
- `addSwipeListeners(card)`: Add touch/mouse event handlers with drag tracking, dynamic shadow, continuous overlay scaling
- `trackEvent(action, label, value)`: Send GA4 events
- `shuffleArray(array)`: Fisher-Yates shuffle for random content ordering
- `adjustColor(color, amount)`: Darken hex colors for gradient backgrounds
- `updateProgress()`: Update progress bar width and progress label text
- `updateCoinBadge()`: Sync header coin badge with bank total
- `showEndScreen()`: Display session summary, coin bank, spend button, rotating CTA
- `animateCountUp(el, target)`: Animate a numeric count-up over 500ms with ease-out
- `isPoolExhausted()`: Check if all content IDs have been shown
- `loadCoinBank()` / `saveCoinBank(total)` / `resetCoinBank()`: localStorage coin persistence
- `checkOnboarding()`: Check localStorage flag to skip onboarding for returning users
- `showIndicatorScaled(type, progress)`: Show swipe indicator with opacity/scale proportional to drag distance
- `hideAllIndicators()`: Reset all indicator opacity and transform
- `armIdlePulse()` / `cancelIdlePulse(card)`: Manage idle breathing animation on active card
- `triggerGestureDemo()` / `cancelGestureDemo(card)`: Run one-time gesture demo animation on first visit
- `showSwipeToast(text)`: Flash transient toast; defaults to "Learning your taste..." or shows custom text (1.5s for custom)
- `openUnlockModal()`: Render discovery mode buttons and show modal overlay
- `selectUnlockMode(mode)`: Set activeMode, deduct 25 coins, show unlock toast, restart session with filtered content

#### Card Rendering Logic
The `createCard()` function determines visual format by inspecting the background URL:
1. If URL contains `label=poster` AND item has `titleImage` → layered poster (background + title overlay)
2. If URL contains `label=standard` OR has any `background` → letterbox (16:9 with gradient bars)
3. Otherwise → gradient-only fallback with text title

#### Card Stack Behavior
- Preloads 3 cards for visual depth effect
- Cards scale down and offset vertically: `scale(${1 - offset * 0.05}) translateY(${offset * 10}px)`
- Only the top card has active swipe listeners
- Next card loads when current card + 2 is available

#### Browser Storage
- `swipewatch_shown_content` (localStorage): JSON array of content IDs already shown
- `swipewatch_onboarding_completed` (localStorage): String `"true"` when onboarding completed
- `swipewatch_coin_bank` (localStorage): Persistent coin bank total (integer string)
- `swipewatch_gesture_demo` (sessionStorage): String `"true"` when gesture demo has played (resets per tab)

### Analytics Events
All events use GA4 with category `"Card Interaction"`:

| Event | Trigger | Label | Value |
|-------|---------|-------|-------|
| `like` | Right swipe | Content title | Current index |
| `dislike` | Left swipe | Content title | Current index |
| `super_like` | Up swipe | Content title | Current index |
| `onboarding` | Click "Let's Go" | "User completed onboarding" | 0 |
| `restart` | Click CTA on end screen | "User restarted the app" | Total swipe count |
| `unlock_mode` | Select discovery mode in modal | Mode name (e.g. "Disney Vault") | Remaining bank total |

### Configuration

#### Adjustable Constants
```javascript
const SESSION_SIZE = 10;  // Tiles per session
const DISCOVERY_MODES = [  // Coin-spend unlock modes — aligned with poster guide label taxonomy
    { id: 'disney-vault', name: 'Disney Vault', filter: IDs 16-30 (classic poster format) OR Disney+ Original type },
    { id: 'streaming-originals', name: 'Streaming Originals', filter: Hulu Original type OR FX genre },
    { id: 'nature-discovery', name: 'Nature & Discovery', filter: Docuseries/Documentaries/Animals & Nature/History/Lifestyle },
    { id: 'new-trending', name: 'New & Trending', filter: year >= 2025 }
];
let activeMode = null;  // Currently active discovery mode (set during unlock batch, cleared on end screen)
```

#### Firebase Config (firebase.json)
- No-cache headers for JS, CSS, and HTML files
- SPA-style rewrites (non-asset routes → `index.html`)
- Ignores markdown files and dotfiles in deployment

### Image System

#### RipCut Label Variants
| Label | Platform | Format | Usage |
|-------|----------|--------|-------|
| `poster_vertical_080` | Disney+ | JPEG/WebP | Standard vertical poster |
| `poster_vertical_disney-original_080` | Disney+ | WebP | Disney+ Original series |
| `poster_vertical_hulu-original-series_080` | Hulu | WebP | Hulu Original vertical poster |
| `poster_vertical_abc_080` | Hulu (ABC) | WebP | ABC network vertical poster |
| `poster_vertical_fox_080` | Hulu (FOX) | WebP | FOX network vertical poster |
| `poster_vertical_fx_080` | Hulu (FX) | WebP | FX network vertical poster |
| `poster_vertical_cbs_080` | Hulu (CBS) | WebP | CBS network vertical poster |
| `standard_art_178` | Hulu | WebP | Generic 16:9 art |
| `standard_art_abc_178` | Hulu (ABC) | WebP | ABC network 16:9 art |
| `standard_art_fox_178` | Hulu (FOX) | WebP | FOX network 16:9 art |
| `standard_art_hulu-original-series_178` | Hulu | WebP | Hulu Original 16:9 art |
| `standard_art_cartoon-network_178` | Hulu | WebP | Cartoon Network 16:9 art |

#### Title Treatments
- Classic: `/trim?max=339|162` (IDs 16–30)
- Modern: `/trim?format=webp&max=800|450` (IDs 1–15, 31–45, 103, 105, 107, 111, 113, 115–135)

See `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md` for detailed documentation.

### Swipe Mechanics
- **Indicator visibility:** Continuous — opacity scales from 0 to 1 proportional to drag distance (0–100px), with slight scale boost (up to 1.05x) past 50%
- **Action threshold:** 100px drag distance triggers the swipe action
- **Indicator start:** 20px minimum drag before indicator begins appearing
- **Rotation:** Card rotates proportional to horizontal drag (`deltaX * 0.1` degrees)
- **Dynamic shadow:** Box shadow shifts opposite to drag vector during drag
- **Animation:** 300ms transition for card exit; progress bar animates in sync
- **Post-swipe toast:** "Learning your taste..." shows for 400ms after each swipe
- Touch events use `passive: false` to enable `preventDefault`

### Motion & Affordance
- **Gesture demo:** On first visit, top card nudges right (+15px, 3° rotation) with brief "LIKE" flash overlay (1000ms, runs once per session via sessionStorage)
- **Idle pulse:** After 4s of inactivity, active card breathes with `scale(1) → scale(1.01) → scale(1)` animation; cancelled on interaction, re-armed on next card

### Responsive Breakpoints
| Breakpoint | Type | Target |
|-----------|------|--------|
| `min-width: 1024px` | Desktop | Wider container, larger cards |
| `max-width: 768px` | Tablet | Adjusted layout and spacing |
| `max-width: 480px` | Mobile | Compact layout |
| `max-width: 360px` | Small mobile | Reduced font sizes |
| `max-height: 600px` + landscape | Landscape mobile | Special horizontal layout |

### Onboarding
- Shows only on first visit (localStorage flag)
- Headline: "Swipe a few titles to personalize your recommendations"
- Subtext: "We'll learn your taste as you swipe."
- CTA: "Let's Go"
- Swipe Up step is visually de-emphasized (~15% smaller icon, 0.7 opacity) to signal secondary action
- Background uses radial purple gradient vignette for visual continuity with main UI
- On dismiss, triggers gesture demo animation on top card (first visit only)

### Action Button Hierarchy
- Like (heart) and Dislike (X) buttons are primary (60x60px)
- Super/Watchlist (star) button is secondary (50x50px, no gradient, accent color on white)

### Progress Display
- Single progress bar with semantic label: "X of N recommendations"
- No separate counter — label beneath bar replaces the old "X / Y" display
- Coin bank badge in top-right of header shows persistent total

### Coin Bank System
- Coins earned = total swipes per session (liked + super liked + skipped)
- Bank persists across sessions via `swipewatch_coin_bank` in localStorage
- Header badge shows running total during swiping
- End screen shows "+N This Session" with count-up animation and "Total Bank: N"
- Coin image gets a glow pulse animation on session complete
- **Spend mechanic:** 25 coins to refresh a new batch immediately (button shown when bank >= 25)
- **Full reset:** when all content pool titles have been shown, CTA becomes "Start Fresh" — resets coin bank, shown content, and onboarding flag (returns to instruction screen)

### End Screen
- Rotating headlines: "Session Complete" / "Recommendations Updated" / "Your Taste Profile Updated"
- Subheader: "Based on your swipes, we've refined your recommendations."
- Structured session summary (bullet list: N Liked, N Super Liked, N Skipped)
- Rotating CTA: "Keep Exploring" / "Swipe Another Batch" (normal), "Start Fresh" (pool exhausted)

### Local Development
```bash
# Simply open in browser
open index.html

# Or use a local server
python -m http.server 8000
```

---

## 3. Code Modification Rules

### Credential Hygiene and Rotation
- This repo has no Firebase client config or API keys committed. Keep it that way unless a future feature genuinely needs one.
- Do not commit API keys, service-account JSON, or ADC credentials.
- If client-side keys are ever added, keep them in ignored config files and apply browser restrictions in Google Cloud.
- Deploy auth is keyless and 1Password-backed: `op-firebase-deploy` creates short-lived impersonated credentials from `op://Private/GCP ADC/credential`, another explicit `GOOGLE_APPLICATION_CREDENTIALS` file, or CI-provided external-account credentials.
- The 1Password-first deploy-auth model is a deliberate repository invariant. Do not switch this repo back to ADC-first, routine browser-login, `firebase login`, or long-lived deploy-key auth without explicit human approval.
- Routine deploys and `gcloud` work should not require browser login once the shared 1Password source credential exists. If that credential itself needs rotation, refresh it once and update the 1Password item. If impersonation bindings drift, rerun `op-firebase-setup swipewatch`.
- For future secrets, use `op://Private/<item>/<field>` references in committed files and resolve them into gitignored runtime files with `op inject`.

### Known Behaviors (Do Not Break)
- Cards auto-fallback to gradient if images fail to load (via `onerror` handlers)
- Partial sessions show remaining items if fewer than `SESSION_SIZE` are unshown
- `disney-dollar.jpg` exists in the project but is not referenced by any code — do not remove without confirming it is safe to delete

### Content Pool Integrity
- Do not change existing content item IDs — they are stored in `localStorage` to track shown content; changing IDs would cause users to re-see content they have already swiped
- New content items must follow the data model format exactly (see Section 2)
- Image label taxonomy must match `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md`

### No New Dependencies
- This is intentionally a dependency-free static site. Do not introduce npm, bundlers, frameworks, or external libraries without explicit discussion and a `plans/` entry.

---

## 4. Documentation Rules

- **`AGENTS.md`:** Update when adding new content types, changing swipe mechanics, adding new UI patterns, or modifying the coin bank system.
- **`DEPLOYMENT.md`:** Update when the deploy process changes — new commands, credential rotation steps, new environments.
- **`README.md`:** Update when project description, features, or live URL changes.
- **`RIPCUT_GUIDE.md`:** Update when new RipCut label variants are used in the content pool.
- **`POSTER_GUIDE.md`:** Update when poster format conventions change.
- **`rules/repo_rules.md`:** Update when the directory structure changes or new invariants are needed.
- **`.ai_context.md`:** Update when directories are added/removed or external dependencies change.

When changing behavior documented in this file, update the relevant section before or alongside the code change — not after.

---

## 5. Testing Requirements

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

## 6. Deployment Process

All deploys use `op-firebase-deploy` for non-interactive service account impersonation. Never run `firebase deploy` directly.

```bash
op-firebase-deploy                  # full deploy
op-firebase-deploy --only hosting   # hosting only
```

See `DEPLOYMENT.md` for the 1Password-backed GCP ADC bootstrap, `gcloud` wrapper install, first-time impersonation setup, rollback procedure, and secrets management.
