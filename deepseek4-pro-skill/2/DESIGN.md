---
version: alpha
name: Oasis — Mineral Stone
description: Grounded, sculptural, architectural. Warm amber copper accent against a stone-like deep brown void. 3D geometric mineral forms.
colors:
  primary: "#FDF8F0"
  secondary: "#8B7355"
  tertiary: "#D4843A"
  neutral: "#0F0B08"
  on-tertiary: "#0F0B08"
  on-neutral: "#FDF8F0"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 12vw
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: -0.04em
  display-large:
    fontFamily: Playfair Display
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.93
    letterSpacing: -0.03em
  h1:
    fontFamily: Playfair Display
    fontSize: 4vw
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 2px
  md: 4px
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
    rounded: "{rounded.md}"
    padding: 16px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 16px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 10px
    rounded: "{rounded.none}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 44px
    rounded: "{rounded.none}"
---

## Overview

Mineral Stone draws from the aesthetic of Japanese rock gardens, brutalist architecture, and the raw beauty of geological formations. The design language is **grounded, sculptural, and deliberately heavy** — the opposite of digital weightlessness.

The hero features a 3D geometric crystal/stone formation rendered in WebGL, slowly rotating and catching the light. Each facet reveals a different shade of amber and copper as the user scrolls, creating a gemological reveal. The emotional register is **still, ancient, and deeply grounding**.

**Motion Tokens:**
- `ease-geometric: cubic-bezier(0.22, 1, 0.36, 1)` — deliberate, weighted. For UI transitions.
- `ease-reveal: power4.out` — for text reveals.
- Duration scale: micro (0.15s), standard (0.5s), cinematic (2.5s+).

**Signature Move:** A 3D mineral formation that rotates in response to scroll position — each "facet" of the scroll reveals a different section of content, like turning a gemstone to the light.

## Colors

**Neutral (`#0F0B08`)** — Warm dark brown-black, like obsidian or rich soil. Deep and tactile.

**Primary (`#FDF8F0`)** — Warm off-white, like unbleached marble or rice paper. Soft and inviting.

**Secondary (`#8B7355`)** — Warm taupe, like weathered sandstone. For metadata and secondary labels.

**Tertiary (`#D4843A`, "Copper")** — A rich, burnished copper-amber. Evokes warm metal, autumn leaves, and Himalayan salt. Used exclusively for interaction.

## Typography

A dramatic editorial serif (Playfair Display) for headlines paired with monospace precision.

**Display Huge (12vw, weight 700)** — Bold, sculptural. The "Oasis" title feels carved from stone.

**Display Large (7vw)** — Section anchors. Substantial weight, tight leading.

**H1 (4vw)** — Subsections.

**Body MD (16px, Inter)** — Clean body copy at comfortable 1.7 line height.

**Label Micro (10px, JetBrains Mono)** — Technical06 counterpoint to the serif drama.

## Layout

Asymmetrical but deliberately structured, like a rock garden. Elements are placed at cardinal intersections. Sections alternate between left-anchored and right-anchored51 content, creating a rhythmic stone-path through the scroll. Sharp divisions between sections using thin copper lines.

## Elevation & Depth

**Z-Axis Layers:** `stone-canvas (0)`, `content (10)`, `grid-lines (15)`, `ui-overlay (20)`, `cursor (100)`.

**Parallax Factors:** Background texture (0.1), mid-ground stone formation (0.4), near content (0.75).

## Shapes

Architecturally sharp. UI elements use 2px or 4px corner radius — barely softened, like cut stone edges. Buttons are rectangles with crisp corners. The cursor is a sharp 10px square.

## Components

**Primary Button:** Rounded-rectangle (4px radius), Copper background, dark text. Solid and deliberate.

**Ghost Button:** 1px Copper border on transparent background.

**Custom Cursor:** 10px Copper square (no rounding). Expands to 44px white square on hover.

## Do's and Don'ts

**Do** use copper exclusively for interaction.
**Do** maintain crisp, architectural edges.
**Do** keep typography bold and grounded.

**Don't** use soft, pill-shaped elements.
**Don't** use gradients or shadows for depth — geometry provides depth.
**Don't** use Tailwind or utility frameworks.