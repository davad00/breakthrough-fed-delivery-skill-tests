# Oasis Landing Page — Version 4: Dramatic Typography Focus

## Concept & Vision

Type as architecture, letters as landscapes. This version transforms the landing page into a **typographic sculpture** where words don't just convey information — they command space, evoke emotion, and demand attention. The aesthetic is **bold, confrontational, and deeply artistic**. Reference: Wolfgang Weingart's Swiss typography meets Damien Hirst's scale obsession.

## Design Language

**Aesthetic Direction:** Typographic maximalism in a minimalist space. Bold, experimental, gallery-like.

**Color Palette:**
- Primary: `#FFFFFF` (pure white)
- Secondary: `#999999` (concrete grey)
- Accent: `#FF3D00` (electric vermillion)
- Background: `#0D0D0D` (carbon black)
- Text: `#FFFFFF`

**Typography:**
- Hero Display: `Syne` at `20vw`, weight 800, tracking -0.06em — ENORMOUS
- Section Display: `Syne` at `12vw`, weight 700
- Body: `Space Grotesk` at `18px`, weight 400, line-height 1.7
- Labels: `Space Mono` at `9px`, tracking 0.3em, uppercase

**Spatial System:**
- Words break boundaries, overlap, and flow off-screen
- Asymmetric layouts with intentional tension
- Negative space used for dramatic effect
- Sections revealed through scroll-triggered letter animations

**Motion Philosophy:**
- Letter-by-letter reveals with GSAP SplitText-like effect
- Words slide in from unexpected angles
- Rotation and scale transforms on text
- Stagger delays create wave-like effects
- `power4.out` easing for dramatic punch

## Layout & Structure

1. **Hero Section** — Single massive word "OASIS" that animates letter by letter. Other words drift and parallax.
2. **Philosophy Section** — Giant statement text that clips and reveals on scroll. "BE STILL" in massive type.
3. **Offerings Section** — Words animate in sequence to reveal retreat names.
4. **Experience Section** — Pull quote in enormous type with word-by-word reveal.
5. **Contact Section** — "COME" in massive letters that fills the viewport.
6. **Footer** — Minimal type signature.

## Features & Interactions

- Custom cursor: small square that rotates on hover
- Text split animation (manual letter wrapping)
- Parallax text layers at different speeds
- Magnetic text pull on hover (letters attracted to cursor)
- Kinetic typography that responds to scroll velocity

## Component Inventory

**Button Primary:** Vermillion background, black text, square corners, massive padding 24px 72px, hover inverts
**Navigation:** Wordmark only, minimal, top-left, hover reveals navigation words
**Cards:** None — pure typography
**Section Titles:** Massive words with animated reveals

## Technical Approach

- Single HTML file with embedded CSS and JavaScript
- GSAP + ScrollTrigger for all animations
- Google Fonts: Syne, Space Grotesk, Space Mono
- Manual text splitting for letter animations
- No build tools required
