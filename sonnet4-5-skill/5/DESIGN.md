---
version: alpha
name: Oasis Kinetic
description: Dynamic luxury meditation retreat. Charcoal void, electric violet, aggressive typography.
colors:
  primary: "#FFFFFF"
  secondary: "#6E6E6E"
  tertiary: "#9D4EDD"
  neutral: "#0D0D0D"
  on-tertiary: "#FFFFFF"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Archivo Black
    fontSize: 16vw
    fontWeight: 900
    lineHeight: 0.75
    letterSpacing: -0.08em
  display-large:
    fontFamily: Archivo Black
    fontSize: 9vw
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: -0.05em
  h1:
    fontFamily: Archivo Black
    fontSize: 5.5vw
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: -0.03em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  label-micro:
    fontFamily: Roboto Mono
    fontSize: 9px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.2em
rounded:
  none: 0px
  sharp: 2px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 35vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.none}"
    padding: 16px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 16px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 4px
    rounded: "{rounded.none}"
  cursor-hover:
    backgroundColor: "{colors.tertiary}"
    size: 120px
    rounded: "{rounded.none}"
---

## Overview

Oasis Kinetic redefines meditation for the digital age. The design language is rooted in kinetic typography, glitch aesthetics, and the visual energy of electronic music culture. The emotional register is **intense, transformative, and unapologetically modern** — the feeling of entering a sensory deprivation chamber that heightens rather than dulls perception.

The palette is a stark charcoal void (`#0D0D0D`) punctuated by electric violet (`#9D4EDD`) that pulses with energy. Typography is set in Archivo Black, an ultra-bold sans-serif that creates letterforms with maximum impact and presence. The aesthetic is aggressive minimalism — every element is stripped to its essence and amplified to maximum intensity.

**Motion Tokens:**
- `ease-snap: cubic-bezier(0.95, 0.05, 0.795, 0.035)` — aggressive, mechanical. Use for sharp transitions.
- `ease-pulse: cubic-bezier(0.85, 0, 0.15, 1)` — rhythmic, electronic. Use for pulsing effects.
- Duration scale: snap (0.15s), pulse (0.5s), surge (1.2s).

**Signature Move:** Kinetic typography where individual letters break apart, rotate, and reassemble as the user scrolls. Text appears to glitch and distort before snapping into perfect clarity, creating a sense of digital transformation.

## Colors

**Neutral (`#0D0D0D`)** is a deep charcoal, darker than standard grey but not pure black, creating a digital void that feels charged with potential energy.

**Primary (`#FFFFFF`)** is pure white for maximum contrast and impact.

**Secondary (`#6E6E6E`)** is a neutral grey for supporting information, maintaining the stark palette.

**Tertiary (`#9D4EDD`, "Electric Violet")** is a vibrant, saturated purple that appears to glow with digital energy. Used for interactive elements and moments of transformation.

## Typography

**Display Huge (16vw, Archivo Black)** is the most aggressive scale in the series. The ultra-bold weight and extreme negative letter-spacing create letterforms that feel compressed and powerful, like they're about to explode.

**Display Large (9vw)** maintains the aggressive weight while becoming readable. Used for section headings and transformational statements.

**Body MD (15px, Inter)** provides contrast with its neutrality and legibility. Slightly smaller than standard to create more visual tension with the massive display type.

**Label Micro (9px, Roboto Mono Bold)** is the smallest in the series, creating maximum contrast with the display type. Evokes digital readouts and system interfaces.

## Layout

The layout is defined by extreme asymmetry and dynamic tension, with elements positioned at unexpected angles and scales.

**Kinetic Spacing:** Sections are separated by `massive: 35vw`, the largest spacing in the series, creating dramatic pauses between content bursts.

**Angular Composition:** Elements are rotated, skewed, and positioned at dynamic angles, creating a sense of movement and instability that resolves into clarity.

## Elevation & Depth

**Z-Axis Layers:** `glitch-bg (0)` for background distortion effects, `kinetic-type (5)` for animated typography layer, `content (10)`, `ui (20)`, `cursor (100)`.

**Parallax Factors:** Minimal parallax (`0.05x` max) to maintain the flat, digital aesthetic. Depth is created through layering and motion rather than spatial illusion.

## Shapes

All UI elements use perfectly sharp corners (`0px`) to create a sense of digital precision and aggressive geometry. The cursor transforms from a tiny square to a massive square on hover, creating dramatic scale shifts.

## Components

**Primary Button:** Sharp corners, Electric Violet background, white text, uppercase Label Micro. Hover state adds glitch effect with RGB channel separation.

**Ghost Button:** Sharp corners, transparent with 2px white border, white text. Hover state adds violet tint and subtle distortion.

**Navigation:** Minimal text-only navigation that appears as a vertical stack in the top-left corner. Items animate in with staggered glitch effects.

**Custom Cursor:** 4px violet square with no lag (instant tracking). Expands to 120px square on hover with `mix-blend-mode: difference` creating an inversion effect.

## Do's and Don'ts

**Do** create aggressive, high-impact animations that feel digital and transformative.

**Do** use the violet accent to create moments of intense energy and focus.

**Do** embrace glitch aesthetics and digital distortion as intentional design elements.

**Don't** use soft or organic shapes. Everything must feel digital and precise.

**Don't** create slow or gentle animations. Motion should be fast, sharp, and decisive.

**Don't** add warmth or softness. The aesthetic is intentionally stark and intense.
