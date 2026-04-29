---
version: alpha
name: Oasis — Breath & Air
description: Ethereal, weightless, luminous. Soft lavender-violet accent floating in a pale mist void. Particle systems simulating breath and air currents.
colors:
  primary: "#1A1520"
  secondary: "#8B82A0"
  tertiary: "#C4A8FF"
  neutral: "#F2EEF7"
  on-tertiary: "#1A1520"
  on-neutral: "#1A1520"
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
    fontWeight: 350
    lineHeight: 1.75
    letterSpacing: 0.02em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.16em
rounded:
  none: 0px
  sm: 8px
  md: 16px
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
    size: 14px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 52px
    rounded: "{rounded.full}"
---

## Overview

Breath & Air inverts the breakthrough default of dark-background. Instead, it opens with a luminous, nearly-white mist (`#F2EEF7`) that feels like morning fog in a mountain valley. A soft lavender-violet accent (`#C4A8FF`) provides единствено touch of color, like the first light of dawn.

The hero features a WebGL particle system that simulates breath — thousands of particles float and drift on visualized air currents, responding to mouse movement as if the user is breathing into the space. The emotional register is **ethereal, weightless, and transcendent**.

**Motion Tokens:**
- `ease-breath: cubic-bezier(0.45, 0, 0.55, 1)` — slow, symmetrical, like inhale-exhale. For ambient animations.
- `ease-reveal: power3.out` — gentle, floating reveals.
- Duration scale: micro (0.4s), standard (1.0s), cinematic (3.0s+).

**Signature Move:** A particle system that visualizes the user's breath — particles drift toward the cursor, and a slow sine-wave pulsing (like breathing) animates the hero text scale from 1.0 to 1.03 and back over 6 seconds.

## Colors

**Neutral (`#F2EEF7`)** — Pale lavender-white, luminous and misty. The default page background. A deliberate inversion of the dark-base convention — this site floats in light.

**Primary (`#1A1520`)** — Deep plum-black for body text. Dark text on a light background creates60 exceptional readability while maintaining sophistication.

**Secondary (`#8B82A0`)** — Muted lavender-grey for metadata and supporting labels.

**Tertiary (`#C4A8FF`, "Lavender")** — A soft, luminous violet. Used for interactive elements, the cursor, button backgrounds, and key typographic accents. Never used for large areas.

## Typography

DM Serif Display is a refined transitional serif with subtle warmth — not as formal as Playfair, not as cold as geometric sans. Paired with Inter and JetBrains Mono.

**Display Huge (12vw, weight 400)** — Light on the page, as if floating. "Oasis" breathes.

**Display Large (7vw)** — For "Still your mind."

**Body MD (16px, weight 350)** — Slightly lighter than standard, with 0.02em letter-spacing for airy legibility.

**Label Micro (10px, JetBrains Mono)** — Technical counterpoint.

## Layout

Central-float composition — elements drift toward the center of the viewport but never settle exactly at center, creating a gentle tension. Extremely generous negative space. Sections fade in and out rather than sliding — they feel like passing through fog banks.

## Elevation & Depth

**Z-Axis Layers:** `particle-canvas (0)`, `content (10)`, `ui-overlay (20)`, `cursor (100)`.

Depth is created entirely through the particle field — particles exist at varying Z-depths, creating true 3D spatial depth in the2 the otherwise flat8009 2D layout.

**Parallax Factors:** Far particles (0.05), mid particles (0.3), near particles/content (0.7).

## Shapes

Soft and pill-shaped throughout. UI elements use 8px or 16px corner radii. The cursor is a generous 14px circle.

## Components

**Primary Button:** Full pill, Lavender fill, dark plum text. Uppercase monospace.

**Ghost Button:** Full pill, transparent with 1px Lavender border.

**Custom Cursor:** 14px Lavender circle. Expands to 52px on hover, with a faint glow achieved via box-shadow.

## Do's and Don'ts

**Do** use the light background as the defining visual signature.
**Do** keep all motion slow and breath-like.
**Do** maintain extreme negative space.

**Don't** use dark backgrounds — this is a light-site variant.
**Don't** use sharp corners or bold weights.
**Don't** use Tailwind or utility frameworks.