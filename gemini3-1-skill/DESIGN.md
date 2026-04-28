---
version: alpha
name: Oasis Retreat Design System
description: Cinematic, experiential web design for Oasis, a high-end luxury meditation retreat. Near-black base, single serene accent, extreme typographic scale contrast.
colors:
  primary: "#FFFFFF"
  secondary: "#6B6B6B"
  tertiary: "#A3B18A"
  neutral: "#050505"
  on-tertiary: "#000000"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Space Grotesk
    fontSize: 12vw
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.04em
  display-large:
    fontFamily: Space Grotesk
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.03em
  h1:
    fontFamily: Space Grotesk
    fontSize: 4vw
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.12em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 20vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 16px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 16px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 12px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 48px
    rounded: "{rounded.full}"
---

## Overview

Cinematic, immersive, and deeply kinetic. This design system abandons the standard 12-column grid in favor of a fluid, borderless canvas. The aesthetic philosophy is borrowed from cinema and spatial computing: a deep, atmospheric void from which content emerges, driven by the user's scroll. The emotional register is **calm, vast, and grounded** — evoking the tranquility and luxury of the Oasis meditation retreat.

The palette is a binary of near-black and high-contrast white, punctuated by a single serene accent color (Sage Green, `#A3B18A`) used exclusively for interaction. The typographic system relies on extreme scale contrast — letterforms so large they function as architecture — paired with technical micro-copy that evokes precise guidance.

**Motion Tokens:**
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle. Use for all element reveals.
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy. Use for background and color transitions.
- `ease-spring: gsap power4.out with slight overshoot` — for hover micro-interactions.
- Duration scale: micro (0.2s), standard (0.6s), cinematic (1.5s+).

## Colors

The palette is rooted in cinematic lighting and high-contrast photography.

**Neutral (`#050505`)** is the foundation — a near-black void. It creates the depth that makes 3D elements and motion feel like they exist in real space.

**Primary (`#FFFFFF`)** is high-contrast white for all core narrative text.

**Secondary (`#6B6B6B`)** is a muted mid-grey for secondary information.

**Tertiary (`#A3B18A`, "Sage Green")** is the sole driver of interaction. It is used exclusively for: the custom cursor, primary call-to-action buttons, active navigation states, and critical typographic highlights. It must never appear as a background for large areas.

## Typography

The typography strategy is built on a single principle: **extreme scale contrast creates visual tension that draws the eye and communicates energy**.

**Display Huge (12vw)** is used as a structural, architectural element. 
**Display Large (7vw)** bridges the gap between architectural display type and readable headlines.
**H1 (4vw)** is the smallest "large" text.
**Body MD (16px, Inter)** is used for all narrative paragraphs.
**Label Micro (10px, JetBrains Mono)** is used for all technical data, coordinates, UI labels, button text, and metadata.

## Layout

The layout abandons standard grids entirely. Elements are positioned using a combination of absolute positioning, CSS Grid with custom track definitions, and viewport-relative units.

**Borderless Canvas:** Content bleeds to the edges of the viewport.
**Scroll as Narrative:** Vertical spacing is vast (`massive: 20vw`) to allow elements to enter and exit the viewport independently, each driven by its own GSAP ScrollTrigger animation.
**Asymmetrical Composition:** Elements are intentionally offset.

## Elevation & Depth

Depth is achieved through WebGL and motion, not drop shadows or borders.

**Z-Axis Layers:** `canvas-3d (z-index: 0)`, `content (z-index: 10)`, `ui-overlay (z-index: 20)`, `cursor (z-index: 100)`.
**Parallax Factors:** Background elements move at `0.1x` scroll speed (far), mid-ground at `0.4x` (mid), and foreground content at `0.8x` (near).
**Flat UI on 3D Stage:** All UI elements are perfectly flat.

## Shapes

UI elements use either perfectly sharp corners (`0px`) or fully pill-shaped curves (`9999px`). 

## Components

**Primary Button:** Pill-shaped, Sage Green background, black text, Label Micro typography in uppercase.
**Ghost Button:** Pill-shaped, transparent background, white text with a 1px white border.
**Navigation Labels:** Transparent background, secondary grey text, Label Micro typography.
**Custom Cursor:** A 12px Sage Green circle that follows the mouse. Expands to 48px on hover and switches to `mix-blend-mode: difference`.

## Do's and Don'ts

**Do** use the tertiary color exclusively for interactive elements.
**Do** maintain WCAG AA contrast ratios (4.5:1).
**Do** define the site's "Signature Move" before writing any code.
**Don't** use Tailwind CSS.
**Don't** use medium-sized text (24px–48px).
**Don't** use standard CSS `transition: all 0.3s ease`.
**Don't** use a standard horizontal navigation bar.
