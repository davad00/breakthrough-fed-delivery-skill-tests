---
version: alpha
name: Oasis Zen
description: Minimalist luxury meditation retreat. Deep indigo void, golden accent, architectural typography.
colors:
  primary: "#FFFFFF"
  secondary: "#8B8B8B"
  tertiary: "#D4AF37"
  neutral: "#0B0E1A"
  on-tertiary: "#0B0E1A"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 14vw
    fontWeight: 300
    lineHeight: 0.85
    letterSpacing: -0.05em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 8vw
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: -0.03em
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 5vw
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Inconsolata
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.15em
rounded:
  none: 0px
  sm: 2px
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
    padding: 18px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px
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
    size: 60px
    rounded: "{rounded.full}"
---

## Overview

Oasis Zen embodies the philosophy of luxury through absence. The design language is rooted in Japanese ma (negative space), Scandinavian minimalism, and the visual silence of high-end spa environments. The emotional register is **serene, weightless, and profoundly still** — the digital equivalent of entering a meditation chamber where every surface has been considered, every element earns its presence.

The palette is anchored in a deep indigo void (`#0B0E1A`) that evokes twilight and the liminal space between waking and meditation. Golden accents (`#D4AF37`) appear sparingly, like candlelight in darkness, guiding the eye to moments of interaction. Typography is set in Cormorant Garamond, a refined serif with calligraphic roots, creating an atmosphere of timeless elegance.

**Motion Tokens:**
- `ease-breath: cubic-bezier(0.4, 0, 0.2, 1)` — slow, meditative. Mimics the rhythm of conscious breathing.
- `ease-float: cubic-bezier(0.25, 0.46, 0.45, 0.94)` — weightless drift. Use for parallax and ambient motion.
- Duration scale: breath (2s), float (3.5s), eternal (6s+).

**Signature Move:** A 3D lotus flower rendered in Three.js that slowly rotates and opens its petals as the user scrolls, revealing the retreat's core message at its center.

## Colors

**Neutral (`#0B0E1A`)** is a deep indigo-black, the color of pre-dawn sky. It creates a sense of infinite depth and quietude, allowing content to float in space.

**Primary (`#FFFFFF`)** is pure white for all primary text. Used sparingly to maintain visual silence.

**Secondary (`#8B8B8B`)** is a warm grey for supporting information, creating hierarchy without disrupting the meditative atmosphere.

**Tertiary (`#D4AF37`, "Temple Gold")** is used exclusively for interactive elements and moments of emphasis. It evokes candlelight, temple bells, and the warmth of sunrise after meditation.

## Typography

**Display Huge (14vw, Cormorant Garamond Light)** is architectural and serene. The ultra-light weight creates letterforms that feel carved from light itself. Used for the hero statement "OASIS" and section-opening words.

**Display Large (8vw)** bridges monumental and readable. Used for key philosophical statements and section headings.

**Body MD (16px, Inter Light)** is set with generous line-height (1.8) to create breathing room between lines. Every paragraph is a moment of contemplation.

**Label Micro (11px, Inconsolata)** provides technical precision for UI elements, creating contrast with the organic serif display type.

## Layout

The layout is defined by vast negative space and asymmetrical balance. Elements are positioned using golden ratio proportions (1.618:1) to create natural, harmonious composition.

**Vertical Rhythm:** Sections are separated by `massive: 25vw` spacing, allowing each element to exist in isolation before the next appears.

**Floating Elements:** Text and images are positioned absolutely, appearing to float in the void with subtle parallax motion at different depths.

## Elevation & Depth

**Z-Axis Layers:** `lotus-3d (0)` for the WebGL lotus, `ambient-particles (5)` for floating particle effects, `content (10)`, `ui (20)`, `cursor (100)`.

**Parallax Factors:** Background elements at `0.05x` (far), mid-ground at `0.3x`, foreground at `0.7x`, creating gentle depth without disrupting the meditative flow.

## Shapes

All UI elements use either perfectly sharp corners (`0px`) for precision or full pill shapes (`9999px`) for softness. The 3D lotus features organic, flowing curves that contrast with the geometric UI layer.

## Components

**Primary Button:** Pill-shaped, Temple Gold background, deep indigo text, uppercase Label Micro. Used for "BOOK RETREAT" — the single most important action.

**Ghost Button:** Pill-shaped, transparent with 1px white border, white text. Used for "LEARN MORE" secondary actions.

**Navigation:** Hidden behind a minimal hamburger icon (three horizontal lines, 1px each). Opens to full-screen overlay with large-scale navigation items.

**Custom Cursor:** 10px golden circle with 0.8s lag, creating a trailing meditation bead effect. Expands to 60px on hover with `mix-blend-mode: difference`.

## Do's and Don'ts

**Do** maintain vast negative space. Emptiness is not wasted space — it is the foundation of the design.

**Do** use the golden accent sparingly. Each appearance should feel intentional and significant.

**Do** ensure all animations are slow and meditative. Nothing should feel rushed or jarring.

**Don't** fill space with unnecessary elements. Every addition must justify its presence.

**Don't** use fast or aggressive animations. The pace should mirror conscious breathing.

**Don't** use more than three colors. Simplicity is luxury.
