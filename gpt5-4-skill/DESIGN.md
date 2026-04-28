---
version: alpha
name: Oasis Breakthrough System
description: Five cinematic landing-page directions for Oasis, a high-end luxury meditation retreat.
colors:
  primary: "#F5F1EA"
  secondary: "#A39A90"
  tertiary: "#B9FF63"
  neutral: "#0A0D10"
  on-tertiary: "#071006"
  on-neutral: "#F5F1EA"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 11vw
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: -0.04em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: -0.03em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 8px
  lg: 28px
  full: 9999px
spacing:
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
    textColor: "{colors.on-neutral}"
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
    size: 40px
    rounded: "{rounded.full}"
---

## Overview
Oasis is framed as a rarefied retreat where stillness is choreographed with the same precision as luxury hospitality. The experience should feel cinematic, dark, spatial, and emotionally expensive rather than soft, generic, or wellness-template driven. Each version delivers one memorable signature move while preserving the same calm, premium identity.

Motion tokens:
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)`
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)`
- `ease-hover: back.out(1.7)`
- Durations: micro `0.2s`, standard `0.6s`, cinematic `1.5s`

## Colors
The palette starts with a near-black atmospheric base and warm ivory text for clarity. Accent color is reserved for invitations, active states, cursor states, and exact spatial highlights. Supporting versions may bend the accent toward jade, amber, or ice, but every interaction still follows a dark-field, single-accent discipline.

## Typography
Typography is architectural. Headlines sit at dramatic scale and carry most of the emotional weight. Utility language is compressed into micro mono labels so the interface feels curated and controlled. Medium-weight, medium-scale typography should remain scarce.

## Layout
Layout is borderless and asymmetric. Sections should feel staged rather than stacked. Large breathing gaps, overlap, pinned scenes, and offset content blocks are preferred over rigid cards or obvious grid systems.

## Elevation & Depth
Depth comes from blur fields, luminous gradients, layered glass surfaces, and scroll-based parallax. Layer map: `background (0)`, `content (10)`, `overlay-ui (20)`, `cursor (100)`. Parallax factors: far `0.1`, mid `0.35`, near `0.75`.

## Shapes
Utility shapes stay disciplined: pills, sharp lines, and controlled radii. Organic form appears in hero atmospherics, morphing fields, ripples, halos, and light pools rather than in the information architecture itself.

## Components
Primary buttons use a luminous accent fill with dark text. Secondary buttons remain transparent with subtle borders. Navigation opens as a full-screen overlay instead of a traditional top nav. Cursor enlarges over magnetic targets. Signature hero objects include orbital light forms, monoliths, glass bodies, eclipse rings, and liquid gradients.

## Do's and Don'ts
Do create one strong interaction per version. Do preserve readable contrast and clear focus states. Do support reduced motion and simplified mobile behavior. Do not use Tailwind-like utility aesthetics, standard marketing hero layouts, or generic spa imagery.