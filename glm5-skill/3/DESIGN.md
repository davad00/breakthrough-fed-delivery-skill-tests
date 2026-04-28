---
version: alpha
name: Oasis Ethereal
description: Dreamlike, transcendent luxury. Soft gradients with ethereal blue-violet accent. Floating, weightless animations.
colors:
  primary: "#F8F8FF"
  secondary: "#9BA4B4"
  tertiary: "#7B68EE"
  neutral: "#0B0B14"
  on-tertiary: "#FFFFFF"
  on-neutral: "#F8F8FF"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 14vw
    fontWeight: 300
    lineHeight: 0.88
    letterSpacing: -0.01em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 7vw
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: 0em
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 3.8vw
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.01em
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Outfit
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.18em
rounded:
  none: 0px
  sm: 8px
  md: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 18px
  lg: 36px
  xl: 72px
  xxl: 144px
  massive: 28vw
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
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 16px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 52px
    rounded: "{rounded.full}"
---

## Overview

Oasis Ethereal exists in the space between sleep and waking — a digital dream state where content floats and drifts like clouds at twilight. The aesthetic is romantic, otherworldly, and deeply calming, drawing from the visual language of fine art photography and ambient music.

The palette is a deep cosmic void (`#0B0B14`) with soft blue-violet gradients, punctuated by an ethereal accent (`#7B68EE`) that glows like distant starlight.

**Motion Tokens:**
- `ease-float: cubic-bezier(0.25, 0.1, 0.25, 1)` — weightless, drifting movement
- `ease-dream: cubic-bezier(0.4, 0, 0.6, 1)` — slow, hypnotic transitions
- `ease-glow: gsap power2.out` — soft emergence
- Duration scale: micro (0.4s), drift (1.5s), transcend (3s+)

## Colors

**Neutral (`#0B0B14`)** is the cosmic void — a deep blue-black that suggests infinite space and possibility. It holds content like night holds stars.

**Primary (`#F8F8FF`)** is ghost white — soft, not stark. It represents the light of dreams.

**Secondary (`#9BA4B4`)** is a soft blue-grey for supporting text, creating subtle hierarchy without harshness.

**Tertiary (`#7B68EE`, "Ethereal Violet")** is the accent of transcendence. Used for: the custom cursor, primary CTAs, and glowing highlights. It should feel like it's emitting light.

## Typography

Typography floats and breathes, with generous spacing and light weights.

**Display Huge (14vw, Cormorant Garamond Light)** creates ethereal statements. The light weight makes letters feel like they might drift away.

**Display Large (7vw, Cormorant Garamond Light)** bridges scale and readability with elegance.

**H1 (3.8vw, Cormorant Garamond)** provides readable elegance with maintained lightness.

**Body MD (16px, Nunito Sans Light)** offers soft, rounded body text. Nunito Sans's warmth complements the dreamlike aesthetic.

**Label Micro (10px, Outfit)** provides modern precision for UI elements. Always uppercase with generous spacing.

## Layout

The layout defies gravity — elements float without apparent anchoring.

**Floating Canvas:** Content is centered and suspended, with generous negative space creating a sense of weightlessness.

**Scroll as Drift:** The user floats through content. Each section is a cloud to pass through.

**Centered Symmetry:** Unlike other versions, this design often centers content, creating a meditative, balanced feeling.

## Elevation & Depth

Depth is achieved through layered blur, opacity, and soft gradients.

**Z-Axis Layers:** `canvas-glow (z-index: 0)` for ambient gradients, `content (z-index: 10)`, `ui-overlay (z-index: 20)`, `cursor (z-index: 100)`.

**Blur Depth:** Background elements use `filter: blur()` to create depth through softness rather than shadow.

**Glow Effects:** The accent color uses `box-shadow` and `text-shadow` to create a subtle glow effect.

## Shapes

The shape language is soft and rounded — nothing sharp, nothing angular.

**Pill Shapes:** All buttons and interactive elements use full border radius (`9999px`).

**Soft Containers:** Content containers use generous border radius (`20px`) with subtle borders.

**Organic Blobs:** Background elements use SVG blob shapes with animated morphing.

## Components

**Primary Button:** Pill-shaped, Ethereal Violet background, white text, Label Micro uppercase. May include a subtle glow effect.

**Ghost Button:** Pill-shaped, transparent, ghost white text with 1px soft border.

**Navigation Labels:** Transparent, soft blue-grey, Label Micro typography. Should feel like whispered guidance.

**Custom Cursor (Default):** A 16px violet circle with a subtle glow, following with a 1s dreamy lag.

**Custom Cursor (Hover):** Expands to 52px on interactive elements, becoming more transparent. Uses `mix-blend-mode: screen` for a glowing effect.

## Signature Move

**The Dream Fade:** Content doesn't just appear — it fades in from a blur, as if coming into focus from a dream. The hero text "OASIS" emerges from complete blur and opacity 0, with a slow, hypnotic timing that matches a deep breath.

## Do's and Don'ts

**Do** use blur and glow effects to create depth and ethereality.

**Do** center content when it serves the meditative feeling.

**Do** let animations be slow and dreamy.

**Don't** use sharp corners or harsh edges.

**Don't** rush transitions. The aesthetic is about slowing time.

**Don't** use pure white or pure black — soften everything slightly.
