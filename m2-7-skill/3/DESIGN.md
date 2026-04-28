# Oasis Landing Page — Version 3: Immersive Nature Parallax

## Concept & Vision

A visual descent into nature's embrace. This version uses **deep parallax layering** to create the sensation of moving through atmospheric forest landscapes. Content emerges from and dissolves into layered nature imagery — misty mountains, ancient forests, still waters. The feeling is **transcendent, earthy, and deeply grounding**. Reference: a meditation app designed by a high-end nature photographer.

## Design Language

**Aesthetic Direction:** Atmospheric nature photography meets editorial design. Reference: National Geographic's finest spreads crossed with Aesop packaging.

**Color Palette:**
- Primary: `#E8E4DC` (warm linen)
- Secondary: `#4A4A4A` (deep stone)
- Accent: `#8B7355` (earth brown)
- Background: `#1C1C1C` (deep forest night)
- Text: `#F0EDE6`

**Typography:**
- Display: `Playfair Display` at `11vw`, weight 400, tracking -0.02em
- Headlines: `Playfair Display` at `4vw`, weight 400
- Body: `Source Sans Pro` at `17px`, weight 300, line-height 1.85
- Labels: `Fira Code` at `10px`, tracking 0.12em

**Spatial System:**
- Full-bleed imagery sections
- Text overlays on image with gradient scrims
- Variable padding based on scroll position
- Elements positioned at visual anchors in parallax layers

**Motion Philosophy:**
- Multi-layer parallax: background at 0.3x, midground at 0.6x, foreground at 1x
- Content fades in from blur (filter: blur(10px) → blur(0))
- Staggered text reveals with 100ms delays
- Smooth easing with `power3.out`

## Layout & Structure

1. **Hero Section** — Full-bleed mountain image with parallax. Title floats over mist layers. Scroll reveals deeper into the landscape.
2. **Philosophy Section** — Split view: parallax forest on one side, text on other with counter-movement.
3. **Retreats Section** — Three cards float above a continuous parallax valley image.
4. **Experience Section** — Full-width parallax nature sequence (3 images).
5. **Journey Section** — Centered CTA with mountain backdrop and expanding rings.
6. **Footer** — Minimal, fades into darkness.

## Features & Interactions

- Three-layer parallax system using GSAP ScrollTrigger
- Text reveal with blur-to-sharp animation
- Image zoom on scroll for hero
- Rotating decorative elements in parallax layers
- Smooth scroll with Lenis-like feel via native CSS

## Component Inventory

**Button Primary:** Earth brown background, cream text, border-radius 2px, hover lifts with shadow
**Navigation:** Transparent, fixed, text becomes visible on scroll with backdrop blur
**Cards:** Semi-transparent dark glass, backdrop blur, gold border on hover
**Section Dividers:** Thin horizontal lines that expand on scroll

## Technical Approach

- Single HTML file with embedded CSS and JavaScript
- GSAP + ScrollTrigger for all parallax and reveal animations
- Full-bleed background images via Unsplash (nature/mountain themes)
- Google Fonts: Playfair Display, Source Sans Pro, Fira Code
- No build tools required
