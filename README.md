# Swipe Watch - Disney Content Discovery

A Tinder-style web app for discovering Disney+ and Hulu content through swipe interactions. Features session-based content rotation and gamified engagement with Disney Coins.

**Live Site:** https://swipewatch.web.app

## Features

### Swipe Gestures
- **Swipe Right** / Click Heart: Get more recommendations like this (like)
- **Swipe Left** / Click X: Remove from recommendations (dislike)
- **Swipe Up** / Click Star: Add to your watchlist (super like)

### Content Management
- **Session-based rotation**: 10 tiles per session
- **Smart tracking**: Tiles don't repeat until all content has been shown
- **80 total titles**: 45 Disney+ and 35 Hulu titles
- **Dynamic shuffling**: Random order each session via Fisher-Yates algorithm
- **Partial sessions**: If fewer than 10 unshown items remain, shows all remaining

### Interactive Elements
- Smooth drag-and-drop card animations with rotation and dynamic shadow
- Continuous swipe indicators with progressive opacity scaling
- Action buttons for click-to-swipe functionality
- Progress bar with semantic label ("X of N recommendations")
- Card stack with depth effect (3-card preload)
- Onboarding tutorial on first visit with gesture demo
- Idle breathing animation after 4s of inactivity
- Post-swipe toast feedback ("Learning your taste...")

### Gamification
- **Disney Coins**: Earn 1 coin per swipe, persistent bank across sessions
- **Discovery Modes**: Spend 25 coins to unlock curated batches (Disney Vault, Streaming Originals, Nature & Discovery, New & Trending)
- End screen with count-up animation, session summary, and rotating CTA
- Full pool reset with "Start Fresh" when all 80 titles shown

### User Experience
- Fully responsive design (mobile, tablet, desktop, landscape)
- Touch and mouse support
- Animated transitions with 300ms card exit
- Game-like feel with instant feedback
- Google Analytics 4 event tracking
- No-cache deployment for instant updates

## Quick Start

### Online
Visit https://swipewatch.web.app

### Local Development
1. Open `index.html` in a web browser
2. Complete the onboarding tutorial
3. Start swiping through 10 cards per session
4. Earn Disney Coins and unlock discovery modes

### Firebase Deployment
```bash
# Install deploy tooling once
npm install -g firebase-tools
# Install Google Cloud SDK if gcloud is not already available
# Install and sign in to 1Password CLI / desktop app for deploys

# One-time per maintainer/project
op-firebase-setup swipewatch

# Deploy
op-firebase-deploy
```

No build process or dependencies required - just HTML, CSS, and vanilla JavaScript!

### Credential Hygiene

- This repo currently has no Firebase client config or API keys. Do not add write-capable credentials to tracked HTML or JavaScript.
- If a future feature needs a browser key, keep it in ignored config, apply browser restrictions in Google Cloud, and rotate/delete old keys if they are ever exposed publicly.
- If the deploy credential stored in `Private/GCP ADC` is exposed, rerun `gcloud auth application-default login --project=swipewatch`, overwrite the 1Password item, and revoke the old Google credential.
- Future APIs or services should use committed template files with `op://Private/<item>/<field>` references and `op inject` into gitignored runtime files during deploy.

## How It Works

### Session Management
- Each session shows 10 random tiles from a pool of 80
- Content IDs are tracked in localStorage
- Once all 80 titles have been shown, the cycle resets
- If fewer than 10 remain unshown, a partial session shows all remaining
- Ensures users see all content before repeats

### Swipe Actions
- **Left swipe** (Dislike): Remove from recommendations—requires 100px horizontal drag
- **Right swipe** (Like): Get more recommendations like this—requires 100px horizontal drag
- **Up swipe** (Super Like): Add to your watchlist—requires 100px vertical drag
- Indicator opacity scales continuously from 20px drag distance

### Controls
- **Drag cards**: Click/touch and drag in any direction
- **Action buttons**: Click the bottom buttons for precise control
  - X Red button = Dislike (NOPE)
  - Heart Green button = Like (LIKE)
  - Star Blue button = Super Like (Watchlist)

### Statistics & Rewards
The end screen displays:
- **Disney Coins Earned**: Total swipes (1 coin per swipe), persistent bank
- Liked count (right swipes)
- Super Liked count (up swipes)
- Skipped count (left swipes)
- Discovery mode unlock button (25 coins)

## Content Structure

### Disney+ Content—Classic Format (IDs 16-30)
```javascript
{
    id: 16,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "A young woman whose father is imprisoned...",
    background: "https://disney.images.edge.bamgrid.com/.../compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "https://disney.images.edge.bamgrid.com/.../trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}
```

### Disney+ Content—Modern Format (IDs 1-15, 31-45)
```javascript
{
    id: 1,
    title: "Ocean with David Attenborough",
    type: "Series",
    description: "Explore the vast and mysterious depths...",
    background: "https://disney.images.edge.bamgrid.com/.../compose?format=webp&label=poster_vertical_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/.../trim?format=webp&max=800%7C450",
    color: "#0369a1",
    year: "2025",
    genres: "Documentaries, Animals & Nature"
}
```

### Hulu Content—Standard Art Letterbox (IDs 101, 102, 104, 106, 108-110, 112, 114)
```javascript
{
    id: 101,
    title: "Family Guy",
    type: "Series",
    description: "The adventures of the Griffin family...",
    background: "https://disney.images.edge.bamgrid.com/.../compose?format=webp&label=standard_art_178&width=800",
    color: "#1e3a8a",
    year: "1999",
    genres: "Animation, Comedy"
}
```

### Hulu Content—Poster Vertical (IDs 103, 105, 107, 111, 113, 115-135)
```javascript
{
    id: 117,
    title: "Only Murders in the Building",
    type: "Hulu Original Series",
    description: "Three strangers who share an obsession with true crime...",
    background: "https://disney.images.edge.bamgrid.com/.../compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/.../trim?format=webp&max=800%7C450",
    color: "#ca8a04",
    year: "2021",
    genres: "Drama, Mystery, Hulu Original"
}
```

### Adding Your Own Content

Edit the `contentData` array in `app.js`:
- Use Disney RipCut image delivery system
- Include vertical posters (Disney+ and Hulu Originals) or 16:9 images (Hulu standard)
- Set mood-matched gradient colors for letterbox backgrounds
- Use IDs 1-99 for Disney+, 100+ for Hulu
- See `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md` for image specs

### Session Size Configuration
```javascript
const SESSION_SIZE = 10; // Change to show more/fewer tiles per session
```

### Styling
- Edit `styles.css` to change colors, sizes, and animations
- Current color scheme: Purple gradient background
- Swipe indicators: Red (NOPE), Green (LIKE), Blue (Watchlist)
- Fully responsive with breakpoints at 1024px, 768px, 480px, 360px, and landscape

### Integration Points

For production integration, the app provides hooks for:

1. **Action callbacks** - Modify the `swipeCard()` function to send data to your backend:
   ```javascript
   // In swipeCard() function
   case 'left':
       stats.disliked++;
       // ADD: sendToBackend('dislike', contentData[currentIndex]);
       break;
   ```

2. **Content loading** - Replace `contentData` with API calls:
   ```javascript
   async function loadContent() {
       const response = await fetch('/api/recommendations');
       contentData = await response.json();
       init();
   }
   ```

3. **User authentication** - Add user context to track preferences per user

## Browser Compatibility

- Chrome/Edge: Full support
- Safari: Full support
- Firefox: Full support
- Mobile browsers: Touch gestures supported

## File Structure

```
Swipe Watch/
├── index.html          # Main HTML structure with onboarding (171 lines)
├── styles.css          # All styling, animations, and responsive design (1281 lines)
├── app.js              # Application logic, swipe handling, session management (1564 lines)
├── disney-coin.png     # Disney Coins reward image
├── firebase.json       # Firebase Hosting configuration (no-cache headers)
├── .firebaserc         # Firebase project configuration
├── README.md           # This file
├── RIPCUT_GUIDE.md     # Disney RipCut image system documentation
├── POSTER_GUIDE.md     # Poster format specifications
└── AGENTS.md           # AI assistant project context
```

## Technical Details

### Core Technologies
- **No frameworks**: Pure vanilla JavaScript
- **No build step**: Static HTML/CSS/JS
- **Hosting**: Firebase Hosting with CDN
- **Analytics**: Google Analytics 4 (GA4) event tracking
- **Asset Versioning**: CSS and JS loaded with `?v=1.6` cache-busting params

### Features Implementation
- **Gesture detection**: Custom touch/mouse event handling with `passive: false`
- **Continuous indicators**: Opacity scales from 0 to 1 proportional to drag (20–100px), with scale boost past 50%
- **Card rotation**: Proportional to horizontal drag (`deltaX * 0.1` degrees)
- **Dynamic shadow**: Box shadow shifts opposite to drag vector during drag
- **Animations**: CSS transitions with 300ms card exit
- **Responsive**: Five breakpoints—1024px (desktop), 768px (tablet), 480px (mobile), 360px (small mobile), 600px height + landscape
- **Session management**: localStorage for tracking shown content
- **Fisher-Yates shuffle**: Random content ordering per session
- **Progress tracking**: Semantic progress bar with label
- **Card preloading**: 3 cards rendered for visual depth effect
- **Image fallback**: Automatic gradient cards via `onerror` handlers when images fail
- **Color manipulation**: `adjustColor()` darkens base colors for gradient depth
- **No-cache deployment**: Instant updates via Firebase headers
- **Idle pulse**: Breathing animation on active card after 4s inactivity
- **Gesture demo**: One-time nudge animation on first visit
- **Toast feedback**: Transient "Learning your taste..." toast after each swipe

### Browser Storage
- `swipewatch_shown_content`: Array of content IDs already shown
- `swipewatch_onboarding_completed`: Boolean flag for onboarding state
- `swipewatch_coin_bank`: Persistent coin bank total
- `swipewatch_gesture_demo`: Session-scoped gesture demo flag

## Content Library

### Current Content (80 titles)

#### Disney+ Titles (45)

| ID | Title | Type | Year | Genres |
|----|-------|------|------|--------|
| 1 | Ocean with David Attenborough | Series | 2025 | Documentaries, Animals & Nature |
| 2 | The End of an Era | Series | 2025 | Music, Docuseries |
| 3 | The Beatles Anthology | Series | 2025 | Music, Docuseries |
| 4 | Sherlock | Series | 2010 | Drama, Mystery |
| 5 | Malcolm in the Middle | Series | 2000 | Comedy |
| 6 | Secrets of the Penguins | Series | 2025 | Animals & Nature, Docuseries |
| 7 | Dancing with the Stars | Disney+ Original | 2005 | Dance, Reality |
| 8 | Lost Treasures of Egypt | Series | 2019 | History, Docuseries |
| 9 | Animals Up Close with Bertie Gregory | Disney+ Original | 2023 | Action and Adventure, Animals & Nature |
| 10 | America's National Parks | Series | 2015 | Animals & Nature, Docuseries |
| 11 | The Beatles: Get Back | Disney+ Original | 2021 | History, Music |
| 12 | Tucci in Italy | Series | 2025 | Lifestyle, Docuseries |
| 13 | Incas: The Rise and Fall | Series | 2025 | History, Docuseries |
| 14 | The Suspicions of Mr Whicher | Series | 2013 | Drama, History |
| 15 | Fringe | Series | 2008 | Drama, Adventure |
| 16 | Beauty and the Beast | Movie | 1991 | Animation, Romance |
| 17 | Gordon Ramsay: Uncharted | Series | 2019 | Action and Adventure, Lifestyle |
| 18 | Drain the Oceans | Series | 2018 | Documentaries, History |
| 19 | Tron: Ares | Movie | 2025 | Action and Adventure, Science Fiction |
| 20 | Mary Poppins | Movie | 1964 | Musicals, Fantasy |
| 21 | Tsunami: Race Against Time | Series | 2024 | Docuseries |
| 22 | 101 Dalmatians | Movie | 1961 | Action and Adventure, Animation |
| 23 | Sleeping Beauty | Movie | 1959 | Animation, Romance |
| 24 | Tarzan | Movie | 1999 | Action and Adventure, Coming of Age |
| 25 | Savage Kingdom | Series | 2016 | Animals & Nature, Docuseries |
| 26 | Fantasia | Movie | 1940 | Anthology, Music |
| 27 | Life Below Zero | Series | 2013 | Reality, Docuseries |
| 28 | Cinderella | Movie | 1950 | Animation, Romance |
| 29 | Dumbo | Movie | 1941 | Animation |
| 30 | Lady and the Tramp | Movie | 1955 | Action and Adventure, Animation |
| 31 | Strangest Things | Series | 2025 | History, Docuseries |
| 32 | Modern Family | Series | 2009 | Sitcom, Comedy |
| 33 | The Incredible Dr. Pol | Series | 2011 | Medical, Reality |
| 34 | Wonder Man | Disney+ Original | 2026 | Super Heroes, Action and Adventure |
| 35 | Scrubs | Series | 2001 | Drama, Medical |
| 36 | Ella McCay | Movie | 2025 | Drama, Comedy |
| 37 | Firefly | Series | 2002 | Western, Adventure |
| 38 | The X-Files | Series | 1993 | Science Fiction, Drama |
| 39 | Europe From Above | Series | 2024 | Documentaries, Docuseries |
| 40 | History's Greatest Mysteries | Series | 2020 | Documentaries, History |
| 41 | The Fantastic Four: First Steps | Movie | 2025 | Super Heroes, Action and Adventure |
| 42 | Deadpool & Wolverine | Movie | 2024 | Super Heroes, Action and Adventure |
| 43 | The Roses | Series | 2025 | Drama, Comedy |
| 44 | The Greeks | Series | 2016 | History, Docuseries |
| 45 | Arctic Ascent with Alex Honnold | Series | 2024 | Action and Adventure, Docuseries |

#### Hulu Titles (35)

| ID | Title | Type | Year | Genres |
|----|-------|------|------|--------|
| 101 | Family Guy | Series | 1999 | Animation, Comedy |
| 102 | Bob's Burgers | Series | 2011 | Animation, Comedy, FOX |
| 103 | The Secret Lives of Mormon Wives | Hulu Original | 2024 | Reality, Hulu Original |
| 104 | Abbott Elementary | Series | 2021 | Comedy, ABC |
| 105 | The Golden Girls | Series | 1985 | Comedy |
| 106 | Desperate Housewives | Series | 2004 | Drama, Mystery |
| 107 | King of the Hill | Hulu Original | 1997 | Comedy, Animation |
| 108 | The Rookie | Series | 2018 | Action, Drama, ABC |
| 109 | Grey's Anatomy | Series | 2005 | Medical Drama, ABC |
| 110 | Tell Me Lies | Hulu Original | 2022 | Drama, Hulu Original |
| 111 | High Potential | Series | 2024 | Drama, Comedy, ABC |
| 112 | 9-1-1 | Series | 2018 | Action, Drama, ABC |
| 113 | Fear Factor: House of Fear | Series | 2025 | Reality, FOX |
| 114 | The Amazing World of Gumball | Series | 2011 | Animation, Comedy, Cartoon Network |
| 115 | Will Trent | Series | 2023 | Drama, Procedural, ABC |
| 116 | The Beauty | Hulu Original | 2026 | Horror, Science Fiction, Hulu Original |
| 117 | Only Murders in the Building | Hulu Original | 2021 | Drama, Mystery, Hulu Original |
| 118 | Shōgun | Hulu Original | 2024 | Drama, Action and Adventure, Hulu Original |
| 119 | A Thousand Blows | Hulu Original | 2025 | Drama, History, Hulu Original |
| 120 | The Handmaid's Tale | Hulu Original | 2017 | Drama, Thriller, Hulu Original |
| 121 | The Bear | Hulu Original | 2022 | Drama, Comedy, Hulu Original |
| 122 | Love Story: JFK Jr. & Carolyn Bessette | Hulu Original | 2026 | Drama, Romance, Hulu Original |
| 123 | The Americans | Series | 2013 | Drama, History, FX |
| 124 | Mid-Century Modern | Hulu Original | 2025 | Comedy, Hulu Original |
| 125 | Best Medicine | Series | 2026 | Drama, Medical, FOX |
| 126 | The Great | Hulu Original | 2020 | Drama, Comedy, Hulu Original |
| 127 | Shifting Gears | Series | 2025 | Comedy, ABC |
| 128 | Paradise | Hulu Original | 2025 | Drama, Action and Adventure, Hulu Original |
| 129 | ER | Series | 1994 | Drama, Medical |
| 130 | The Lowdown | Series | 2025 | Drama, FX |
| 131 | Elementary | Series | 2012 | Drama, Procedural, CBS |
| 132 | In Vogue: The 90s | Hulu Original | 2025 | Docuseries, Lifestyle, Hulu Original |
| 133 | Cheers | Series | 1982 | Comedy, Classics |
| 134 | The Mentalist | Series | 2008 | Drama, Procedural |
| 135 | M*A*S*H | Series | 1972 | Comedy, Drama, Classics |

### Image Formats
- **Disney+ vertical posters (IDs 16-30)**: 381px width, JPEG, layered with title treatment
- **Disney+ vertical posters (IDs 1-15, 31-45)**: 800px width, WebP, layered with title treatment
- **Hulu 16:9 images (IDs 101, 102, 104, 106, 108-110, 112, 114)**: 800px width, WebP, letterboxed with mood-matched gradient backgrounds
- **Hulu vertical posters (IDs 103, 105, 107, 111, 113, 115-135)**: 800px width, WebP, layered with title treatment
- Uses Disney's RipCut image delivery system for optimized loading

## Analytics & Tracking

Google Analytics 4 events tracked (category: "Card Interaction"):
- `like`: Right swipe action with content title
- `dislike`: Left swipe action with content title
- `super_like`: Up swipe action with content title
- `onboarding`: User completed onboarding tutorial
- `restart`: User restarted session from end screen (includes total swipe count as value)
- `unlock_mode`: User selected a discovery mode (includes mode name and remaining bank)

## Future Enhancements

Potential additions:
- Backend API integration for personalized recommendations
- Machine learning feedback loop based on swipe patterns
- User authentication and profile management
- Persistent watchlists across sessions
- Deep links to Disney+ and Hulu apps
- Social sharing of earned Disney Coins
- Leaderboard system

## Deployment

Hosted on Firebase Hosting:
- Project ID: `swipewatch`
- Live URL: https://swipewatch.web.app
- No-cache headers for instant updates
- SPA-style rewrites for non-asset routes
- Markdown files excluded from deployment

## License

Prototype for content discovery and recommendation training.
