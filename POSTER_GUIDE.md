# Adding Custom Poster Images

The app is configured to use Disney's RipCut image delivery system. You have several options for poster images.

## Option 1: Use RipCut Image System (Recommended)

The app supports three image formats depending on content type:

### Disney+ Content (Vertical Posters with Title Treatment)

Two parameter styles exist—modern (preferred for new content) and classic:

**Modern format (IDs 1-15, 31-45):**
```javascript
{
    id: 1,
    title: "Ocean with David Attenborough",
    type: "Series",
    description: "Explore the vast and mysterious depths...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/VARIANT_ID_HERE/compose?format=webp&label=poster_vertical_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_VARIANT_ID/trim?format=webp&max=800%7C450",
    color: "#0369a1",
    year: "2025",
    genres: "Documentaries, Animals & Nature"
}
```

**Classic format (IDs 16-30):**
```javascript
{
    id: 16,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "A young woman whose father is imprisoned...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/VARIANT_ID_HERE/compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_VARIANT_ID/trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}
```

### Hulu Content—Standard Art (16:9 Letterbox, IDs 101, 102, 104, 106, 108-110, 112, 114)
```javascript
{
    id: 101,
    title: "Family Guy",
    type: "Series",
    description: "The adventures of the Griffin family...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/VARIANT_ID_HERE/compose?format=webp&label=standard_art_178&width=800",
    color: "#1e3a8a",
    year: "1999",
    genres: "Animation, Comedy"
}
```

### Hulu Content—Poster Vertical (with Title Treatment, IDs 103, 105, 107, 111, 113, 115-135)
```javascript
{
    id: 116,
    title: "The Beauty",
    type: "Hulu Original Series",
    description: "A deadly virus transmitted through sexual contact...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/VARIANT_ID_HERE/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_VARIANT_ID/trim?format=webp&max=800%7C450",
    color: "#7c2d12",
    year: "2026",
    genres: "Horror, Science Fiction, Hulu Original"
}
```

**Finding Variant IDs:**
1. Access your internal Disney asset management system
2. Locate the content title you need
3. Copy the variant ID (UUID format, e.g., `9d07a357-5574-43c4-83fa-a4c8b12723e4`)
4. Replace `VARIANT_ID_HERE` with the actual ID

**RipCut URL Parameters:**

| Parameter | Classic Disney+ | Modern Disney+/Hulu Poster | Hulu Standard Art |
|-----------|----------------|---------------------------|-------------------|
| `format` | `jpeg` | `webp` | `webp` |
| `label` | `poster_vertical_080` | `poster_vertical_*_080` | `standard_art_*_178` |
| `width` | `381` | `800` | `800` |
| Title `max` | `339\|162` | `800\|450` | N/A |

**Network-specific poster_vertical label variants:**
- `poster_vertical_080`—Generic / Disney+ standard
- `poster_vertical_disney-original_080`—Disney+ Originals
- `poster_vertical_hulu-original-series_080`—Hulu Originals (poster)
- `poster_vertical_abc_080`—ABC network
- `poster_vertical_fox_080`—FOX network
- `poster_vertical_fx_080`—FX network
- `poster_vertical_cbs_080`—CBS network

**Network-specific standard_art label variants:**
- `standard_art_178`—Generic
- `standard_art_abc_178`—ABC network
- `standard_art_fox_178`—FOX network
- `standard_art_hulu-original-series_178`—Hulu Originals (16:9)
- `standard_art_cartoon-network_178`—Cartoon Network

## Option 2: Use Other External URLs

Edit `app.js` and add any image URL to the `background` field:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "https://your-cdn.com/mandalorian-poster.jpg",
    color: "#1a1a2e",
    year: "2019",
    genres: "Sci-Fi, Action"
}
```

**Recommended sources:**
- Disney RipCut system (primary)
- Internal Disney CDN/asset library
- Your company's media server
- Cloud storage (S3, Azure, Google Cloud)

## Option 3: Use Local Images

1. Create a `posters` folder in the Swipe Watch directory
2. Add poster images (JPG, PNG, or WebP format)
3. Update the `background` field with relative paths:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "posters/mandalorian.jpg",
    color: "#1a1a2e",
    year: "2019",
    genres: "Sci-Fi, Action"
}
```

## Option 4: Keep Gradient Fallbacks

The app can display beautiful gradient cards with the title when images aren't available. This works great for:
- Prototyping and demos
- When poster images aren't available yet
- Testing functionality without image dependencies

Each content item has a custom color that creates a unique gradient background.

## How the Fallback System Works

1. If a `background` URL is provided, the app tries to load it
2. If the image fails to load or isn't available, it automatically shows the gradient fallback
3. The gradient uses the `color` field for each item, darkened via `adjustColor()` for depth
4. For Hulu standard art content (no `titleImage`), the gradient appears as letterbox bars
5. Fallback is triggered by `onerror` handlers on the `<img>` elements

## How Card Format Is Determined

The app inspects the `background` URL to automatically choose the right layout:

```
URL contains "label=poster" AND item has titleImage
  → Layered vertical poster with title treatment overlay

URL contains "label=standard" OR has any background URL
  → 16:9 letterbox with gradient bars

No background URL
  → Gradient-only card with text title
```

This means you can mix formats freely in the `contentData` array—the rendering logic handles it automatically.

## Updating Colors

To change the gradient colors, edit the `color` field in `app.js`:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "",
    color: "#1a1a2e",
    year: "2019",
    genres: "Sci-Fi, Action"
}
```

The app automatically creates a gradient by darkening the base color using the `adjustColor()` function.

## Best Practices

- **New content**: Use the modern format (WebP, 800px width, `max=800|450`)
- **Disney+ vertical posters**: 2:3 aspect ratio
- **Hulu 16:9 images**: 16:9 aspect ratio
- **Format**: WebP preferred for all new content; JPEG acceptable for classic posters
- **File size**: Keep under 500KB for fast loading
- **Colors**: Choose mood-matched hex colors for gradients
- **IDs**: Use 1-99 for Disney+, 100+ for Hulu content
- **Testing**: Add one title at a time to verify variant IDs are correct

## Example Setup with Local Images

```
Swipe Watch/
├── index.html
├── styles.css
├── app.js
├── posters/
│   ├── beauty-and-the-beast.jpg
│   ├── family-guy.jpg
│   ├── abbott-elementary.jpg
│   └── ...
```

Then update app.js:
```javascript
background: "posters/beauty-and-the-beast.jpg"
```

## Current Content

The app currently contains **80 titles** with working RipCut URLs:
- **45 Disney+ titles** (IDs 1-15, 16-30, 31-45): Vertical posters with title treatments
- **9 Hulu standard art titles** (IDs 101, 102, 104, 106, 108-110, 112, 114): 16:9 letterbox with mood gradients
- **26 Hulu poster titles** (IDs 103, 105, 107, 111, 113, 115-135): Vertical posters with title treatments

**Featured Disney+ Content:**
- Ocean with David Attenborough, The Beatles Anthology, Sherlock, Malcolm in the Middle
- Beauty and the Beast, Mary Poppins, Cinderella, Fantasia, Dumbo
- Tron: Ares, Wonder Man, Dancing with the Stars, Gordon Ramsay: Uncharted
- Firefly, The X-Files, Scrubs, Fringe, Modern Family, Ella McCay
- The Fantastic Four: First Steps, Deadpool & Wolverine, The Roses, The Greeks
- Europe From Above, History's Greatest Mysteries, Strangest Things, Arctic Ascent
- And more...

**Featured Hulu Content:**
- Family Guy, Bob's Burgers, Abbott Elementary, Grey's Anatomy
- Only Murders in the Building, Shōgun, The Handmaid's Tale, The Bear
- The Secret Lives of Mormon Wives, Tell Me Lies, A Thousand Blows
- Paradise, The Great, The Americans, Mid-Century Modern
- ER, The Lowdown, Elementary, In Vogue: The 90s, Cheers, The Mentalist, M*A*S*H
- And more...

**Fallback System:**
If RipCut images fail to load (wrong variant ID, network issues, etc.), the app automatically displays gradient cards with the title, so the prototype always looks polished.
