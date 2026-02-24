# Adding Custom Poster Images

The app is configured to use Disney's RipCut image delivery system. You have several options for poster images:

## Option 1: Use RipCut Image System (Recommended)

The app supports two image formats depending on content type:

### Disney+ Content (Vertical Posters with Title Treatment)
```javascript
{
    id: 1,
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

### Hulu Content (16:9 Letterbox)
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

**Finding Variant IDs:**
1. Access your internal Disney asset management system
2. Locate the content title you need
3. Copy the variant ID (UUID format, e.g., `9d07a357-5574-43c4-83fa-a4c8b12723e4`)
4. Replace `VARIANT_ID_HERE` with the actual ID

**RipCut URL Parameters:**
- `format=jpeg|webp` - Image format (jpeg for Disney+, webp for Hulu)
- `label=poster_vertical_080|standard_art_178` - Image variant label
- `width=381|800` - Image width (381 for vertical, 800 for 16:9)

## Option 2: Use Other External URLs

Edit `app.js` and add any image URL to the `background` field:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "https://your-cdn.com/mandalorian-poster.jpg",  // Any URL
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

1. Create a `posters` folder in the SwipeWatch directory
2. Add poster images (JPG or PNG format)
3. Update the `background` field with relative paths:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "posters/mandalorian.jpg",  // Local path
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
3. The gradient uses the `color` field for each item
4. For Hulu content (no `titleImage`), the gradient appears as letterbox bars

## Updating Colors

To change the gradient colors, edit the `color` field in `app.js`:

```javascript
{
    id: 1,
    title: "The Mandalorian",
    type: "Series",
    description: "After the fall of the Empire...",
    background: "",
    color: "#1a1a2e",  // Any hex color code
    year: "2019",
    genres: "Sci-Fi, Action"
}
```

The app automatically creates a gradient by darkening the base color using the `adjustColor()` function.

## Best Practices

- **Disney+ vertical posters:** 381px width, 2:3 aspect ratio
- **Hulu 16:9 images:** 800px width, 16:9 aspect ratio
- **Format:** JPEG for Disney+ posters, WebP for Hulu art
- **File size:** Keep under 500KB for fast loading
- **Colors:** Choose mood-matched hex colors for gradients

## Example Setup with Local Images

```
SwipeWatch/
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

The app currently contains **30 titles** with working RipCut URLs:
- **15 Disney+ titles** (IDs 1-15): Vertical posters with title treatments
- **15 Hulu titles** (IDs 101-115): 16:9 letterbox with mood gradients

**Featured Content:**
- Disney+: Beauty and the Beast, Mary Poppins, Cinderella, Fantasia, Dumbo, etc.
- Hulu: Family Guy, Bob's Burgers, Abbott Elementary, Grey's Anatomy, etc.

**Fallback System:**
If RipCut images fail to load (wrong variant ID, network issues, etc.), the app automatically displays beautiful gradient cards with the title, so the prototype always looks polished!
