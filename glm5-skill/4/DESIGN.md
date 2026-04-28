---
version: alpha
name: Oasis Elemental
description: Raw, natural luxury. Earth tones with terracotta accent. Organic textures and grounded animations.
colors:
  primary: "#FAF8F5"
  secondary: "#8B8578"
  tertiary: "#C45C26"
  neutral: "#1A1612"
  on-tertiary: "#FAF8F5"
  on-neutral: "#FAF8F5"
typography:
  display-huge:
    fontFamily: Fraunces
    fontSize: 13vw
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: -0.02em
  display-large:
    fontFamily: Fraunces
    fontSize: 6.5vw
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.01em
  h1:
    fontFamily: Fraunces
    fontSize: 3.2vw
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0em
  body-md:
    fontFamily: Source Sans 3
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.01em
  label-micro:
    fontFamily: DM Mono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.16em
rounded:
  none: 0px
  sm: 2px
  md: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 18px
  lg: 36px
  xl: 72px
  xxl: 140px
  massive: 22vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 18px 38px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 18px 38px
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

Oasis Elemental grounds luxury in the natural world — stone, earth, fire, and air. The aesthetic is raw yet refined, drawing from Japanese wabi-sabi and Scandinavian minimalism to create a digital space that feels handcrafted and permanent.

The palette is built on a deep earth black (`#1A1612`) with warm undertones, punctuated by a terracotta accent (`#C45C26`) that evokes sun-baked clay and the warmth of a fire.

**Motion Tokens:**
- `ease-ground: cubic-bezier(0.22, 1, 0.36, 1)` — solid, grounded movement
- `ease-emerge: cubic-bezier(0.33, 1, 0.68, 1)` — rising from earth
- `ease-settle: gsap power3.out` — finding rest
- Duration scale: micro (0.25s), natural (0.8s), ancient (2s+)

## Colors

**Neutral (`#1A1612`)** is rich earth — a warm black with brown undertones. It creates a foundation that feels ancient and permanent.

**Primary (`#FAF8F5`)** is unbleached linen — warm white that feels natural, not clinical.

**Secondary (`#8B8578`)** is weathered stone — a warm grey for supporting text.

**Tertiary (`#C45C26`, "Terracotta")** is the accent of warmth. Used for: the custom cursor, primary CTAs, and highlights. It should feel like embers or clay.

## Typography

Typography has character and weight — not delicate, but purposeful.

**Display Huge (13vw, Fraunces)** creates monumental statements. The serif has personality without being ornate.

**Display Large (6.5vw, Fraunces)** bridges scale and readability with grounded elegance.

**H1 (3.2vw, Fraunces Medium)** provides readable headings with maintained character.

**Body MD (17px, Source Sans 3)** offers warm, highly legible body text. The slight size increase aids readability.

**Label Micro (10px, DM Mono)** provides technical precision with warmth. Always uppercase with generous spacing.

## Layout

The layout is grounded and intentional — elements feel placed, not floated.

**Anchored Canvas:** Content is positioned with clear relationships to the viewport edges. Nothing drifts aimlessly.

**Scroll as Journey:** The user moves through a landscape. Each section is a destination.

**Asymmetrical Balance:** Elements are off-center but balanced, like stones in a Japanese garden.

## Elevation & Depth

Depth is achieved through texture and subtle shadows, not blur or glow.

**Z-Axis Layers:** `canvas-texture (z-index: 0)` for subtle grain, `content (z-index: 10)`, `ui-overlay (z-index: 20)`, `cursor (z-index: 100)`.

**Texture Over Shadow:** Subtle noise textures create depth without artificial shadows.

**Warm Shadows:** When shadows are used, they have warm undertones (not pure black).

## Shapes

The shape language is natural and slightly imperfect — nothing too precise.

**Soft Rectangles:** Buttons and containers use small border radius (`2px` to `8px`), suggesting handcrafted edges.

**Organic Lines:** Decorative elements use slightly irregular paths, not mathematically perfect curves.

**Natural Proportions:** Spacing and sizing follow organic ratios rather than strict mathematical progressions.

## Components

**Primary Button:** Slightly rounded, Terracotta background, warm white text, Label Micro uppercase. Grounded and solid.

**Ghost Button:** Slightly rounded, transparent, warm white text with 1px warm border.

**Navigation Labels:** Transparent, weathered stone grey, Label Micro typography. Should feel like carved labels.

**Custom Cursor (Default):** A 12px terracotta circle that follows with a 0.5s grounded ease.

**Custom Cursor (Hover):** Expands to 48px on interactive elements. Uses `mix-blend-mode: difference`.

## Signature Move

**The Earth Rise:** Content rises from below as if emerging from the ground. The hero text "OASIS" slides up with a slight parallax effect, the letters appearing to grow from the earth. A subtle dust particle effect accompanies the motion.

## Do's and Don'ts

**Do** use warm tones throughout — even whites and blacks should have warmth.

**Do** let texture create depth instead of heavy shadows.

**Do** create a sense of permanence and grounding.

**Don't** use cool blues or purples — the palette is warm.

**Don't** make animations too fast or floaty.

**Don't** use perfectly sharp corners — soften them slightly.
