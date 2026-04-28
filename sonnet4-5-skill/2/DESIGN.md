---
version: alpha
name: Oasis Celestial
description: Cosmic luxury meditation retreat. Deep space black, ethereal cyan, otherworldly typography.
colors:
  primary: "#FFFFFF"
  secondary: "#7A7A7A"
  tertiary: "#00F0FF"
  neutral: "#000000"
  on-tertiary: "#000000"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 13vw
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: -0.06em
  display-large:
    fontFamily: Playfair Display
    fontSize: 7.5vw
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.04em
  h1:
    fontFamily: Playfair Display
    fontSize: 4.5vw
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: 0.02em
  label-micro:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.18em
rounded:
  none: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 30vw
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
    rounded: "{rounded.none}"
    padding: 20px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 8px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.tertiary}"
    size: 80px
    rounded: "{rounded.full}"
---

## Overview

Oasis Celestial transcends earthly meditation and enters the realm of cosmic consciousness. The design language draws from astrophotography, science fiction interfaces, and the visual poetry of deep space. The emotional register is **transcendent, infinite, and mysteriously powerful** — the feeling of floating in zero gravity while consciousness expands beyond the body.

The palette is pure black void (`#000000`) punctuated by ethereal cyan (`#00F0FF`) that glows like distant nebulae. Typography is set in Playfair Display at extreme weights, creating letterforms that feel carved from starlight. The aesthetic is simultaneously ancient and futuristic, evoking both temple architecture and spacecraft interfaces.

**Motion Tokens:**
- `ease-orbit: cubic-bezier(0.65, 0, 0.35, 1)` — circular, perpetual. Use for rotating elements.
- `ease-warp: cubic-bezier(0.87, 0, 0.13, 1)` — dramatic acceleration. Use for page transitions.
- Duration scale: pulse (1.5s), orbit (8s), cosmic (15s+).

**Signature Move:** A WebGL particle field of 10,000 stars that responds to mouse movement, creating a sense of navigating through space. As the user scrolls, the camera moves through different nebula formations.

## Colors

**Neutral (`#000000`)** is absolute black, the void of deep space. It creates infinite depth and makes every element feel like it's floating in zero gravity.

**Primary (`#FFFFFF`)** is pure white for primary text, appearing as bright as stars against the void.

**Secondary (`#7A7A7A`)** is a cool grey for metadata and supporting information.

**Tertiary (`#00F0FF`, "Nebula Cyan")** is an otherworldly cyan that appears to glow with its own light. Used exclusively for interactive elements, creating the feeling of touching holographic interfaces.

## Typography

**Display Huge (13vw, Playfair Display Black)** is monumental and dramatic. The extreme weight creates letterforms that feel like cosmic architecture. Used for "OASIS" and major section statements.

**Display Large (7.5vw)** maintains the dramatic weight while becoming readable. Used for philosophical statements about transcendence.

**Body MD (16px, Inter Light)** provides contrast with its simplicity and legibility. Set with generous line-height for contemplative reading.

**Label Micro (10px, Space Mono Bold)** evokes spacecraft readouts and technical interfaces, creating a futuristic precision.

## Layout

The layout is defined by elements floating in infinite space, positioned using viewport coordinates with no visible grid structure.

**Cosmic Spacing:** Sections are separated by `massive: 30vw`, creating the sensation of traveling vast distances between content nodes.

**Orbital Composition:** Elements are positioned in circular arrangements around invisible focal points, mimicking planetary orbits.

## Elevation & Depth

**Z-Axis Layers:** `starfield (0)` for the WebGL particle system, `nebula-bg (5)` for glowing background effects, `content (10)`, `ui (20)`, `cursor (100)`.

**Parallax Factors:** Stars at `0.02x` (infinite distance), nebulae at `0.15x` (far), content at `0.6x` (near), creating extreme depth.

## Shapes

UI elements use sharp corners (`0px`) for precision or full circles (`9999px`) for cosmic forms. The WebGL environment features organic, flowing nebula shapes and perfect spherical particles.

## Components

**Primary Button:** Pill-shaped, Nebula Cyan background with subtle glow effect, black text, uppercase Label Micro. Used for "TRANSCEND" call-to-action.

**Ghost Button:** Sharp corners, transparent with 1px white border, white text. Creates contrast with the curved primary button.

**Navigation:** Radial menu that expands from center screen, with navigation items arranged in a circle like a star chart.

**Custom Cursor:** 8px cyan dot with 1s lag and trailing particle effect. Expands to 80px glowing orb on hover, with `blur(20px)` creating a nebula effect.

## Do's and Don'ts

**Do** create a sense of infinite depth through parallax and particle effects.

**Do** use the cyan accent to create glowing, holographic effects.

**Do** make animations slow and perpetual, like celestial motion.

**Don't** use warm colors. The palette must remain cold and otherworldly.

**Don't** create fast, jarring animations. Everything should feel weightless and eternal.

**Don't** overcrowd the space. The void is essential to the cosmic feeling.
