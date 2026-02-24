# Using RipCut Layered Posters

The app supports Disney's RipCut layered poster system with three distinct visual formats: Disney+ vertical posters with title treatments, Hulu 16:9 letterbox images, and Hulu vertical posters with title treatments.

## How It Works

### Disney+ Content (Vertical Posters)
Each Disney+ content item has two separate images composited together:
1. **Background Image**: The main poster artwork (vertical format)
2. **Title Treatment**: The logo/title overlay positioned at the bottom

### Hulu Content — Standard Art (16:9 Letterbox)
Hulu standard art content uses a single horizontal image with a mood-matched gradient background:
1. **Background Image**: 16:9 aspect ratio artwork
2. **No titleImage**: Title displayed via gradient fallback or info section

### Hulu Content — Poster Vertical (with Title Treatment)
Newer Hulu Originals (IDs 116-120) use vertical posters, similar to Disney+ format:
1. **Background Image**: Vertical poster artwork
2. **Title Treatment**: Logo/title overlay positioned at the bottom

## Data Formats

### Disney+ Classic Format (IDs 16-30, with title treatment)
```javascript
{
    id: 16,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "A young woman whose father is imprisoned...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}
```

### Disney+ Modern Format (IDs 1-10, with title treatment)
```javascript
{
    id: 1,
    title: "Ocean with David Attenborough",
    type: "Series",
    description: "Explore the vast and mysterious depths...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=poster_vertical_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?format=webp&max=800%7C450",
    color: "#0369a1",
    year: "2025",
    genres: "Documentaries, Animals & Nature"
}
```

### Hulu Standard Art Format (IDs 101-115, 16:9 letterbox)
```javascript
{
    id: 101,
    title: "Family Guy",
    type: "Series",
    description: "The adventures of the Griffin family...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=standard_art_178&width=800",
    color: "#1e3a8a",
    year: "1999",
    genres: "Animation, Comedy"
}
```

### Hulu Poster Vertical Format (IDs 116-120, with title treatment)
```javascript
{
    id: 116,
    title: "The Beauty",
    type: "Hulu Original Series",
    description: "A deadly virus transmitted through sexual contact...",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?format=webp&max=800%7C450",
    color: "#7c2d12",
    year: "2026",
    genres: "Horror, Science Fiction, Hulu Original"
}
```

## URL Parameters Explained

### Disney+ Background Image — Classic (IDs 16-30)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=jpeg&label=poster_vertical_080&width=381
```

**Parameters:**
- `format=jpeg` - Output format (standard for classic posters)
- `label=poster_vertical_080` - Image label for vertical poster format
- `width=381` - Image width in pixels (1080p standard)

### Disney+ Background Image — Modern (IDs 1-10)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=webp&label=poster_vertical_080&width=800
```

**Parameters:**
- `format=webp` - WebP for better compression
- `label=poster_vertical_080` - Standard vertical poster label
- `width=800` - Wider for higher quality display

**Label Variations for Disney+ Originals:**
- `poster_vertical_080` - Standard Disney+ content
- `poster_vertical_disney-original_080` - Disney+ Original series (e.g., Dancing with the Stars, Animals Up Close)

### Hulu Background Image — Standard Art (IDs 101-115)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=webp&label=standard_art_178&width=800
```

**Parameters:**
- `format=webp` - WebP format for better compression
- `label=standard_art_178` - Standard 16:9 art label (or network-specific variants)
- `width=800` - Wider for letterbox display

**Label Variations by Network:**
- `standard_art_178` - Generic
- `standard_art_abc_178` - ABC content (Abbott Elementary, Grey's Anatomy, 9-1-1, etc.)
- `standard_art_fox_178` - FOX content (Bob's Burgers, Fear Factor)
- `standard_art_hulu-original-series_178` - Hulu Originals 16:9 art (Mormon Wives, Tell Me Lies, etc.)
- `standard_art_cartoon-network_178` - Cartoon Network (Amazing World of Gumball)

### Hulu Background Image — Poster Vertical (IDs 116-120)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800
```

**Parameters:**
- `format=webp` - WebP format
- `label=poster_vertical_hulu-original-series_080` - Hulu Original vertical poster label
- `width=800` - Full width for quality display

### Title Treatment Image — Classic (IDs 16-30)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/trim?max=339|162
```

**Parameters:**
- `max=339|162` - Max width|height in pixels (maintains aspect ratio)

### Title Treatment Image — Modern (IDs 1-10, 116-120)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/trim?format=webp&max=800%7C450
```

**Parameters:**
- `format=webp` - WebP output format
- `max=800%7C450` - URL-encoded `800|450` max width|height

## Finding Variant IDs

1. Access your internal Disney asset system
2. For Disney+ content, locate TWO variant IDs:
   - Background/poster artwork ID
   - Title treatment/logo ID
3. For Hulu standard art content, locate ONE variant ID:
   - 16:9 standard art background ID
4. For Hulu poster vertical content, locate TWO variant IDs:
   - Vertical poster artwork ID
   - Title treatment/logo ID
5. Update the `background` and `titleImage` fields in `app.js`

## Complete Examples

### Disney+ Classic — Beauty and the Beast (ID 16)
```javascript
{
    id: 16,
    title: "Beauty and the Beast",
    type: "Movie",
    description: "A young woman whose father is imprisoned by a terrifying beast offers herself in his place, unaware her captor is an enchanted prince.",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9d07a357-5574-43c4-83fa-a4c8b12723e4/compose?format=jpeg&label=poster_vertical_080&width=381",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b223dc02-d12d-4943-a423-0b6e7ed1d2ce/trim?max=339|162",
    color: "#f4c430",
    year: "1991",
    genres: "Animation, Romance"
}
```

### Disney+ Modern — Ocean with David Attenborough (ID 1)
```javascript
{
    id: 1,
    title: "Ocean with David Attenborough",
    type: "Series",
    description: "Explore the vast and mysterious depths of our planet's oceans with legendary naturalist David Attenborough.",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/db0b420a-2ff1-483b-a5f4-308de1c46d52/compose?format=webp&label=poster_vertical_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9a76bac9-d9aa-402d-bc13-220dd849a6a0/trim?format=webp&max=800%7C450",
    color: "#0369a1",
    year: "2025",
    genres: "Documentaries, Animals & Nature"
}
```

### Hulu Standard Art — Abbott Elementary (ID 104)
```javascript
{
    id: 104,
    title: "Abbott Elementary",
    type: "Series",
    description: "A group of dedicated teachers navigate the challenges of working at an underfunded Philadelphia public school.",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8592367e-0c8f-4b16-8704-b67d0306012c/compose?format=webp&label=standard_art_abc_178&width=800",
    color: "#22c55e",
    year: "2021",
    genres: "Comedy, ABC"
}
```

### Hulu Poster Vertical — Only Murders in the Building (ID 117)
```javascript
{
    id: 117,
    title: "Only Murders in the Building",
    type: "Hulu Original Series",
    description: "Three strangers who share an obsession with true crime suddenly find themselves wrapped up in one when investigating a mysterious death in their apartment building.",
    background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0a66a348-5d0e-4635-b9d3-b2bb97793e8e/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
    titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/09c274ce-4666-48ba-a881-38fd026e05a9/trim?format=webp&max=800%7C450",
    color: "#ca8a04",
    year: "2021",
    genres: "Drama, Mystery, Hulu Original"
}
```

## Disney API Standards Reference

The app follows Disney's standardized RipCut API parameters:

### Poster Labels (Vertical Format)

| Label | Platform | Usage |
|-------|----------|-------|
| `poster_vertical_080` | Disney+ | Standard vertical poster |
| `poster_vertical_disney-original_080` | Disney+ | Disney+ Original content |
| `poster_vertical_hulu-original-series_080` | Hulu | Hulu Original vertical poster |

### Standard Art Labels (16:9 Format)

| Label | Network | Usage |
|-------|---------|-------|
| `standard_art_178` | Generic | Default 16:9 art |
| `standard_art_abc_178` | ABC | ABC network content |
| `standard_art_fox_178` | FOX | FOX network content |
| `standard_art_hulu-original-series_178` | Hulu | Hulu Original 16:9 art |
| `standard_art_cartoon-network_178` | Cartoon Network | Cartoon Network content |

### Endpoints and Parameters

| Parameter | Classic (IDs 16-30) | Modern (IDs 1-10, 116-120) | Standard Art (IDs 101-115) |
|-----------|--------------------|-----------------------------|---------------------------|
| Endpoint | `/compose` | `/compose` | `/compose` |
| Format | `jpeg` | `webp` | `webp` |
| Width | `381` | `800` | `800` |
| Title endpoint | `/trim` | `/trim` | N/A |
| Title max | `339\|162` | `800\|450` | N/A |

**Key Principles:**
- Use `/compose` endpoint for backgrounds
- Use `/trim` endpoint for title treatments
- Include `label` parameter for proper image selection
- Follow standardized dimensions for consistency

## Visual Layouts

### Vertical Poster Layout (Disney+ and Hulu Poster IDs)
```
┌─────────────────────┐
│                     │
│   Background Image  │
│   (Full coverage)   │
│                     │
│                     │
│  ┌───────────────┐  │
│  │ Title Treatment│  │ ← Positioned at bottom, centered
│  └───────────────┘  │
└─────────────────────┘
```

### 16:9 Letterbox Layout (Hulu Standard Art IDs)
```
┌─────────────────────┐
│   Gradient Fill     │
│  ┌───────────────┐  │
│  │   16:9 Image  │  │ ← Centered horizontally
│  └───────────────┘  │
│   Gradient Fill     │
└─────────────────────┘
```

## Styling Details

**Vertical Posters (Disney+ and Hulu Poster):**
- Background fills entire poster area (70% of card height)
- Title positioned at bottom center with:
  - Max width: 85% of card width
  - Max height: 30% of poster area
  - Drop shadow for visibility
  - Maintains aspect ratio

**16:9 Letterbox (Hulu Standard Art):**
- Gradient background using content's `color` field
- 16:9 image centered with letterbox bars
- Gradient auto-darkens via `adjustColor()` for visual depth

## Card Rendering Detection

The app automatically determines which layout to use by inspecting the `background` URL:

```
URL contains "label=poster" AND item has titleImage → Vertical poster with title overlay
URL contains "label=standard" OR has background → 16:9 letterbox
No background URL → Gradient-only fallback
```

## Fallback System

If either image fails to load, the app automatically falls back to a gradient card using the content's `color` field, so your prototype always looks polished. The fallback is triggered by `onerror` handlers on `<img>` elements.

## Adding Your Content

For each title in `contentData`:

1. **Disney+ content (vertical poster with title treatment):**
   ```javascript
   {
       id: 1,
       title: "Your Title",
       type: "Movie",
       description: "Description here...",
       background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=poster_vertical_080&width=800",
       titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?format=webp&max=800%7C450",
       color: "#hexcolor",
       year: "2025",
       genres: "Genre1, Genre2"
   }
   ```

2. **Hulu content (16:9 letterbox):**
   ```javascript
   {
       id: 101,
       title: "Your Title",
       type: "Series",
       description: "Description here...",
       background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=standard_art_178&width=800",
       color: "#hexcolor",
       year: "2025",
       genres: "Genre1, Genre2"
   }
   ```

3. **Hulu content (vertical poster with title treatment):**
   ```javascript
   {
       id: 116,
       title: "Your Title",
       type: "Hulu Original Series",
       description: "Description here...",
       background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
       titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?format=webp&max=800%7C450",
       color: "#hexcolor",
       year: "2025",
       genres: "Genre1, Hulu Original"
   }
   ```

4. **Fallback only (gradient):**
   ```javascript
   {
       id: 200,
       title: "Your Title",
       type: "Movie",
       description: "Description here...",
       color: "#hexcolor"
   }
   ```

## Best Practices

- **Disney+ classic width**: 381px for original vertical poster display (JPEG)
- **Modern width**: 800px for all modern posters and 16:9 art (WebP)
- **Classic title size**: `max=339|162` for classic poster title treatments
- **Modern title size**: `max=800|450` for modern title treatments
- **Format**: JPEG for classic Disney+ posters, WebP for everything else
- **Testing**: Add one title at a time to verify variant IDs are correct
- **Colors**: Choose gradient colors that match the content mood
- **IDs**: Use 1-99 for Disney+, 100+ for Hulu content

## Current Status

The app contains **45 titles**:
- **25 Disney+ titles** (IDs 1-10, 16-30): Vertical posters with title treatments
- **15 Hulu standard art titles** (IDs 101-115): 16:9 letterbox with mood gradients
- **5 Hulu poster titles** (IDs 116-120): Vertical posters with title treatments

All variant IDs are configured and working. Add new content by following the patterns above.
