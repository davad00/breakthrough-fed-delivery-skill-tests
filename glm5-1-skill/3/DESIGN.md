---
version: alpha
name: Oasis Water Reflection
description: Deep, liquid meditation retreat experience. Near-black blue base, vivid teal accent, liquid clip-path morphing hero, fluid typography.
colors:
  primary: "#E8F4F8"
  secondary: "#5A7D8A"
  tertiary: "#00D4AA"
  neutral: "#060D12"
  on-tertiary: "#060D12"
  on-neutral: "#E8F4F8"
typography:
  display-huge:
    fontFamily: Space Grotesk
    fontSize: 13vw
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: -0.05em
  display-large:
    fontFamily: Space Grotesk
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: -0.03em
  h1:
    fontFamily: Space Grotesk
    fontSize: 3.8vw
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.12em
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

Water is the oldest metaphor for consciousness. On its surface, it reflects — mirror-smooth, deceptively simple. Below, it descends into infinite depth, layer upon layer of pressure and silence. Oasis Water Reflection uses this duality as its entire design language. The page itself behaves like water: it morphs, it ripples, it deepens. The clip-path hero is not decoration — it is the water body, a living organic form that breathes and shifts as if stirred by an unseen current. Every interaction ripples outward. The scroll is a descent, from the bright surface of awareness into the profound stillness below. This is not a website about meditation. This is meditation, encoded in pixels.

## Colors

The palette is drawn from the deepest parts of the ocean at twilight. #060D12 is not black — it is the color of water so deep that no light penetrates, the closest thing to void that still holds warmth. #E8F4F8 is ice-white, the color of light refracted through frozen water — never pure white, always carrying a hint of the cold. #5A7D8A is the water itself at mid-depth, where the sun fades and the blues turn to slate. #00D4AA is the living accent — bioluminescent teal, the color of deep-sea creatures that generate their own light in absolute darkness. This is the only saturated color, and it is reserved for moments of activation: buttons, cursor, the pulse of the morphing shape. It should feel like the first breath after a long submersion.

## Typography

Space Grotesk carries the weight of the entire identity. Its geometric skeleton provides the precision of a still water surface, while its grotesque quirks — the slightly uneven curves, the unexpected terminals — give it the organic fluidity of water in motion. At 13vw and 700 weight, "OASIS" becomes a monolith, a surface you can almost see your reflection in. At 7vw, the philosophy lines breathe more, their tighter tracking creating ripples of negative space between characters. Inter at 400 weight is the opposite pole: functional, transparent, water-clear. It carries information without asserting itself, like the medium through which light travels. JetBrains Mono at 10px with 0.12em tracking is the readout — the sonar ping, the depth gauge, the precise measurement of immeasurable things. Its monospace rhythm creates a pulse beneath the organic forms, the heartbeat beneath the stillness.

## Layout

The layout rejects the grid. Water does not arrange itself in columns. Elements float at deliberate but asymmetric positions, as if suspended at different depths. The hero text overlaps the morphing shape rather than sitting above or beside it — text and form are inseparable, like a reflection on water. The three depth cards are not aligned but staggered diagonally, creating a sense of descending. The pinned scroll section is the full descent — the viewport becomes a body of water that expands around you. Horizontal margins are generous and inconsistent. Vertical spacing uses the massive scale (20vw) to create the feeling of vast depth between sections. Nothing snaps. Nothing aligns perfectly. The imperfection is the point.

## Elevation & Depth

Water has three dimensional layers, and so does this interface. The surface layer (z-index 1-10) holds the navigation, cursor, and overlay — the things you interact with directly, the surface tension. The mid-depth layer (z-index 11-50) holds the content: text, cards, the philosophy section — the things you see through the surface. The abyss layer (z-index 51-100) is reserved for the morphing clip-path shape and the pinned scroll section — the primal forms that exist beneath everything. This inversion is intentional: the deepest visual elements have the highest z-index because they are the most fundamental. The clip-path shape is not behind the text; it is the reality the text describes.

## Shapes

Every shape in Water Reflection defies the rectangle. The hero blob is the primary shape — a continuously morphing polygon that never resolves into a fixed form, because water never holds a single shape for long. Cards use border-radius values that shift subtly, as if the card's edges are lapped by gentle waves. The ripple effect on click is pure circle — the most fundamental water shape. Buttons are fully rounded, pill-shaped, because water does not have corners. Even the layout containers use generous border-radius, softening the inherently rectangular medium of the browser into something organic. When shapes must be rectangular (text blocks, containers), they are softened with enough radius that the rectangle becomes a suggestion rather than a declaration.

## Components

The primary button is a teal pill — #00D4AA on #060D12 — that feels like a living thing. On hover, it ripples. Its text is set in JetBrains Mono at 10px with wide tracking, turning the call to action into a precise instruction rather than a shout. The ghost button is invisible until needed, its outline a thin line of ice-white, like a breath on cold glass. Navigation labels are the same monospace micro-type in #5A7D8A, receding into the deep until hovered. The custom cursor replaces the system pointer entirely — a 12px teal circle that expands to 48px on interactive elements, with mix-blend-mode ensuring it inverts against both light and dark surfaces. The hamburger icon is three horizontal lines that, on open, dissolve into a wave pattern — the menu itself slides in as a full-screen overlay with a clip-path wave transition that literally washes over the page.

## Do's and Don'ts

**Do** morph the clip-path shape continuously and slowly — it should feel like watching water, not like watching animation. **Do** use the teal accent sparingly — it is bioluminescence, rare and precious. **Do** stagger text reveals to create a sense of descending through layers. **Do** make the pinned scroll section feel like a genuine descent — the shape should expand as if the viewer is sinking deeper into water and the water is closing in around them. **Do** respect prefers-reduced-motion with static, elegant fallbacks. **Do** test the clip-path morphing on mobile and simplify gracefully.

**Don't** use any warm colors — this is deep water, not a sunset beach. **Don't** center-align everything — water is asymmetric, and so should the layout be. **Don't** add decorative elements that don't serve the water metaphor. **Don't** use the teal accent for large background areas — it loses its bioluminescent quality when overused. **Don't** make the ripple effect too aggressive — it should feel like a raindrop hitting still water, not a splash. **Don't** use sharp corners anywhere. **Don't** rush the scroll experience — the entire page is a meditation, and meditations cannot be hurried. **Don't** use placeholder text or generic content — every word must carry the weight of the water metaphor.