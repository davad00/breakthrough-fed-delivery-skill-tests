---
version: alpha
name: Oasis Minimal
description: Stark, architectural luxury. Pure monochrome with a single crimson accent. Extreme typographic brutalism.
colors:
  primary: "#FFFFFF"
  secondary: "#5A5A5A"
  tertiary: "#8B0000"
  neutral: "#050505"
  on-tertiary: "#FFFFFF"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Bebas Neue
    fontSize: 15vw
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: 0.05em
  display-large:
    fontFamily: Bebas Neue
    fontSize: 8vw
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: 0.04em
  h1:
    fontFamily: Bebas Neue
    fontSize: 4vw
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: 0.03em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  label-micro:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.15em
rounded:
  none: 0px
  sm: 0px
  md: 0px
  full: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 20px
  lg: 40px
  xl: 80px
  xxl: 160px
  massive: 30vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.none}"
    padding: 20px 48px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 20px 48px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 8px
    rounded: "{rounded.none}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 64px
    rounded: "{rounded.none}"
---

## Overview

Oasis Minimal strips away all ornament to reveal the essential. This is luxury in its purest form — architectural, confident, uncompromising. The aesthetic draws from brutalist architecture and high-fashion minimalism, creating a digital space that feels like a private gallery.

The palette is absolute: a void black (`#050505`) and pure white (`#FFFFFF`), interrupted only by a single deep crimson accent (`#8B0000`) that marks moments of decision and action.

**Motion Tokens:**
- `ease-sharp: cubic-bezier(0.19, 1, 0.22, 1)` — precise, decisive movement
- `ease-reveal: cubic-bezier(0.77, 0, 0.175, 1)` — clean emergence
- `ease-snap: gsap power4.out` — instant authority
- Duration scale: micro (0.15s), standard (0.5s), monumental (2s+)

## Colors

**Neutral (`#050505`)** is the absolute void — not dark, but absent. It creates the negative space that gives the design its power.

**Primary (`#FFFFFF`)** is pure presence. Every white pixel is intentional, creating maximum contrast and clarity.

**Secondary (`#5A5A5A`)** is a mid-grey for secondary information, creating subtle hierarchy without introducing warmth.

**Tertiary (`#8B0000`, "Deep Crimson")** is the accent of decision. Used exclusively for: the custom cursor, primary CTAs, and critical highlights. It appears rarely and with purpose.

## Typography

Typography is the architecture of this design. Scale creates hierarchy; weight is constant.

**Display Huge (15vw, Bebas Neue)** dominates the viewport. Letters become walls, creating space through their presence. Used for the hero and section anchors.

**Display Large (8vw, Bebas Neue)** creates secondary architectural statements.

**H1 (4vw, Bebas Neue)** provides readable headings with maintained authority.

**Body MD (15px, Inter)** offers neutral, highly legible body text. Inter's clarity serves the minimalist ethos.

**Label Micro (11px, IBM Plex Mono)** provides technical precision. Always uppercase, always spaced.

## Layout

The layout is architectural — structured, intentional, unforgiving.

**Grid of Intention:** A strict underlying grid exists, but elements break it deliberately. Every misalignment is a statement.

**Scroll as Progression:** The user moves through distinct architectural spaces. Each section is a room with its own proportions.

**Edge Alignment:** Elements touch the viewport edges. Content bleeds. The canvas has no safe margins.

## Elevation & Depth

Depth is achieved through scale and overlap, not shadows or gradients.

**Z-Axis Layers:** `canvas-base (z-index: 0)`, `content (z-index: 10)`, `ui-overlay (z-index: 20)`, `cursor (z-index: 100)`.

**Flatness as Power:** No shadows, no gradients, no depth effects. Flatness is the aesthetic.

## Shapes

All shapes are rectangles. No curves. No exceptions.

**Sharp Corners:** Every element uses `0px` border radius. The aesthetic is architectural and severe.

**Rectangular Everything:** Buttons, images, containers — all rectangles. The consistency creates visual power.

## Components

**Primary Button:** Rectangular, Deep Crimson background, white text, Label Micro uppercase. Sharp corners. Used for the single decisive action.

**Ghost Button:** Rectangular, transparent, white text with 1px white border. Sharp corners. Used for secondary actions.

**Navigation Labels:** Transparent, mid-grey, Label Micro typography. Navigation should feel like architectural labels.

**Custom Cursor (Default):** An 8px crimson square that follows with a 0.4s sharp ease.

**Custom Cursor (Hover):** Expands to a 64px white square on interactive elements. Uses `mix-blend-mode: difference`.

## Signature Move

**The Split Reveal:** The hero text "OASIS" is split horizontally. On scroll, the top half slides up while the bottom half slides down, revealing content beneath. The split is clean, surgical, unforgettable.

## Do's and Don'ts

**Do** use the crimson accent only for action. Its rarity creates urgency.

**Do** maintain absolute consistency in rectangular shapes.

**Do** let whitespace breathe. Emptiness is content.

**Don't** use any border radius. The aesthetic is sharp.

**Don't** use gradients or shadows. Flatness is power.

**Don't** add decorative elements. Every pixel must earn its place.
