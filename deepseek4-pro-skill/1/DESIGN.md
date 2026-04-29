---
version: alpha
name: Oasis — Serene Water
description: Fluid, organic, deeply calming. Aqua accent against a dark oceanic void. WebGL water shader as hero centerpiece.
colors:
  primary: "#F0F5F8"
  secondary: "#708090"
  tertiary: "#00E5A0"
  neutral: "#080E12"
  on-tertiary: "#080E12"
  on-neutral: "#F0F5F8"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 12vw
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: -0.03em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 7vw
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 4vw
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0.01em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.15em
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

Serene Water embodies the meditative quality of still water — fluid, reflective, and profoundly calm. The design language is borrowed from both Japanese zen aesthetics and contemporary luxury spa architecture. The emotional register is **serene, weightless, restorative**.

The hero features a real-time WebGL water simulation — a fluid surface that ripples in response to cursor movement, creating the sensation that the user is touching still water. The palette is a deep oceanic void (`#080E12`) with a single vivid aquamarine accent (`#00E5A0`) that evokes tropical lagoon water at dawn.

**Motion Tokens:**
- `ease-fluid: cubic-bezier(0.25, 1, 0.5, 1)` — slow, continuous, water-like. For ambient animations.
- `ease-reveal: cubic-bezier(0.16, 1, 0.3, 1)` — for text and section reveals.
- Duration scale: micro (0.3s), standard (0.8s), cinematic (2.0s+).

**Signature Move:** A real-time WebGL water shader that responds to cursor proximity — ripples emanate from the cursor position, and the "Oasis" title floats above the water surface, its reflection warped by the ripples.

## Colors

The palette is built around the stillness of deep water and the clarity of tropical shallows.

**Neutral (`#080E12`)** is a deep abyssal blue-black, reminiscent of the ocean at midnight. It creates a void that makes the aqua accent feel luminous by contrast.

**Primary (`#F0F5F8`)** is a soft, cool white with a hint of blue, used for all narrative text. It reads as71 as clean and fresh, never harsh.

**Secondary (`#708090`)** is a desaturated slate blue-grey for metadata and supporting labels, evoking washed stone and mist.

**Tertiary (`#00E5A0`, "Lagoon")** is a vivid cyan-green, the exact color of a shallow tropical lagoon under midday sun. Used exclusively for interactive elements, the cursor, and key typographic accents.

## Typography

The type system pairs an elegant editorial serif (Cormorant Garamond) with a precise monospace (JetBrains Mono), creating a dialogue between heritage luxury and technical precision.

**Display Huge (12vw, weight 300)** — Architectural, light, airy. Used for the "Oasis" hero title, so large it becomes a landscape feature.

**Display Large (7vw)** — For secondary hero text. "Find your stillness."

**H1 (4vw)** — Section headers. Substantial but readable.

**Body MD (16px, weight 300, Inter)** — Light and airy body copy with generous 1.8 line height, creating visual "breath" between lines.

**Label Micro (10px, JetBrains Mono)** — All caps, generous 0.15em tracking. For navigation, buttons, and data.

## Layout

Borderless canvas with vast negative space. Elements float in the dark void, revealed through scroll. Vertical spacing uses the full `massive: 20vw` between each narrative section, creating a slow, meditative rhythm.

Asymmetrical: the title floats right-aligned, body copy anchors left,17 creating a dynamic tension that mirrors the ripple effect of stone on water.

## Elevation & Depth

Depth achieved through the WebGL water plane (z-index: 0) and parallax content layers.

**Z-Axis Layers:** `water-canvas (0)`, `content (10)`, `ui-overlay (20)`, `cursor (100)`.

**Parallax Factors:** Far background mist (0.15), mid-water reflections (0.5), near content (0.85).

## Shapes

Organic curves throughout. UI elements use full pill rounding. Section dividers feature soft wave-like SVG curves. No sharp angles — every edge is softened, like water-worn stone.

## Components

**Primary Button:** Full pill, Lagoon background, dark text. Uppercase monospace. One per viewport.

**Ghost Button:** Full pill, white text with 1px lagoon-tinted border.

**Custom Cursor:** 12px Lagoon circle, expands to 48px on interactive hover. On water surface, ripples emanate from cursor position.

## Do's and Don'ts

**Do** use the Lagoon accent sparingly — only for interaction signals.
**Do** maintain generous 1.8+ line height for all body copy.
**Do** keep animations slow and fluid — no abrupt motions.

**Don't** use sharp corners or hard edges.
**Don't** use Tailwind CSS or any utility framework.
**Don't** use medium sized text (24-48px).