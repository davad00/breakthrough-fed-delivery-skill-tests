---
version: alpha
name: Oasis Celestial
description: Cosmic, celestial meditation retreat. Deep indigo base, rose gold accent, orbiting WebGL sphere, radial navigation, star-field atmosphere.
colors:
  primary: "#F0E6DC"
  secondary: "#6B5D8A"
  tertiary: "#D4A088"
  neutral: "#0A0A1A"
  on-tertiary: "#0A0A1A"
  on-neutral: "#F0E6DC"
typography:
  display-huge:
    fontFamily: Space Grotesk
    fontSize: 12vw
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: -0.04em
  display-large:
    fontFamily: Space Grotesk
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.93
    letterSpacing: -0.03em
  h1:
    fontFamily: Space Grotesk
    fontSize: 4vw
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

Oasis Celestial is a meditation retreat experience rooted in cosmic consciousness. The night sky is the ultimate meditation space — vast, silent, filled with distant light that has traveled for millions of years to reach this moment. The orbiting sphere is both planet and mandala, a celestial body that revolves around the self just as the self revolves around the infinite. Every element on the page exists in orbital relationship to every other, creating a gravitational design system where content orbits focal points the way stars orbit galactic centers. The experience should feel like floating in deep space — weightless, quiet, and impossibly vast.

## Colors

The deep indigo #0A0A1A is the cosmic void — not black, but the color of space between stars, holding just enough blue to suggest atmosphere and depth. The rose gold #D4A088 is celestial warmth — the color of nebulae, of dawn light filtered through cosmic dust, of the soft glow that surrounds distant suns. It is the only warm tone in an otherwise cold universe, drawing the eye like a campfire in the void. The primary #F0E6DC is warm celestial white — starlight rather than sunlight, carrying the slight warmth of ancient photons. The secondary #6B5D8A is nebula purple — the color of interstellar gas clouds, of the space between knowing and not-knowing, the transition state where meditation deepens.

## Typography

Space Grotesk is the display typeface, chosen for the precision of astronomical instruments. Its geometric construction evokes the clean lines of telescopes and orreries, while its slightly unconventional character shapes suggest that this is a space where rules bend. The extreme scale contrast — 12vw hero text against 10px labels — mirrors the cosmic scale contrast between a star and a pixel of starlight. JetBrains Mono for labels and technical readouts creates an observatory-instrument aesthetic, as though the retreat's details are being transmitted from a deep-space probe. Inter for body text provides the warm human counterpoint — the voice of the meditator amid the instruments.

## Layout

Orbital layout. Elements revolve around central focal points. The hero sphere is the gravitational center of the entire page, and all content arranges itself in relation to it. Radial geometry replaces the traditional grid — sections arc and orbit rather than stack. The three meditation paths are arranged in a subtle orbital arc, not a row. The radial navigation is the purest expression of this principle: a circle of options expanding from a single point, like a constellation materializing from nothing. Generous spacing (20vw massive) creates the emptiness of space between content elements, allowing each section to feel like its own celestial body — isolated, complete, commanding attention.

## Elevation & Depth

Three depth layers create cosmic parallax. Stars exist at infinite z — the far background, untouchable, eternal. Content floats at atmospheric z — the middle ground where text and images drift like nebulas. UI elements sit at surface z — the closest layer, where navigation and buttons exist as the observer's instruments. The WebGL sphere bridges all three layers — its glow bleeds into the star field, its surface detail occupies the atmospheric zone, and its interactive response brings it to the surface. The grain texture overlay sits between atmospheric and surface, adding analog warmth to the digital cosmos.

## Shapes

Celestial bodies — circles, arcs, orbital paths. Perfect circles contrast with the organic randomness of the star field. The sphere is the primary shape, repeated at every scale from the hero planet to the orbiting dots around each meditation path icon to the radial navigation itself. Arcs and partial circles suggest orbital paths without closing them — the journey is ongoing, never complete. No hard edges, no rectangles with sharp corners. Even the cards and content blocks use subtle rounding to suggest they are carved from something spherical, something celestial.

## Components

**Radial Navigation (Signature Component):** A circular menu that expands from a central point like a constellation materializing in the sky. Five navigation items are positioned in a circle (72 degrees apart) around a central trigger button. When activated, GSAP animates each item from scale:0 and opacity:0 at the center to its calculated orbital position using translateX and translateY derived from trigonometric placement. The items orbit outward with staggered timing, creating a fan-out effect. Each item has a small orbiting dot that traces its perimeter. Closing collapses them back to the singularity. On mobile, this degrades to a vertical overlay menu with slide-in items — the constellation flattened into a column.

**WebGL Orbiting Sphere:** A rose-gold glowing sphere rendered with custom vertex and fragment shaders. A ring/torus orbits around it on a tilted plane. The sphere rotates slowly on its Y axis and responds to mouse movement with subtle tilt on X/Y axes. During the pinned scroll section, the camera approaches along the Z axis, creating the sensation of falling into the sphere — into the mandala, into the self. Fallback on mobile is a CSS radial gradient sphere with box-shadow glow and a rotating ring using CSS transform.

**Star Field:** Generated via JavaScript — 200 small absolute-positioned divs with randomized coordinates, sizes (1-3px), and animation delays. CSS twinkle animation cycles opacity between 0.1 and 1 with varying durations (3-8s). This creates the infinite-depth background that makes the entire page feel like floating in space.

**Custom Cursor:** A 12px rose gold circle that follows the mouse with a slight lag (lerp 0.15). On hovering interactive elements, it expands to 48px and shifts to the primary color. On data-magnetic elements, it pulls toward the element's center. On mobile, the cursor is hidden entirely.

## Do's

- Do use circular and orbital layouts — content should feel like it's in gravitational relationship to focal points
- Do maintain vast spacing — the emptiness between elements is the space where meditation happens
- Do let the rose gold accent carry emotional weight — it appears rarely and precisely, like a distant star
- Do use the label-micro typography for technical retreat details — it grounds the cosmic in the precise
- Do animate orbital paths — dots tracing circles around icons, the nav expanding radially, the sphere rotating
- Do create depth through the three z-layers — stars behind everything, content in the middle, UI in front
- Do make the WebGL sphere feel alive — it should breathe, respond, and pull the viewer in

## Don'ts

- Don't use rectangular grids — if content can be arranged in an arc or orbit, it must be
- Don't introduce warm colors beyond the rose gold accent — the warmth must be earned, not diluted
- Don't add decorative elements that don't suggest cosmic or orbital themes
- Don't use standard hamburger navigation — the radial menu is the signature interaction and must be preserved
- Don't let the star field compete with foreground content — stars are subtle, content is luminous
- Don't ignore the grain texture — without it, the digital cosmos feels too clean, too artificial
- Don't place text over the WebGL sphere without ensuring contrast — the glow can make light text invisible
