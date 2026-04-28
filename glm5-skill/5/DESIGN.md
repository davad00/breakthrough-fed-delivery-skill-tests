---
version: alpha
name: Oasis Celestial
description: Cosmic, transcendent luxury. Deep space palette with aurora accent. Orbiting, gravitational animations.
colors:
  primary: "#E8E8F0"
  secondary: "#6E7191"
  tertiary: "#00D4AA"
  neutral: "#08080F"
  on-tertiary: "#08080F"
  on-neutral: "#E8E8F0"
typography:
  display-huge:
    fontFamily: Syne
    fontSize: 14vw
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: -0.03em
  display-large:
    fontFamily: Syne
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: -0.02em
  h1:
    fontFamily: Syne
    fontSize: 3.5vw
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 6px
  md: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 18px
  lg: 36px
  xl: 72px
  xxl: 150px
  massive: 26vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 18px 42px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px 42px
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

Oasis Celestial positions luxury meditation as a cosmic journey — a voyage through inner space that mirrors the vastness of outer space. The aesthetic is futuristic yet ancient, drawing from space exploration imagery and ancient astronomical instruments.

The palette is the deep cosmos (`#08080F`) with subtle blue undertones, punctuated by an aurora accent (`#00D4AA`) that glows like the Northern Lights or a distant nebula.

**Motion Tokens:**
- `ease-orbit: cubic-bezier(0.37, 0, 0.63, 1)` — gravitational, orbital movement
- `ease-transmit: cubic-bezier(0.16, 1, 0.3, 1)` — signal-like emergence
- `ease-pulse: gsap power2.inOut` — rhythmic, like a heartbeat or star
- Duration scale: micro (0.2s), orbit (1s), cosmic (2.5s+)

## Colors

**Neutral (`#08080F`)** is deep space — not black, but the blue-black of the cosmic void. It holds content like the universe holds stars.

**Primary (`#E8E8F0`)** is starlight white — slightly cool, suggesting distant light.

**Secondary (`#6E7191`)** is nebula grey — a cool blue-grey for supporting text.

**Tertiary (`#00D4AA`, "Aurora")** is the accent of transcendence. Used for: the custom cursor, primary CTAs, and glowing highlights. It should feel like it's emitting light.

## Typography

Typography is bold and futuristic — confident in its scale and weight.

**Display Huge (14vw, Syne Bold)** creates cosmic statements. The geometric boldness feels like it could be a spacecraft designation.

**Display Large (7vw, Syne SemiBold)** bridges scale and readability with authority.

**H1 (3.5vw, Syne SemiBold)** provides readable headings with maintained presence.

**Body MD (16px, Manrope)** offers clean, modern body text. Manrope's geometric warmth complements Syne's boldness.

**Label Micro (10px, Space Grotesk)** provides technical precision. Always uppercase with generous spacing.

## Layout

The layout is orbital — elements exist in gravitational relationships.

**Orbital Canvas:** Content is positioned in orbits around central points. Some elements rotate or drift slowly.

**Scroll as Voyage:** The user travels through space. Each section is a celestial body to pass.

**Radial Composition:** Unlike other versions, this design often uses radial arrangements, creating a sense of cosmic order.

## Elevation & Depth

Depth is achieved through scale, parallax, and glowing effects.

**Z-Axis Layers:** `canvas-stars (z-index: 0)` for particle/star background, `content (z-index: 10)`, `ui-overlay (z-index: 20)`, `cursor (z-index: 100)`.

**Parallax Orbits:** Background stars move at different speeds, creating depth through motion parallax.

**Glow Effects:** The accent color uses `box-shadow` and `text-shadow` to create emission effects.

## Shapes

The shape language is geometric and precise — circles, orbits, and clean lines.

**Circular Motifs:** Buttons and key elements use full border radius, suggesting planets or portals.

**Orbital Lines:** Decorative elements use thin circular paths, suggesting orbits.

**Geometric Precision:** All shapes are mathematically precise — no organic wobble.

## Components

**Primary Button:** Pill-shaped, Aurora background, dark text, Label Micro uppercase. May include a subtle glow effect.

**Ghost Button:** Pill-shaped, transparent, starlight white text with 1px cool border.

**Navigation Labels:** Transparent, nebula grey, Label Micro typography. Should feel like instrument readouts.

**Custom Cursor (Default):** A 10px aurora circle with a subtle glow, following with a 0.7s orbital ease.

**Custom Cursor (Hover):** Expands to 60px on interactive elements, with a ring effect. Uses `mix-blend-mode: screen`.

## Signature Move

**The Orbital Reveal:** The hero text "OASIS" emerges from behind a rotating circular mask. As the user scrolls, the mask rotates to reveal the text, which then floats freely. Background stars drift at different parallax speeds, creating a sense of traveling through space.

## Do's and Don'ts

**Do** use glow effects to create a sense of light emission.

**Do** create orbital relationships between elements.

**Do** let the background be active with subtle particle/star movement.

**Don't** use warm colors — the palette is cool and cosmic.

**Don't** create static layouts — elements should feel like they're in orbit.

**Don't** use heavy textures — the aesthetic is{}