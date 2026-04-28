---
version: alpha
name: Oasis — The Tide
description: Luxury meditation retreat. Ocean-midnight aesthetic. Deep immersion, cool clarity, the stillness beneath the surface.
colors:
  primary: "#D4E4F2"
  secondary: "#2D5F7A"
  tertiary: "#41BFBF"
  neutral: "#040914"
  on-tertiary: "#040914"
  on-neutral: "#D4E4F2"
typography:
  display-huge:
    fontFamily: Libre Baskerville
    fontSize: 12vw
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: -0.02em
  display-large:
    fontFamily: Libre Baskerville
    fontSize: 7vw
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.01em
  display-italic:
    fontFamily: Libre Baskerville
    fontSize: 5vw
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.0
    letterSpacing: 0em
  h1:
    fontFamily: Libre Baskerville
    fontSize: 3.5vw
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  body-md:
    fontFamily: IBM Plex Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0em
  label-micro:
    fontFamily: IBM Plex Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 2px
  md: 6px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 18vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 18px 40px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px 40px
    typography: "{typography.label-micro}"
  nav-dot:
    backgroundColor: "{colors.secondary}"
    size: 6px
    rounded: "{rounded.full}"
  nav-dot-active:
    backgroundColor: "{colors.tertiary}"
    size: 8px
    rounded: "{rounded.full}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  card-testimonial:
    backgroundColor: "#080F1E"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 40px
  cursor-default:
    backgroundColor: "transparent"
    borderColor: "{colors.primary}"
    size: 16px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "transparent"
    borderColor: "{colors.tertiary}"
    size: 52px
    rounded: "{rounded.full}"
---

## Overview

Midnight. You are standing at the edge of a California cliff where Big Sur meets the Pacific. The ocean below does not roar — it breathes. This is the emotional register of Oasis v4: not drama, but depth. Not luxury's usual gold-and-marble warmth, but the cold, clarifying blue of going under.

The site is built on a near-black deep ocean void (`#040914`) — not pure black, which reads as void, but a blue-tinged near-nothing that suggests water at depth. Against this, cold moonlight text (`#D4E4F2`) feels like bioluminescence. The sole accent — teal-aqua (`#41BFBF`) — is the color of shallow tropical water where sunlight still reaches. It is used exclusively for interaction, activation, and navigation states.

**The Signature Move: Canvas Water Ripple**
The hero section is a live, interactive 2D wave simulation rendered on an HTML5 Canvas element. The simulation uses a two-buffer height-map system (512×512 grid) where each cell averages its four neighbors from the previous frame, propagating waves across the surface. The damping factor (`0.99`) ensures ripples fade naturally. When the user moves the mouse, large ripples emanate from the cursor's canvas position. When idle, small ambient ripples spawn randomly, maintaining the sense of a living surface. The canvas maps height values to color: low values render as the deep ocean neutral, high values shift toward the teal-blue highlight. All DOM text content is layered above the canvas via absolute positioning, creating the illusion of words floating on water.

**The Breathing Title:**
The hero wordmark "Oasis" has a gentle scale animation (1 → 1.012 → 1) on a 4-second loop using GSAP's sine ease, mimicking the slow pulse of the ocean's respiration.

**Motion Tokens:**
- `ease-tide: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle; for all element reveals
- `ease-depth: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy; for color and opacity transitions
- `ease-surface: power4.out` — for hover micro-interactions, sharp entry with graceful finish
- Duration scale: micro (0.25s), standard (0.8s), cinematic (1.8s+)

## Colors

The palette is derived from a single image: the surface of the Pacific Ocean at 2am, photographed from below.

**Neutral (`#040914`)** is the foundation — a blue-inflected near-black that reads as depth, not emptiness. Pure black (`#000000`) would feel like a void; this reads like water. Every page section uses this as its base.

**Primary (`#D4E4F2`)** is cold moonlight. Not pure white — it carries the blue undertone of light filtered through seawater. Used for all narrative text, headlines, and primary UI. Against the neutral background, it achieves a contrast ratio of approximately 13.5:1, well above WCAG AA.

**Secondary (`#2D5F7A`)** is the color of shallow ocean depths — blue-grey, recessive. Used for supporting labels, metadata, inactive navigation dots, and secondary text. It whispers rather than speaks.

**Tertiary (`#41BFBF`, "Bioluminescent Teal")** is the site's single interactive signal. It appears exactly where the user can act: active navigation dots, the primary CTA button, teal left-border accents on experience items, card top-borders on testimonials. Its scarcity is its power — every appearance signals action.

## Typography

The typographic strategy is built on a binary: the classical weight of Libre Baskerville serif against the cold precision of IBM Plex Mono. These two typefaces should never meet in the middle. There is no sans-serif. There is no in-between.

**Display Huge (12vw, Libre Baskerville 400):** The "Oasis" hero wordmark. At this scale, the letterforms read as architecture — the 'O' becomes a portal, the full word becomes a place. Set in regular weight to avoid heaviness; the scale provides all the authority needed.

**Display Large (7vw, Libre Baskerville 400):** Section-opening statements. "Surrender to the tide." "The mind is like water." These are the site's thesis statements, not headings.

**Display Italic (5vw, Libre Baskerville italic):** Pull quotes and philosophy statements. The italic creates a sense of spoken word, of listening rather than reading.

**H1 (3.5vw, Libre Baskerville 700):** Suite names, section titles when legibility is required at architectural scale.

**Body MD (15px, IBM Plex Mono 400):** All narrative paragraphs, suite descriptions, and long-form copy. The monospaced font imposes a precise, clinical calm — a deliberate contrast to the serif's warmth. It reads like a field report from a scientist who has achieved enlightenment.

**Label Micro (10px, IBM Plex Mono 500):** All UI elements — navigation dot labels, button text, price/duration pairs, section identifiers. Always uppercase. Always letter-spaced at 0.14em. It evokes instrument readouts, navigation charts, tide tables.

**The Gap:** There is intentionally no typography between H1 (3.5vw) and Body MD (15px). This gap is the silence between waves.

## Layout

The layout is a single long vertical scroll — a descent. The user does not navigate; they go under.

**No standard grid.** Sections use full-viewport width with internal compositions built on custom CSS Grid tracks and absolute positioning. Content bleeds to viewport edges. There are no gutters in the conventional sense — only intentional negative space used as breathing room.

**Dot Navigation (Right Edge):** A vertical column of five 6px circles anchored to the right edge of the viewport (`position: fixed`). The active section's dot expands to 8px and glows teal. On hover, a section name label appears to the left of the dot in IBM Plex Mono 10px. This is the only persistent navigation element.

**Wordmark + Reserve (Top):** "OASIS" in Label Micro top-left, fixed. "RESERVE →" in Label Micro top-right, fixed. Both appear after the hero section scrolls past, using a subtle opacity transition.

**Vertical Rhythm:** Sections are separated by `massive` spacing (18vw) to allow each to enter and exit the viewport independently. The user encounters each section as a separate event in a continuous experience, not as a document with chapters.

**Two-Column Philosophy:** The Depth section breaks into asymmetric columns — 55% left for a CSS wave form / ASCII wave text art, 45% right for prose. This is the only two-column layout in the site; its singularity makes it feel intentional.

## Elevation & Depth

Depth is the site's defining spatial strategy. Three distinct Z-axis layers create the ocean metaphor architecturally.

**Z-Index Layers:**
- `canvas-3d (z-index: 0)` — The water simulation canvas; the deepest layer. Everything else floats above it.
- `content (z-index: 10)` — All section text, images, and interactive content.
- `ui-overlay (z-index: 20)` — Fixed navigation elements (dot nav, wordmark, reserve link).
- `cursor (z-index: 100)` — The custom cursor ring; always on top.

**Parallax:**
- Hero canvas layer: `1.0x` scroll speed (pinned / full-screen)
- Hero text: `0.85x` scroll speed (subtle float-up effect as hero exits)
- Section content: enters from `y: 80px` via ScrollTrigger reveals

**Glassmorphism (Restrained):** The dot navigation uses a subtle `backdrop-filter: blur(8px)` on its container. No other element uses glassmorphism. Its rarity makes it feel considered rather than trendy.

## Shapes

The shape language mirrors the site's conceptual binary: the ocean's fluid, borderless nature versus the precision of navigation instruments.

**UI Elements:** Exclusively sharp (`0px`) or pill (`9999px`). The primary CTA button and ghost button are fully pill-shaped. Navigation dots are perfect circles. All cards (testimonials) have zero border radius — sharp-cornered, like the edge of a tide pool.

**The Wave Form:** The CSS wave in the Depth section is the exception — a pure organic curve, rendered via `border-radius` manipulation or SVG, that sits in deliberate contrast to the rectilinear UI. It is the only curve in the design that is not a pill or circle.

**Spacing Asymmetry:** Internal padding within sections is deliberately asymmetric. Text blocks do not center — they favor left alignment at roughly 8vw from the left edge, allowing the right side to breathe into the void.

## Components

**Primary Button:** Pill-shaped. Bioluminescent Teal background (`#41BFBF`), deep ocean text (`#040914`). Label Micro uppercase. Magnetic hover effect: the element moves 4px toward the cursor. Used only once on the page — the Reserve CTA.

**Ghost Button:** Pill-shaped. Transparent background. 1px `#D4E4F2` border. Primary text. Used for secondary actions.

**Navigation Dots:** 6px circles in secondary blue-grey. Active state: 8px, teal glow (`box-shadow: 0 0 8px #41BFBF`). Hover state: section name label appears with a 0.3s fade. Container: fixed right edge, vertically centered.

**Experience List Items:** Full-width horizontal rules. Each item: left-aligned name in Libre Baskerville 400 24px, right-aligned price/duration in IBM Plex Mono. On hover: a 2px teal left border appears (`border-left: 2px solid #41BFBF`) with a `translateX(8px)` shift. 

**Testimonial Cards:** Sharp corners. Dark background (`#080F1E`). 2px teal top border. Guest quote in Body MD italic. Guest name in Label Micro. No drop shadows — depth comes from background contrast.

**Custom Cursor (Default):** A 16px circle, transparent fill, 1px `#D4E4F2` border. Follows the mouse with a 0.5s `power3.out` lag, creating a physical trailing sensation.

**Custom Cursor (Hover State):** Expands to 52px on hover over interactive elements. Border shifts to teal (`#41BFBF`). On text hover, switches to `mix-blend-mode: difference`.

## Do's and Don'ts

**Do** let the water simulation breathe. The canvas does not need to scream for attention — ambient ripples are subtle. Only the user's movement creates dramatic waves.

**Do** maintain the cold, clinical register in all copy. The retreat offers depth, not warmth. Avoid words like "cozy," "warm," or "vibrant." Prefer: "still," "deep," "clear," "still," "precise," "cool."

**Do** use WCAG AA compliant contrast for all readable text. `#D4E4F2` on `#040914` achieves approximately 13.5:1. `#040914` on `#41BFBF` achieves approximately 7.2:1. Both pass AAA.

**Do** trigger every ScrollTrigger animation from `top 75%` to allow generous spatial separation between trigger and animation.

**Do** disable the canvas water simulation on mobile (viewport < 768px) and on devices where `prefersReducedMotion` is true. Show a static radial gradient from the neutral to a dark teal as the fallback.

**Don't** add warmth. No amber, gold, or orange tones anywhere. The retreat is an ocean at midnight, not a spa at sunset.

**Don't** use a standard horizontal navigation bar. The only navigation is the dot column on the right edge.

**Don't** use `transition: all 0.3s ease`. Every animated property uses GSAP with a named easing from the motion tokens above.

**Don't** add medium-sized text (20px–48px). The gap between H1 (3.5vw) and Body MD (15px) is load-bearing silence.

**Don't** center the dot navigation at the right edge using margin. Use `position: fixed; right: 32px; top: 50%; transform: translateY(-50%)` so it always tracks the true vertical midpoint of the viewport, regardless of content height.
