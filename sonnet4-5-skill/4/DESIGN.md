---
version: alpha
name: Oasis Luxe
description: Opulent luxury meditation retreat. Midnight navy, rose gold, refined typography.
colors:
  primary: "#FFFFFF"
  secondary: "#A8A8A8"
  tertiary: "#E8B4A0"
  neutral: "#0A0D1F"
  on-tertiary: "#0A0D1F"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Bodoni Moda
    fontSize: 15vw
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: -0.06em
  display-large:
    fontFamily: Bodoni Moda
    fontSize: 8.5vw
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: -0.04em
  h1:
    fontFamily: Bodoni Moda
    fontSize: 5vw
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Courier Prime
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.2em
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
  massive: 28vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.none}"
    padding: 22px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 22px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 6px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.tertiary}"
    size: 100px
    rounded: "{rounded.full}"
---

## Overview

Oasis Luxe embodies the pinnacle of refined luxury. The design language draws from haute couture, luxury hospitality, and the visual codes of wealth and exclusivity. The emotional register is **sophisticated, powerful, and unapologetically opulent** — the feeling of entering a private members' club where every detail has been perfected.

The palette is anchored in midnight navy (`#0A0D1F`) with rose gold accents (`#E8B4A0`) that evoke champagne, sunset, and precious metals. Typography is set in Bodoni Moda, a modern revival of the classic Bodoni with extreme contrast between thick and thin strokes, creating letterforms that feel like jewelry. The aesthetic is maximalist minimalism — every element is luxurious, but nothing is excessive.

**Motion Tokens:**
- `ease-luxe: cubic-bezier(0.19, 1, 0.22, 1)` — smooth, expensive. Use for all reveals and transitions.
- `ease-shimmer: cubic-bezier(0.68, -0.55, 0.265, 1.55)` — slight bounce. Use for hover micro-interactions.
- Duration scale: instant (0.4s), refined (1s), grand (2.5s+).

**Signature Move:** A 3D rotating diamond rendered in Three.js with realistic refraction and caustics, positioned as the hero element. As the user scrolls, light moves across its facets, creating dynamic reflections and rainbow refractions.

## Colors

**Neutral (`#0A0D1F`)** is a deep midnight navy, the color of luxury evening wear and high-end automotive interiors. It creates depth while feeling warmer and more sophisticated than pure black.

**Primary (`#FFFFFF`)** is pure white for all primary text, creating maximum contrast and clarity.

**Secondary (`#A8A8A8`)** is a cool grey for supporting information, maintaining the refined palette.

**Tertiary (`#E8B4A0`, "Rose Gold")** is a warm, metallic blush that evokes champagne, sunset over water, and precious metals. Used exclusively for interactive elements and moments of emphasis.

## Typography

**Display Huge (15vw, Bodoni Moda Bold)** features extreme contrast between thick and thin strokes, creating letterforms that feel like they were carved from marble. The dramatic serifs and tight letter-spacing create a sense of compressed power.

**Display Large (8.5vw)** maintains the dramatic contrast while becoming readable. Used for section headings and key luxury statements.

**Body MD (16px, Inter Light)** provides contrast with its simplicity and exceptional legibility. Set with generous line-height for comfortable reading.

**Label Micro (10px, Courier Prime Bold)** evokes luxury brand labels and haute couture tags, creating a sense of exclusivity and craftsmanship.

## Layout

The layout is defined by perfect symmetry and mathematical precision, creating a sense of order and control.

**Luxurious Spacing:** Sections are separated by `massive: 28vw`, creating a sense of spaciousness and exclusivity.

**Centered Composition:** Major elements are centered on the viewport, creating formal, symmetrical compositions that feel intentional and powerful.

## Elevation & Depth

**Z-Axis Layers:** `diamond-3d (0)` for the WebGL diamond, `shimmer-layer (5)` for subtle metallic shimmer effects, `content (10)`, `ui (20)`, `cursor (100)`.

**Parallax Factors:** Background at `0.08x`, mid-ground at `0.35x`, foreground at `0.7x`, creating refined depth without excessive movement.

## Shapes

All UI elements use perfectly sharp corners (`0px`) to create a sense of precision and refinement. The 3D diamond features perfect geometric facets that catch and refract light.

## Components

**Primary Button:** Sharp corners, Rose Gold background, midnight navy text, uppercase Label Micro. Hover state adds subtle shimmer animation. Used for "RESERVE YOUR SANCTUARY" call-to-action.

**Ghost Button:** Sharp corners, transparent with 1px white border, white text. Hover state adds rose gold tint to border.

**Navigation:** Minimal text-only navigation that appears on hover, with items arranged in a perfectly centered vertical stack.

**Custom Cursor:** 6px rose gold dot with 0.5s lag. Expands to 100px glowing orb on hover with subtle shimmer effect and `mix-blend-mode: screen` for luminous quality.

## Do's and Don'ts

**Do** maintain perfect symmetry and mathematical precision in layout.

**Do** use the rose gold accent to create moments of warmth and luxury.

**Do** create smooth, refined animations that feel expensive and controlled.

**Don't** use organic or irregular shapes. Everything must feel intentional and precise.

**Don't** create fast or aggressive animations. Luxury moves slowly and deliberately.

**Don't** overcrowd the space. Luxury is defined by what you choose not to include.
