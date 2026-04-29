---
version: alpha
name: Oasis Zen Garden
description: Japanese ink-wash meditation retreat. Stone base, crimson accent, editorial serif, clip-path text reveals, wabi-sabi aesthetic.
colors:
  primary: "#2C2C2C"
  secondary: "#8C8478"
  tertiary: "#C23B22"
  neutral: "#F2EDE8"
  on-tertiary: "#F2EDE8"
  on-neutral: "#2C2C2C"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 11vw
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: -0.02em
  display-large:
    fontFamily: Playfair Display
    fontSize: 6vw
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.01em
  h1:
    fontFamily: Playfair Display
    fontSize: 3.5vw
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.01em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.15em
rounded:
  none: 0px
  sm: 2px
  md: 6px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 128px
  massive: 24vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 16px 28px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 16px 28px
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
    size: 40px
    rounded: "{rounded.full}"
---

## Overview

Oasis Zen Garden embodies the Japanese aesthetic of wabi-sabi — the beauty of imperfection, impermanence, and incompleteness. The page itself becomes a Zen garden: raked sand lines become self-drawing horizontal rules, placed stones become content blocks, and the controlled void between elements carries as much meaning as the elements themselves. The Japanese rock garden is not decoration; it is a technology for the mind. Each stone is placed where the viewer's eye will rest, and where the mind will follow. This landing page uses the same principle. Space is not empty — it is the medium through which meaning travels. The clip-path text reveal is the signature move: words appear as if brushed by an invisible calligrapher, ink spreading across parchment, each character arriving in its proper time. This is not animation for spectacle. It is animation as ritual.

## Colors

The stone and parchment base (#F2EDE8) is a deliberate departure from the dark-mode convention of breakthrough design. Near-white creates its own drama against the ink-black primary (#2C2C2C). It evokes washi paper, raked sand, the blank scroll before the brush touches it. The secondary stone (#8C8478) is the color of garden paths and weathered moss — it recedes, supports, never demands attention. The crimson (#C23B22) is the Zen red of temple gates at dawn, of the hanko seal stamp pressed onto a scroll, of the single camellia flower against snow. It appears rarely, and when it does, it marks something sacred: a call to action, a cursor, a single accent that punctuates the silence. Crimson is never used as background for large areas — only as the decisive mark.

## Typography

Playfair Display carries the heritage and gravitas of a tradition that spans centuries. Its extreme weight contrast (hairline serifs against thick strokes) mirrors the calligrapher's brush — the downstroke heavy with ink, the upstroke barely touching the page. The display-huge scale (11vw) makes "OASIS" into a landscape, not a word. The label-micro (JetBrains Mono, 10px) operates at the opposite extreme — technical, precise, the dimension line on an architectural drawing. This 110x scale contrast is not decoration; it enforces hierarchy with the authority of a stone in a garden. You do not question which element matters. Inter at body size (16px) is the neutral ground — readable, invisible, serving the content without ego. The extreme letter-spacing of label-micro (0.15em) creates the breathing room that Japanese typography demands, where the space between characters is as considered as the characters themselves.

## Layout

The Japanese spatial concept of "ma" governs every decision. Ma is not emptiness — it is the meaningful void, the pause between notes that makes music, the space between stones that makes the garden. Sections are separated by 128px (xxl) or more. The Three Stones section uses deliberate asymmetry: three elements placed not in a grid but as a gardener places stones — each one where the eye naturally rests, with varying intervals between them. Asymmetry here is not chaos; it is the harmony of natural things, where no two pine branches are identical yet the tree is perfectly balanced. Margins are generous beyond Western convention. Content never touches the edges of the viewport. The page breathes.

## Elevation & Depth

Depth comes from paper, not pixels. Shadows are soft, large, diffuse — the shadow of washi paper curling off a desk, not the hard shadow of material design. Stone elements use box-shadows with large spread and low opacity, suggesting physical objects resting on a flat surface under diffused light. The ink-wash SVG background uses layered radial gradients at varying opacities to create the illusion of depth through atmospheric perspective — distant mountains are lighter, closer forms darker, exactly as in a sumi-e painting. There are no hard edges in the background, no sharp boundaries — only the gradual transition from form to void.

## Shapes

Organic imperfection is the rule. Rounded rectangles with slightly different border-radii. Stones that are not quite symmetric. Horizontal rules that draw themselves with slight variation in speed. The crimson cursor is perfectly round (the only perfect shape — the enso circle), but at only 10px it achieves perfection through restraint, not scale. Content blocks have subtle border-radius variations: 2px, 6px, never full-round except for buttons and the cursor. This controlled irregularity prevents the page from feeling manufactured while maintaining the precision that separates design from accident.

## Components

The primary button (crimson, full-round, label-micro typography) is the seal stamp — it marks commitment. The ghost button (transparent, bordered) is the invitation — it offers without demanding. Navigation labels are secondary-toned, uppercase, widely spaced — they exist at the periphery like the frame of a scroll painting. The custom cursor is the smallest in the series (10px), a crimson dot that expands on hover — the enso that breathes. The hamburger menu opens with a vertical brush-stroke reveal, crimson ink spreading downward, before the navigation text appears.

## Do's and Don'ts

**Do:** Use the light background as a feature, not a limitation. Let whitespace carry meaning. Allow text reveals to be slow — the brush does not rush. Place elements asymmetrically with intention. Use crimson as punctuation, not as prose. Make horizontal rules feel like raked garden lines. Let the ink-wash SVG breathe with subtle gradients. Trust the clip-path animation to carry the weight of the first impression.

**Don't:** Fill the page with content — ma requires restraint. Use crimson for more than one major element per section. Create symmetric layouts — the garden has no bilateral symmetry. Animate everything — choose one gesture and execute it with full commitment. Use hard shadows or sharp borders. Place text over the ink-wash SVG where contrast fails. Add decorative elements that do not serve the content. Forget that the parchment background demands dark text with sufficient contrast ratios.
