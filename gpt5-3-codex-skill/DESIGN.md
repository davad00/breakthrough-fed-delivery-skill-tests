---
version: alpha
name: Oasis Retreat System
description: Luxury cinematic landing systems for Oasis meditation retreat, expressed as five distinct art directions.
colors:
  primary: "#F4F1EA"
  secondary: "#8E8A84"
  tertiary: "#C6FF4D"
  neutral: "#0D0F12"
  on-tertiary: "#071106"
  on-neutral: "#F4F1EA"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 11vw
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: -0.03em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: -0.025em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 6px
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
    size: 42px
    rounded: "{rounded.full}"
---

## Overview
Oasis is a luxury retreat brand expressed through calm darkness, luminous accents, and cinematic pacing. The experience avoids commodity wellness aesthetics and uses spatial depth, kinetic typography, and deliberate silence to communicate rarity. The tone is tranquil but unmistakably premium.

Motion tokens:
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)`
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)`
- `ease-hover: back.out(1.7)`
- Durations: micro `0.2s`, standard `0.6s`, cinematic `1.4s`

## Colors
Near-black neutral drives atmosphere and depth. Warm off-white carries readable narrative text. A single vivid lime accent is reserved for interaction only: CTA, active state, cursor, and precise highlights. Accent overuse is forbidden.

## Typography
Typography uses extreme contrast. Display text is architectural (7vw-11vw) and creates emotional mass. Supporting details are technical and micro (11px mono). There is no middle scale on purpose, forcing strong hierarchy.

## Layout
Layouts are asymmetrical and borderless. Scroll is narrative, not utility. Section spacing is intentionally vast to create breath and anticipation between story beats.

## Elevation & Depth
Depth is produced through layered gradients, parallax, blur fields, and motion. Layer map: `background (0)`, `content (10)`, `overlay-ui (20)`, `cursor (100)`. Parallax factors: far `0.12`, mid `0.35`, near `0.75`.

## Shapes
Shape language alternates between perfectly sharp cuts and full pills. Organic effects appear only in atmospheric layers (mist, light pools, morph forms), not in utility UI geometry.

## Components
Primary button is a pill with accent fill and dark text. Ghost button is transparent with subtle border. Navigation is hidden behind a menu toggle and expanded as a full-screen scene. Cursor enlarges on interactive hover and uses blend inversion for tactile feedback.

## Do's and Don'ts
Do keep one memorable signature interaction per version. Do enforce reduced motion fallbacks and keyboard focus styles. Do keep copy minimal and intentional. Do not use generic top nav bars, default easing, or placeholder text.
