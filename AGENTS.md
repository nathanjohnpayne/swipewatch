# SwipeWatch - Project Context

## Description
SwipeWatch is a Tinder-style web application for discovering Disney+ and Hulu content through swipe interactions. Features session-based content rotation and gamified engagement with Disney Coins.

**Live Application:** https://swipewatch.web.app

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla - no frameworks)
- **Backend:** None (static site)
- **Hosting:** Firebase Hosting with CDN
- **Analytics:** Google Analytics 4 (GA4)—Measurement ID `G-0SFL3RGC0H`
- **Build Process:** None required - static files only
- **Asset Versioning:** Query params on CSS/JS (`?v=1.3`)

## Project Structure
```
SwipeWatch/
├── index.html          # Main HTML structure with onboarding (150 lines)
├── app.js              # Core application logic (890 lines)
├── styles.css          # All styling, animations, responsive design (960 lines)
├── disney-coin.png     # Disney Coins reward image (used in end screen)
├── disney-dollar.jpg   # Unused asset (not referenced in code)
├── firebase.json       # Firebase Hosting config (no-cache headers, SPA rewrites)
├── .firebaserc         # Firebase project configuration
├── README.md           # Main documentation
├── RIPCUT_GUIDE.md     # Disney RipCut image system documentation
├── POSTER_GUIDE.md     # Poster format specifications
└── AGENTS.md           # This file (AI assistant project context)
```

## Key Concepts

### Content Types
The content pool has **45 titles** across two platforms and three visual formats:

- **Disney+ Content** (25 items):
  - IDs 1-10: Modern format (WebP, 800px width, `max=800|450`)
  - IDs 16-30: Classic format (JPEG, 381px width, `max=339|162`)
  - All use vertical posters with layered title treatments

- **Hulu Content** (20 items):
  - IDs 101-115: 16:9 letterbox with `standard_art_*_178` labels and mood-matched gradients
  - IDs 116-120: Vertical posters with `poster_vertical_hulu-original-series_080` labels and title treatments

### Swipe Actions
- **Right Swipe / Heart:** Like - get more recommendations like this
- **Left Swipe / X:** Dislike - remove from recommendations
- **Up Swipe / Star:** Super Like - add to watchlist

### Session Management
- 10 tiles per session (configurable via `SESSION_SIZE`)
- 45 total titles in content pool
- Smart rotation prevents repeats until all content shown
- Partial sessions: if fewer than 10 unshown items remain, shows all remaining
- localStorage tracks shown content IDs

## Development Setup

### Local Development
```bash
# Simply open in browser
open index.html

# Or use a local server
python -m http.server 8000
```

### Firebase Deployment
```bash
firebase login
firebase use swipewatch
firebase deploy
```

## Architecture & Patterns

### Data Model
```javascript
// Disney+ content—classic format (IDs 16-30, with title treatment)
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

// Disney+ content—modern format (IDs 1-10, with title treatment)
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

// Hulu content—standard art letterbox (IDs 101-115)
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

// Hulu content—poster vertical (IDs 116-120, with title treatment)
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

### Key Functions
- `init()`: Initialize/reset app state, get session content, load initial cards
- `getSessionContent()`: Get next batch of random tiles from unshown content pool
- `createCard(index)`: Render card with poster/letterbox/fallback based on URL label detection
- `swipeCard(card, direction)`: Handle swipe animation, update stats, mark content as shown
- `addSwipeListeners(card)`: Add touch/mouse event handlers with drag tracking
- `trackEvent(action, label, value)`: Send GA4 events
- `shuffleArray(array)`: Fisher-Yates shuffle for random content ordering
- `adjustColor(color, amount)`: Darken hex colors for gradient backgrounds
- `updateProgress()`: Update progress bar width and card counter
- `showEndScreen()`: Display stats and Disney Coins earned
- `checkOnboarding()`: Check localStorage flag to skip onboarding for returning users
- `showIndicator(type)` / `hideAllIndicators()`: Toggle swipe direction indicators

### Card Rendering Logic
The `createCard()` function determines visual format by inspecting the background URL:
1. If URL contains `label=poster` AND item has `titleImage` → layered poster (background + title overlay)
2. If URL contains `label=standard` OR has any `background` → letterbox (16:9 with gradient bars)
3. Otherwise → gradient-only fallback with text title

### Card Stack Behavior
- Preloads 3 cards for visual depth effect
- Cards scale down and offset vertically: `scale(${1 - offset * 0.05}) translateY(${offset * 10}px)`
- Only the top card has active swipe listeners
- Next card loads when current card + 2 is available

### Browser Storage
- `swipewatch_shown_content`: JSON array of content IDs already shown
- `swipewatch_onboarding_completed`: String `"true"` when onboarding completed

## Analytics Events
All events use GA4 with category `"Card Interaction"`:

| Event | Trigger | Label | Value |
|-------|---------|-------|-------|
| `like` | Right swipe | Content title | Current index |
| `dislike` | Left swipe | Content title | Current index |
| `super_like` | Up swipe | Content title | Current index |
| `onboarding` | Click "Start Swiping" | "User completed onboarding" | 0 |
| `restart` | Click "Start Over" | "User restarted the app" | Total swipe count |

## Configuration

### Adjustable Constants
```javascript
const SESSION_SIZE = 10;  // Tiles per session
```

### Firebase Config (firebase.json)
- No-cache headers for JS, CSS, and HTML files
- SPA-style rewrites (non-asset routes → `index.html`)
- Ignores markdown files and dotfiles in deployment

## Image System

### RipCut Label Variants
| Label | Platform | Format | Usage |
|-------|----------|--------|-------|
| `poster_vertical_080` | Disney+ | JPEG/WebP | Standard vertical poster |
| `poster_vertical_disney-original_080` | Disney+ | WebP | Disney+ Original series |
| `poster_vertical_hulu-original-series_080` | Hulu | WebP | Hulu Original vertical poster |
| `standard_art_178` | Hulu | WebP | Generic 16:9 art |
| `standard_art_abc_178` | Hulu (ABC) | WebP | ABC network content |
| `standard_art_fox_178` | Hulu (FOX) | WebP | FOX network content |
| `standard_art_hulu-original-series_178` | Hulu | WebP | Hulu Original 16:9 art |
| `standard_art_cartoon-network_178` | Hulu | WebP | Cartoon Network content |

### Title Treatments
- Classic: `/trim?max=339|162` (IDs 16-30)
- Modern: `/trim?format=webp&max=800|450` (IDs 1-10, 116-120)

See `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md` for detailed documentation.

## Swipe Mechanics
- **Indicator threshold:** 50px drag distance shows direction indicator
- **Action threshold:** 100px drag distance triggers the swipe action
- **Rotation:** Card rotates proportional to horizontal drag (`deltaX * 0.1` degrees)
- **Animation:** 300ms transition for card exit, then next card activates
- Touch events use `passive: false` to enable `preventDefault`

## Responsive Breakpoints
| Breakpoint | Type | Target |
|-----------|------|--------|
| `min-width: 1024px` | Desktop | Wider container, larger cards |
| `max-width: 768px` | Tablet | Adjusted layout and spacing |
| `max-width: 480px` | Mobile | Compact layout |
| `max-width: 360px` | Small mobile | Reduced font sizes |
| `max-height: 600px` + landscape | Landscape mobile | Special horizontal layout |

## Known Behaviors
- Onboarding shows only on first visit (localStorage flag)
- Cards auto-fallback to gradient if images fail to load (via `onerror` handlers)
- Session resets when all 45 titles have been shown
- Partial sessions show remaining items if fewer than `SESSION_SIZE` are unshown
- Touch events use `passive: false` to enable preventDefault
- `disney-dollar.jpg` exists in the project but is not referenced by any code
