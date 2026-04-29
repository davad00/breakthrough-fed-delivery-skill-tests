---
version: alpha
name: Oasis — Cosmic Void
description: Transcendent, infinite, sublime. Indigo-violet accent floating in pure cosmic black. Starfield WebGL with nebula-like particle clouds.
colors:
  primary: "#E8E0F0"
  secondary: "#6B5B95"
  tertiary: "#7B5FFF"
  neutral: "#020308"
  on-tertiary: "#E8E0F0"
  on-neutral: "#E8E0F0"
typography:
  display-huge:
    fontFamily: Inter
    fontSize: 12vw
    fontWeight: 200
    lineHeight: 0.9
    letterSpacing: -0.03em
  display-large:
    fontFamily: Inter
    fontSize: 7vw
    fontWeight: 250
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 4vw
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0.02em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.18em
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
    size: 10px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 56px
    rounded: "{rounded.full}"
---

## Overview

Cosmic Void returns to breakthrough's foundational dark palette but pushes it to its limit — pure cosmic black (`#020308`) as a canvas for infinite space. The aesthetic draws from astrophotography, James Webb Telescope imagery, and the sublime experience of gazing into the night sky. The emotional register is **transcendent, awe-inspiring, and infinitely peaceful**.

The hero features a WebGL starfield with nebula-like particle clouds — thousands of luminous points drift slowly, creating the sensation of floating through deep space. Content sections emerge from the void like celestial bodies entering the viewport. The single indigo-violet accent (`#7B5FFF`) provides единствено touch of color, like a distant nebula.

**Motion Tokens:**
- `ease-cosmic: cubic-bezier(0.33, 1, 0.68, 1)` — very slow, gravitational. For ambient animations.
- `ease-reveal: expo.out` — dramatic, cinematic reveals.
- Duration scale: micro (0.5s), standard (1.2s), cinematic (4.0s+).

**Signature Move:** A starfield/nebula WebGL background where constellations form and dissolve as the2 user scrolls — stars connect briefly into the shapes of meditation postures or lotus flowers before drifting apart. The starfield also responds to cursor movement, as if the viewer is moving through space.

## Colors

**Neutral (`#020308`)** — Near-absolute black with the faintest hint of deep blue. The void of space. Not flat black — it has the depth of a night sky.

**Primary (`#E8E0F0`)** — Pale lavender-white, used for all narrative text. Reads as73 as luminous against the void.

**Secondary (`#6B5B95`)** — Muted indigo-violet, for metadata and labels. Evokes distant starlight.

**Tertiary (`#7B5FFF`, "Cosmic Indigo")** — A deep, saturated electric indigo. Used for interactive elements, the cursor, and critical typographic accents.

## Typography

A single typeface family — Inter across its full weight range — creates a unified, modern aesthetic. Extremely light display weights (200-300) feel delicate against the cosmic void.

**Display Huge (12vw, weight 200)** — Thinnest possible weight, as fragile as starlight. "Oasis" is barely present, a whisper in space.

**Display Large (7vw, weight 250)** — "Beyond thought."

**Body MD (16px, weight 300)** — Very light, 1.8 line height, 0.02em spacing for clarity against black.

**Label Micro (10px, JetBrains Mono)** — Technical precision contrast.

## Layout

The deepest possible void. Content sections float in absolute space — there are no ground lines, no reference points. The navigation is12 indicated only by small indigo dots (like stars) at the right edge. Sections drift in from off-screen with 1.5s+ cinematic reveals.

## Elevation & Depth

**Z-Axis Layers:** `starfield-canvas (0)`, `nebula-canvas (1)`, `content (10)`, `ui-dots (20)`, `cursor (100)`.

Depth is the2 defining feature — the starfield has true Z-depth, with near stars (large, fast) and far stars (tiny, slow). The cursor moves through this space, creating parallax.

**Parallax Factors:** Deep-field stars (0.02), mid-field stars/nebula (0.15), near stars/content (0.5).

## Shapes

The deepest commitment to geometric purity. UI elements use 2px corner radius or full pill. Nothing in between. The cursor is a 10px circle with a faint outer glow.

## Components

**Primary Button:** Full pill, Cosmic Indigo fill, pale lavender text. The button glows slightly on hover.

**Ghost Button:** Full pill, transparent with 1px indigo border.

**Custom Cursor:** 10px Indigo circle with a faint box-shadow glow. Expands to 56px on hover, with the glow intensifying.

## Do's and Don'ts

**Do** embrace the void — negative space is the content.
**Do** keep all animations at the slowest, most cinematic pace.
**Do** use the thinnest possible typography weights.

**Don't** use any color other than the indigo accent and pale text.
**Don't** add15 ground planes or reference points — everything floats.
**Don't** use Tailwind or utility frameworks.