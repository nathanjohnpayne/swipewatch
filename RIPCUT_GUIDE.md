# Using RipCut Layered Posters

The app supports Disney's RipCut layered poster system with two distinct formats: Disney+ vertical posters with title treatments, and Hulu 16:9 letterbox images.

## How It Works

### Disney+ Content (Vertical Posters)
Each Disney+ content item has two separate images composited together:
1. **Background Image**: The main poster artwork (vertical format)
2. **Title Treatment**: The logo/title overlay positioned at the bottom

### Hulu Content (16:9 Letterbox)
Hulu content uses a single horizontal image with a mood-matched gradient background:
1. **Background Image**: 16:9 aspect ratio artwork
2. **No titleImage**: Title displayed via gradient fallback or info section

## Data Formats

### Disney+ Format (with title treatment)
```javascript
{
    id: 1,
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

### Hulu Format (16:9 letterbox)
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

## URL Parameters Explained

### Disney+ Background Image (Vertical Posters)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=jpeg&label=poster_vertical_080&width=381
```

**Parameters:**
- `format=jpeg` - Output format (standard for backgrounds)
- `label=poster_vertical_080` - Image label for vertical poster format
- `width=381` - Image width in pixels (1080p standard)

**API Standard:** Based on "poster vertical - 1080p"
- Uses `/compose` endpoint
- Width of 381px is standardized for poster tiles
- JPEG format for optimal quality

### Hulu Background Image (16:9 Letterbox)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/compose?format=webp&label=standard_art_178&width=800
```

**Parameters:**
- `format=webp` - WebP format for better compression
- `label=standard_art_178` - Standard 16:9 art label (or `standard_art_abc_178`, `standard_art_fox_178`, etc.)
- `width=800` - Wider for letterbox display

**Label Variations by Network:**
- `standard_art_178` - Generic
- `standard_art_abc_178` - ABC content
- `standard_art_fox_178` - FOX content
- `standard_art_hulu-original-series_178` - Hulu Originals
- `standard_art_cartoon-network_178` - Cartoon Network

### Title Treatment Image (Disney+ only)
```
https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/[VARIANT_ID]/trim?max=339|162
```

**Parameters:**
- `max=339|162` - Max width|height in pixels (maintains aspect ratio)

**API Standard:** Based on "poster vertical - title treatment - 1080p"
- Uses `/trim` endpoint
- Size of 339x162 is standardized for poster title overlays

## Finding Variant IDs

1. Access your internal Disney asset system
2. For Disney+ content, locate TWO variant IDs:
   - Background/poster artwork ID
   - Title treatment/logo ID
3. For Hulu content, locate ONE variant ID:
   - 16:9 standard art background ID
4. Update the `background` and `titleImage` fields in `app.js`

## Complete Examples

### Disney+ Example - Beauty and the Beast
```javascript
{
    id: 1,
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

### Hulu Example - Abbott Elementary
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

## Disney API Standards Reference

The app follows Disney's standardized RipCut API parameters:

**For Disney+ Vertical Posters:**
- Endpoint: `/compose`
- Format: `jpeg`
- Label: `poster_vertical_080`
- Width: `381` (1080p)
- Standard: "poster vertical"

**For Hulu 16:9 Art:**
- Endpoint: `/compose`
- Format: `webp`
- Label: `standard_art_178` (or network-specific variants)
- Width: `800`
- Standard: "standard art tile"

**For Title Treatments:**
- Endpoint: `/trim`
- Max size: `339|162` (1080p)
- Standard: "poster vertical - title treatment"

**Key Principles:**
- Use `/compose` endpoint for backgrounds
- Use `/trim` endpoint for title treatments
- Include `label` parameter for proper image selection
- Follow standardized dimensions for consistency

## Visual Layouts

### Disney+ Vertical Poster Layout
```
┌─────────────────────┐
│                     │
│   Background Image  │
│   (Full coverage)   │
│                     │
│                     │
│  ┌───────────────┐  │
│  │ Title Treatment│ │ <- Positioned at bottom, centered
│  └───────────────┘  │
└─────────────────────┘
```

### Hulu 16:9 Letterbox Layout
```
┌─────────────────────┐
│   Gradient Fill     │
│  ┌───────────────┐  │
│  │   16:9 Image  │  │ <- Centered horizontally
│  └───────────────┘  │
│   Gradient Fill     │
└─────────────────────┘
```

## Styling Details

**Disney+ (Vertical Posters):**
- Background fills entire poster area (70% of card height)
- Title positioned at bottom center with:
  - Max width: 85% of card width
  - Max height: 30% of poster area
  - Drop shadow for visibility
  - Maintains aspect ratio

**Hulu (16:9 Letterbox):**
- Gradient background using content's `color` field
- 16:9 image centered with letterbox bars
- Gradient auto-darkens for visual depth

## Fallback System

If either image fails to load, the app automatically falls back to a beautiful gradient card with the text title, so your prototype always looks polished!

## Adding Your Content

For each title in `contentData`:

1. **Disney+ content (with title treatment):**
   ```javascript
   {
       id: 1,
       title: "Your Title",
       type: "Movie",
       description: "Description here...",
       background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/BACKGROUND_ID/compose?format=jpeg&label=poster_vertical_080&width=381",
       titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/TITLE_ID/trim?max=339|162",
       color: "#hexcolor",
       year: "2024",
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
       year: "2024",
       genres: "Genre1, Genre2"
   }
   ```

3. **Fallback only (gradient):**
   ```javascript
   {
       id: 200,
       title: "Your Title",
       type: "Movie",
       description: "Description here...",
       color: "#hexcolor"  // Used for gradient
   }
   ```

## Best Practices

- **Disney+ width**: 381px for optimal vertical poster display
- **Hulu width**: 800px for 16:9 letterbox display
- **Title size**: `max=339|162` for proper scaling
- **Format**: JPEG for Disney+ posters, WebP for Hulu art
- **Testing**: Add one title at a time to verify IDs are correct
- **Colors**: Choose gradient colors that match the content mood
- **IDs**: Use 1-99 for Disney+, 100+ for Hulu content

## Current Status

The app contains 30 titles:
- **15 Disney+ titles** (IDs 1-15): Vertical posters with title treatments
- **15 Hulu titles** (IDs 101-115): 16:9 letterbox with mood gradients

All variant IDs are configured and working. Add new content by following the patterns above.
