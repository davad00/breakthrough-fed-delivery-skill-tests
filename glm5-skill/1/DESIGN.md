---
version: alpha
name: Oasis Serenity
description: A tranquil, immersive meditation retreat experience. Deep oceanic palette with golden accent, fluid organic animations.
colors:
  primary: "#FFFFFF"
  secondary: "#7A8B8B"
  tertiary: "#C9A962"
  neutral: "#0A0F14"
  on-tertiary: "#0A0F14"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 13vw
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: -0.02em
  display-large:
    fontFamily: Playfair Display
    fontSize: 6vw
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.01em
  h1:
    fontFamily: Playfair Display
    fontSize: 3.5vw
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0em
  body-md:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0.02em
  label-micro:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.2em
rounded:
  none: 0px
  sm: 4px
  md: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 25vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 18px 36px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px 36px
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
    size: 56px
    rounded: "{rounded.full}"
---

## Overview

Oasis Serenity embodies the essence of luxury meditation retreats through a design language of organic fluidity and contemplative stillness. The aesthetic draws from the natural world — water, stone, and light — creating a digital sanctuary that feels both ancient and futuristic.

The palette centers on a deep oceanic void (`#0A0F14`) that evokes the depths of a meditation pool, punctuated by a warm golden accent (`#C9A962`) that represents the first light of dawn. This color appears only on moments of interaction, guiding the user through their journey.

**Motion Tokens:**
- `ease-fluid: cubic-bezier(0.25, 0.46, 0.45, 0.94)` — smooth, water-like movement
- `ease-breath: cubic-bezier(0.4, 0, 0.2, 1)` — meditative, slow inhale-exhale rhythm
- `ease-awaken: gsap power3.out` — gentle emergence from darkness
- Duration scale: micro (0.3s), breath (1.2s), transcend (2.5s+)

## Colors

**Neutral (`#0A0F14`)** is the meditation void — a deep blue-black that suggests infinite depth and calm. It creates the canvas upon which content emerges like thoughts in meditation.

**Primary (`#FFFFFF`)** is pure light, used for all narrative text. It represents clarity and awakening.

**Secondary (`#7A8B8B`)** is a muted sea-mist grey for supporting information — timestamps, metadata, secondary labels.

**Tertiary (`#C9A962`, "Golden Dawn")** is the accent of enlightenment. Used exclusively for: the custom cursor, primary CTAs, active states, and moments of revelation. It must never flood the canvas.

## Typography

The typography system creates a dialogue between elegance and precision.

**Display Huge (13vw, Playfair Display)** serves as the primary meditation mantra — words so large they become environments. Used for the hero statement and key philosophical anchors.

**Display Large (6vw, Playfair Display)** bridges architectural scale and readability. Used for section openings and key offerings.

**H1 (3.5vw, Playfair Display)** provides readable elegance for sub-sections.

**Body MD (16px, Lato)** offers clean, highly legible narrative text. Lato's geometric warmth complements Playfair's classical elegance.

**Label Micro (10px, Space Mono)** provides technical precision for UI elements, coordinates, and metadata. Always uppercase with generous letter-spacing.

## Layout

The layout flows like water — no rigid grids, only organic placement guided by breath and intention.

**Breath Canvas:** Content emerges and recedes with vast vertical spacing (`massive: 25vw`), allowing each element its moment of presence.

**Scroll as Meditation:** The user scrolls not to consume content, but to progress through states of awareness. Each section is a moment of mindfulness.

**Asymmetrical Harmony:** Elements are positioned off-center, creating visual tension that resolves as the user scrolls — like thoughts settling in meditation.

## Elevation & Depth

Depth is achieved through layered opacity and parallax, creating a sense of floating in still water.

**Z-Axis Layers:** `canvas-ambient (z-index: 0)` for background gradients, `content (z-index: 10)` for narrative, `ui-overlay (z-index: 20)` for navigation, `cursor (z-index: 100)`.

**Parallax Factors:** Background drifts at `0.15x`, mid-content at `0.5x`, foreground at `0.85x`.

## Shapes

The shape language embraces organic curves — nothing sharp, nothing aggressive.

**Fluid Corners:** All UI elements use generous border radii (`12px` minimum, often `full`). Sharp corners are reserved only for the canvas edge itself.

**Organic Forms:** Background elements use blob-like SVG shapes that slowly morph and breathe.

## Components

**Primary Button:** Pill-shaped, Golden Dawn background, dark text, Label Micro uppercase. Used for the primary call-to-action: "Begin Your Journey."

**Ghost Button:** Pill-shaped, transparent, white text with 1px white border. Used for secondary actions like "Learn More."

**Navigation Labels:** Transparent, sea-mist grey, Label Micro typography. Navigation should feel like whispered guidance.

**Custom Cursor (Default):** A 14px golden circle that follows with a 0.8s lag, creating a trailing, meditative sensation.

**Custom Cursor (Hover):** Expands to 56px on interactive elements. On text, uses `mix-blend-mode: difference` for visual harmony.

## Signature Move

**The Breath Reveal:** As the user scrolls, the hero text "OASIS" emerges from a deep blur and opacity, synchronized with a subtle scale pulse that mimics a breathing rhythm. The golden accent elements fade in on the exhale.

## Do's and Don'ts

**Do** use the golden accent sparingly — its rarity creates significance.

**Do** maintain WCAG AA contrast ratios. Accessibility is universal design.

**Do** create moments of stillness in the scroll experience — not everything must animate.

**Don't** use sharp corners in UI elements. The aesthetic is organic and fluid.

**Don't** rush animations. Meditation is slow; so is this interface.

**Don't** use more than 3 colors. Simplicity is the ultimate sophistication.
