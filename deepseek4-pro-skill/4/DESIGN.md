---
version: alpha
name: Oasis — Desert Warmth
description: Warm, minimal, earth-bound. Terracotta accent against sun-baked sand tones. Cinematic golden-hour lighting with 3D dune landscapes.
colors:
  primary: "#2C1F14"
  secondary: "#A08974"
  tertiary: "#E8734A"
  neutral: "#F5EDE0"
  on-tertiary: "#2C1F14"
  on-neutral: "#2C1F14"
typography:
  display-huge:
    fontFamily: DM Serif Display
    fontSize: 12vw
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.02em
  display-large:
    fontFamily: DM Serif Display
    fontSize: 7vw
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.01em
  h1:
    fontFamily: DM Serif Display
    fontSize: 4vw
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 380
    lineHeight: 1.75
    letterSpacing: 0.01em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.13em
rounded:
  none: 0px
  sm: 12px
  md: 20px
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
    rounded: "{rounded.md}"
    padding: 16px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
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

Desert Warmth channels the aesthetic of minimalist desert architecture — the works of Rick Joy, Alberto Kalach, and the Amangiri resort. The palette is15 warm, mineral, and sun-baked: sand tones with a single terracotta accent that evokes the moment the desert catches fire at sunset.

The hero features a 3D dune landscape rendered in WebGL — smooth, undulating forms that shift under golden-hour directional lighting. As the user scrolls, the sun angle changes, casting longer and longer shadows. The emotional register is **warm, grounded, and profoundly peaceful**.

**Motion Tokens:**
- `ease-desert: cubic-bezier(0.33, 1, 0.68, 1)` — slow, smooth, like sand shifting.
- `ease-reveal: power3.out` — gentle, warm reveals.
- Duration scale: micro (0.3s), standard (0.7s), cinematic (2.2s+).

**Signature Move:** A 3D dune landscape where the lighting changes as the user scrolls — scrolling down shifts the light from golden-hour to deep twilight, and the content sections emerge from the dune shadows.

## Colors

**Neutral (`#F5EDE0`)** — Warm sand-cream. Like unbleached linen or desert sand at noon. The default page background.51

**Primary (`#2C1F14`)** — Dark espresso-brown. Rich and warm, used for all body text. Never feels harsh.

**Secondary (`#A08974`)** — Warm greige, like weathered adobe. For metadata and supporting labels.

**Tertiary (`#E8734A`, "Terracotta")** — A vivid, warm burnt orange. Evokes desert sunset, fired clay, and cinnamon. Used exclusively for interaction.

## Typography

DM Serif Display anchors the warm, editorial feel. Paired with Inter and monospace.

**Display Huge (12vw, weight 400)** — Warm and open. "Oasis" feels like05 carved sandstone.

**Display Large (7vw)** — "Return to yourself."

**Body MD (16px, weight 380)** — Slightly lighter, with warm 1.75 line height.

**Label Micro (10px, JetBrains Mono)** — Technical contrast.

## Layout

Asymmetrical with a warm, organic feel. Sections alternate between left-anchored above the fold and right-anchored below, creating a gentle sway rather than the harsh grid-jump of the mineral version. Spacing is generous but not as extreme as the water version — `massive: 16vw` rather than `20vw`.

## Elevation & Depth

**Z-Axis Layers:** `dune-canvas (0)`, `content (10)`, `ui-overlay (20)`, `cursor (100)`.

The 3D dunes create natural depth. As the lighting shifts during54 scroll, the depth2 perception changes — what was16 in shadow emerges into light, and vice versa.

**Parallax Factors:** Far dunes (0.1), mid dunes (0.35), near content (0.65).

## Shapes

Warm, generous curves. UI elements use 12px or 20px corner radii — soft but not fully pill-shaped. The cursor is a 12px circle. Buttons are rounded-rectangles.

## Components

**Primary Button:** 20px radius, Terracotta fill, dark espresso text. Uppercase monospace.

**Ghost Button:** 20px radius, transparency with 1px terracotta border.

**Custom Cursor:** 12px Terracotta circle. Expands to 48px on hover.

## Do's and Don'ts

**Do** use the warm sand tones as the defining color signature.
**Do** keep motion slow, smooth, and organic.
**Do** maintain a sense of heat and light in every visual decision.

**Don't** use cool colors — no blues, no greens, no violets.
**Don't** use sharp2 angles or cold typography.
**Don't** use Tailwind or utility frameworks.