# SwipeWatch - Project Context

## Description
SwipeWatch is a Tinder-style web application for discovering Disney+ and Hulu content through swipe interactions. Features session-based content rotation and gamified engagement with Disney Coins.

**Live Application:** https://swipewatch.web.app

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla - no frameworks)
- **Backend:** None (static site)
- **Hosting:** Firebase Hosting with CDN
- **Analytics:** Google Analytics 4 (GA4)
- **Build Process:** None required - static files only

## Project Structure
```
SwipeWatch/
├── index.html          # Main HTML structure with onboarding
├── app.js              # Core application logic (722 lines)
├── styles.css          # All styling, animations, responsive design
├── disney-coin.png     # Disney Coins reward image
├── firebase.json       # Firebase Hosting config (no-cache headers)
├── .firebaserc         # Firebase project configuration
├── README.md           # Main documentation
├── RIPCUT_GUIDE.md     # Disney RipCut image system documentation
├── POSTER_GUIDE.md     # Poster format specifications
└── CLAUDE.md           # This file
```

## Key Concepts

### Content Types
- **Disney+ Content** (IDs 1-15): Vertical posters with layered title treatments
- **Hulu Content** (IDs 101-115): 16:9 letterbox images with mood-matched gradients

### Swipe Actions
- **Right Swipe / Heart:** Like - get more recommendations like this
- **Left Swipe / X:** Dislike - remove from recommendations
- **Up Swipe / Star:** Super Like - add to watchlist

### Session Management
- 10 tiles per session (configurable via `SESSION_SIZE`)
- 30 total titles in content pool
- Smart rotation prevents repeats until all content shown
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
// Disney+ content (with title treatment)
{
    id: 1,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "Description...",
    background: "ripcut-url/compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "ripcut-url/trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}

// Hulu content (letterbox)
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
```

### Key Functions
- `init()`: Initialize/reset app state and load cards
- `getSessionContent()`: Get next 10 random tiles from content pool
- `createCard(index)`: Render card with layered images or letterbox
- `swipeCard(card, direction)`: Handle swipe animation and stats
- `addSwipeListeners(card)`: Add touch/mouse event handlers
- `trackEvent(action, label, value)`: Send GA4 events

### Browser Storage
- `swipewatch_shown_content`: Array of content IDs already shown
- `swipewatch_onboarding_completed`: Boolean flag for onboarding state

## Analytics Events
- `like`: Right swipe with content title
- `dislike`: Left swipe with content title
- `super_like`: Up swipe with content title
- `onboarding`: User completed tutorial
- `restart`: User restarted session

## Configuration

### Adjustable Constants
```javascript
const SESSION_SIZE = 10;  // Tiles per session
```

### Firebase Config (firebase.json)
- No-cache headers for instant updates
- Static file hosting
- Ignores markdown files in deployment

## Image System

### Disney RipCut Parameters
- **Disney+ Posters:** `/compose?format=jpeg&label=poster_vertical_080&width=381`
- **Hulu Art:** `/compose?format=webp&label=standard_art_178&width=800`
- **Title Treatments:** `/trim?max=339|162`

See `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md` for detailed documentation.

## Known Behaviors
- Onboarding shows only on first visit (localStorage flag)
- Cards auto-fallback to gradient if images fail to load
- Session resets when all 30 titles have been shown
- Touch events use `passive: false` to enable preventDefault
