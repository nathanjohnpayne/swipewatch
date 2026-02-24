# SwipeWatch - Disney Content Discovery

A Tinder-style web app for discovering Disney+ and Hulu content through swipe interactions. Features session-based content rotation and gamified engagement with Disney Coins.

🌐 **Live Site:** https://swipewatch.web.app

## Features

### Swipe Gestures
- **Swipe Right** / Click Heart: Get more recommendations like this (like)
- **Swipe Left** / Click X: Remove from recommendations (dislike)
- **Swipe Up** / Click Star: Add to your watchlist (super like)

### Content Management
- **Session-based rotation**: 10 tiles per session
- **Smart tracking**: Tiles don't repeat until all content has been shown
- **30 total titles**: Mix of Disney+ and Hulu content
- **Dynamic shuffling**: Random order each session

### Interactive Elements
- Smooth drag-and-drop card animations
- Visual swipe indicators ("NOPE", "LIKE", "+ Watch List")
- Action buttons for click-to-swipe functionality
- Progress bar and counter (X/10 per session)
- Card stack with depth effect
- Onboarding tutorial on first visit

### Gamification
- **Disney Coins**: Earn 1 coin per swipe
- End screen showing total coins earned
- Statistics breakdown (liked, super liked, passed)

### User Experience
- Fully responsive design (mobile, tablet, desktop)
- Touch and mouse support
- Animated transitions
- Game-like feel with instant feedback
- Google Analytics tracking
- No-cache deployment for instant updates

## Quick Start

### Online
Visit https://swipewatch.web.app

### Local Development
1. Open `index.html` in a web browser
2. Complete the onboarding tutorial
3. Start swiping through 10 cards per session
4. Track your Disney Coins on the end screen

### Firebase Deployment
```bash
firebase login
firebase use swipewatch
firebase deploy
```

No build process or dependencies required - just HTML, CSS, and vanilla JavaScript!

## How It Works

### Session Management
- Each session shows 10 random tiles from a pool of 30
- Content IDs are tracked in localStorage
- Once all 30 titles have been shown, the cycle resets
- Ensures users see all content before repeats

### Swipe Actions
- **Left swipe** (Dislike): Remove from recommendations
- **Right swipe** (Like): Get more recommendations like this
- **Up swipe** (Super Like): Add to your watchlist
- Visual indicators appear during swipe gestures

### Controls
- **Drag cards**: Click/touch and drag in any direction
- **Action buttons**: Click the bottom buttons for precise control
  - ✕ Red button = Dislike (NOPE)
  - ♡ Green button = Like (LIKE)
  - ★ Blue button = Super Like (+ Watch List)

### Statistics & Rewards
The end screen displays:
- **Disney Coins Earned**: Total swipes (1 coin per swipe)
- Liked count (right swipes)
- Super Liked count (up swipes)
- Passed count (left swipes)

## Content Structure

### Disney+ Content Format
```javascript
{
    id: 1,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "A young woman whose father is imprisoned...",
    background: "https://disney.images.edge.bamgrid.com/.../poster_vertical_080",
    titleImage: "https://disney.images.edge.bamgrid.com/.../trim",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}
```

### Hulu Content Format (16:9 Letterbox)
```javascript
{
    id: 103,
    title: "The Secret Lives of Mormon Wives",
    type: "Hulu Original Series",
    description: "An intimate look into the lives...",
    background: "https://disney.images.edge.bamgrid.com/.../standard_art_178",
    color: "#0ea5e9",
    year: "2024",
    genres: "Reality, Hulu Original"
}
```

### Adding Your Own Content

Edit the `contentData` array in `app.js`:
- Use Disney RipCut image delivery system
- Include both vertical posters (Disney+) and 16:9 images (Hulu)
- Set mood-matched gradient colors for letterbox backgrounds
- See `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md` for image specs

### Session Size Configuration
```javascript
const SESSION_SIZE = 10; // Change to show more/fewer tiles per session
```

### Styling
- Edit `styles.css` to change colors, sizes, and animations
- Current color scheme: Purple gradient background
- Swipe indicators: Red (NOPE), Green (LIKE), Blue (+ Watch List)
- Fully responsive with breakpoints at 768px, 480px, 360px

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
SwipeWatch/
├── index.html          # Main HTML structure with onboarding
├── styles.css          # All styling, animations, and responsive design
├── app.js             # Application logic, swipe handling, session management
├── disney-coin.png    # Disney Coins reward image
├── firebase.json      # Firebase Hosting configuration (no-cache headers)
├── .firebaserc        # Firebase project configuration
├── README.md          # This file
├── RIPCUT_GUIDE.md    # Disney RipCut image system documentation
└── POSTER_GUIDE.md    # Poster format specifications
```

## Technical Details

### Core Technologies
- **No frameworks**: Pure vanilla JavaScript
- **No build step**: Static HTML/CSS/JS
- **Hosting**: Firebase Hosting with CDN
- **Analytics**: Google Analytics 4 (GA4) event tracking

### Features Implementation
- **Gesture detection**: Custom touch/mouse event handling with passive: false
- **Animations**: CSS transitions and transforms
- **Responsive**: Mobile-first design with media queries (768px, 480px, 360px)
- **Session management**: localStorage for tracking shown content
- **Fisher-Yates shuffle**: Random content ordering per session
- **Progress tracking**: Real-time progress bar and counter
- **No-cache deployment**: Instant updates via Firebase headers

### Browser Storage
- `swipewatch_shown_content`: Array of content IDs already shown
- `swipewatch_onboarding_completed`: Boolean flag for onboarding state

## Content Library

### Current Content (30 titles)
- **15 Disney+ titles**: Classic animations, documentaries, and originals
  - Beauty and the Beast, Mary Poppins, Cinderella
  - Gordon Ramsay: Uncharted, Drain the Oceans
  - Tsunami: Race Against Time, Life Below Zero
  - And more...

- **15 Hulu titles**: Popular series and originals
  - Family Guy, Bob's Burgers, Abbott Elementary
  - The Secret Lives of Mormon Wives, Tell Me Lies
  - Grey's Anatomy, 9-1-1, Will Trent
  - And more...

### Image Formats
- **Disney+ vertical posters**: 381px width, layered with title treatment
- **Hulu 16:9 images**: Letterboxed with mood-matched gradient backgrounds
- Uses Disney's RipCut image delivery system for optimized loading

## Analytics & Tracking

Google Analytics 4 events tracked:
- `like`: Right swipe action with content title
- `dislike`: Left swipe action with content title
- `super_like`: Up swipe action with content title
- `onboarding`: User completed onboarding tutorial
- `restart`: User restarted session from end screen

## Future Enhancements

Potential additions:
- Backend API integration for personalized recommendations
- Machine learning feedback loop based on swipe patterns
- User authentication and profile management
- Persistent watchlists across sessions
- Genre/mood filtering options
- Deep links to Disney+ and Hulu apps
- Social sharing of earned Disney Coins
- Leaderboard system

## Deployment

Hosted on Firebase Hosting:
- Project ID: `swipewatch`
- Live URL: https://swipewatch.web.app
- No-cache headers for instant updates
- Static asset optimization

## License

Prototype for content discovery and recommendation training.
