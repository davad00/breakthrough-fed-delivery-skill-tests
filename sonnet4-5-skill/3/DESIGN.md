---
version: alpha
name: Oasis Organic
description: Natural luxury meditation retreat. Forest black, sage green, flowing typography.
colors:
  primary: "#F5F5F0"
  secondary: "#9A9A8F"
  tertiary: "#8BA888"
  neutral: "#0F1410"
  on-tertiary: "#0F1410"
  on-neutral: "#F5F5F0"
typography:
  display-huge:
    fontFamily: Fraunces
    fontSize: 11vw
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: -0.03em
  display-large:
    fontFamily: Fraunces
    fontSize: 6.5vw
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1:
    fontFamily: Fraunces
    fontSize: 4vw
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: 0em
  label-micro:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  organic: 40% 60% 70% 30% / 40% 50% 60% 50%
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 22vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 20px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 20px
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
    backgroundColor: "{colors.tertiary}"
    size: 50px
    rounded: "{rounded.organic}"
---

## Overview

Oasis Organic roots the meditation experience in the natural world. The design language is inspired by forest bathing, biophilic design, and the organic forms found in nature. The emotional register is **grounded, nurturing, and alive** — the feeling of walking barefoot through moss, breathing forest air, and reconnecting with the earth.

The palette is anchored in a deep forest black (`#0F1410`) with sage green accents (`#8BA888`) that evoke new growth and healing. Typography is set in Fraunces, a variable serif with soft, organic curves that feel hand-crafted. The aesthetic celebrates imperfection, asymmetry, and the irregular beauty of natural forms.

**Motion Tokens:**
- `ease-grow: cubic-bezier(0.34, 1.56, 0.64, 1)` — organic expansion with overshoot. Mimics plant growth.
- `ease-sway: cubic-bezier(0.45, 0.05, 0.55, 0.95)` — gentle oscillation. Use for ambient motion like leaves in wind.
- Duration scale: sprout (0.8s), grow (2s), bloom (4s+).

**Signature Move:** Organic blob shapes created with CSS `clip-path` that morph and flow as the user scrolls, revealing content within their boundaries. The shapes are animated using GSAP MorphSVG to create fluid, living forms.

## Colors

**Neutral (`#0F1410`)** is a deep forest black with subtle green undertones, evoking the darkness beneath a canopy of trees.

**Primary (`#F5F5F0`)** is an off-white with warm undertones, like natural linen or handmade paper. Used for all primary text.

**Secondary (`#9A9A8F`)** is a warm grey-green for supporting information, maintaining the natural palette.

**Tertiary (`#8BA888`, "Sage")** is a muted, earthy green that feels grown rather than manufactured. Used for interactive elements and moments of emphasis.

## Typography

**Display Huge (11vw, Fraunces Light)** features soft, organic curves that feel hand-drawn. The variable font allows for subtle weight adjustments that create a living, breathing quality.

**Display Large (6.5vw)** maintains the organic character while becoming more readable. Used for section headings and key statements.

**Body MD (17px, Inter Light)** is slightly larger than standard to encourage slow, contemplative reading. The neutral character provides contrast with the expressive display type.

**Label Micro (11px, IBM Plex Mono)** provides technical precision while maintaining warmth through its humanist proportions.

## Layout

The layout embraces asymmetry and organic flow, rejecting rigid grids in favor of natural composition principles.

**Organic Spacing:** Sections are separated by `massive: 22vw`, with elements positioned using natural proportions rather than mathematical grids.

**Flowing Composition:** Content flows around organic blob shapes, creating irregular text wrapping and unexpected spatial relationships.

## Elevation & Depth

**Z-Axis Layers:** `organic-bg (0)` for morphing background shapes, `texture-layer (5)` for subtle grain and noise, `content (10)`, `ui (20)`, `cursor (100)`.

**Parallax Factors:** Background shapes at `0.1x`, mid-ground at `0.4x`, foreground at `0.75x`, creating gentle depth that feels natural rather than mechanical.

## Shapes

UI elements use organic blob shapes created with complex `border-radius` values (`40% 60% 70% 30% / 40% 50% 60% 50%`) that create irregular, natural forms. These shapes subtly animate and morph, never settling into perfect geometric forms.

## Components

**Primary Button:** Pill-shaped, Sage background, forest black text, uppercase Label Micro. Subtle hover animation that makes the button appear to "breathe."

**Ghost Button:** Pill-shaped, transparent with 1px off-white border, off-white text. Hover state adds subtle sage tint.

**Navigation:** Organic blob-shaped menu button that expands into a full-screen overlay with navigation items arranged in an asymmetrical, natural flow.

**Custom Cursor:** 14px sage circle that morphs into an organic blob shape (50px) on hover. The shape continuously animates with subtle variations, never repeating exactly.

## Do's and Don'ts

**Do** embrace asymmetry and organic irregularity. Perfect geometry feels unnatural.

**Do** use subtle texture and grain to add tactile quality.

**Do** create animations that feel alive and breathing, with slight variations and imperfections.

**Don't** use perfect geometric shapes. Everything should have organic character.

**Don't** create mechanical, linear animations. Motion should feel natural and slightly unpredictable.

**Don't** use pure colors. All colors should have subtle complexity and earthiness.
