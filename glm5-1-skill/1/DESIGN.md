---
version: alpha
name: Oasis Ethereal Void
description: Cinematic, immersive meditation retreat landing page. Near-black base, electric lime accent, extreme typographic scale contrast, WebGL particle orb hero.
colors:
  primary: "#FFFFFF"
  secondary: "#6B6B6B"
  tertiary: "#D2FF00"
  neutral: "#0A0A0A"
  on-tertiary: "#000000"
  on-neutral: "#FFFFFF"
typography:
  display-huge:
    fontFamily: Space Grotesk
    fontSize: 12vw
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.04em
  display-large:
    fontFamily: Space Grotesk
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.95
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

Oasis Ethereal Void is the digital threshold of a luxury meditation retreat — a page that does not describe stillness but enacts it. The user enters a near-black void where a pulsating particle orb floats at the center, representing the meditative mind in its purest state: luminous, self-contained, alive with quiet energy. The orb is the signature move. It breathes with the user's cursor, responding to presence like a living thing sensing proximity. As the scroll advances, the orb dissolves — particles drifting outward into the void — and from its dispersal, language emerges. This is not a website. It is a guided dissolution.

The emotional register is monastic luxury: the silence of a raked gravel garden at dawn, the precision of a single candle flame in a dark room, the electric jolt of sudden clarity after hours of stillness. Electric lime (#D2FF00) is that jolt. It appears only at moments of awakening — the cursor, the primary action, the accent that severs the darkness like a monk's bell cutting through silence.

Motion Tokens:
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle. All element reveals.
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy. Background transitions.
- `ease-spring: gsap power4.out with slight overshoot` — hover micro-interactions.
- Duration scale: micro (0.2s), standard (0.6s), cinematic (1.5s+).

## Colors

The palette is a meditation on absence and presence.

**Neutral (#0A0A0A)** is the void — not the flat emptiness of pure black (#000000) but a void with depth, a darkness that recedes. It creates the spatial depth necessary for the particle orb to feel like it exists in real three-dimensional space. Every section breathes against this base.

**Primary (#FFFFFF)** is clarity. It carries all narrative text: the philosophy, the experience descriptions, the retreat details. White on near-black achieves a contrast ratio of 17.4:1, far exceeding WCAG AAA requirements. This is not merely accessible — it is luminous.

**Secondary (#6B6B6B)** is the sound of a single voice in a large room. It handles metadata, labels, navigation items, and all information that supports but does not drive the narrative. At 5.56:1 contrast against #0A0A0A, it exceeds WCAG AA for both normal and large text.

**Tertiary (#D2FF00, Electric Lime)** is awakening. It is used exclusively for: the custom cursor, the primary call-to-action button, active or highlighted navigation states, and moments of typographic emphasis that signal a shift in consciousness. It must never appear as a background for large areas. It must never be used decoratively. Its scarcity is its power — every instance of Electric Lime is a bell rung in silence, and a bell rung too often becomes noise.

Accent restriction rules:
- Maximum one Electric Lime element visible per viewport
- Never adjacent to another lime element
- Never used as body text color
- Never used as a section background

## Typography

The typographic system is built on a single architectural principle: **extreme scale contrast creates the visual equivalent of a deep breath**. The eye moves from the vastness of display type to the intimacy of micro-copy like a mind moving between expansion and focus.

**Display Huge (12vw, Space Grotesk 700)** is architecture. At this scale, "OASIS" is not a word — it is a gateway. The letterforms function as shapes, their counter-spaces becoming windows into the void behind. The -0.04em letter-spacing tightens the word into a monolithic block. The 0.9 line-height collapses vertical space, making stacked display text feel compressed and powerful.

**Display Large (7vw, Space Grotesk 600)** carries philosophical statements. It is large enough to dominate a section but small enough to remain readable as language. The lighter weight (600 vs 700) and slightly looser spacing (-0.03em) create a breathier, more contemplative register.

**H1 (4vw, Space Grotesk 600)** is the boundary between architecture and reading. Used for sub-section headings where comprehension matters as much as visual impact.

**Body MD (16px, Inter 400)** is the voice of the retreat — unhurried, clear, human. Inter is chosen for its exceptional legibility at small sizes and its neutral, warm character. The 1.65 line-height provides generous vertical rhythm, allowing each sentence the space it needs to resonate.

**Label Micro (10px, JetBrains Mono 500)** is the precision instrument. All technical data — coordinates, durations, capacities, navigation labels, button text — is set in this token. The monospaced font evokes technical readouts and navigational instruments, creating a deliberate tension with the organic forms of the particle orb. The 0.12em letter-spacing forces the reader to slow down, treating each label as a small meditation in itself.

**The Gap:** There is no typography token between H1 (4vw) and Body MD (16px). This absence is intentional. It forces every typographic decision to choose between architectural scale and intimate legibility. Medium-sized text (24px–48px) is banned because it fills the visual space between the two extremes without committing to either — it is neither dramatic nor comfortable, neither architecture nor reading. The gap is the design.

## Layout

The layout treats the viewport as a borderless canvas through which the user moves by scrolling. There is no grid. There are no standard gutters or margins constraining the placement of elements.

**Borderless Canvas:** Content bleeds to the edges of the viewport. The particle orb is centered but extends beyond its container. Text is positioned asymmetrically, often overlapping other elements or the orb itself.

**Scroll as Narrative:** Vertical spacing is vast (`massive: 20vw`) to allow each section to enter and exit the viewport independently. The user does not scroll to see more content; they scroll to advance a timeline. Each section is a scene in a film — it has an entrance, a presence, and an exit, all choreographed by GSAP ScrollTrigger.

**Asymmetrical Composition:** Experience cards are not aligned in a row. They are placed at varying vertical and horizontal offsets, creating a path the eye must navigate. The retreat details are arranged as a technical readout — a grid of label-value pairs positioned with the precision of a control panel rather than the comfort of a brochure.

**Generous Negative Space:** The void is not empty space to be filled; it is the medium in which content exists. Sections are separated by 20vw of darkness. This is not wasted space — it is the silence between notes that makes music.

## Elevation & Depth

Depth is achieved through the WebGL particle orb and motion, not through drop shadows or borders. The page is a stage with flat UI elements floating in front of a three-dimensional environment.

**Z-Axis Layers:**
- `canvas-3d (z-index: 0)` — the WebGL scene containing the particle orb
- `content (z-index: 10)` — narrative text, experience cards, retreat details
- `ui-overlay (z-index: 20)` — hamburger menu, navigation overlay
- `cursor (z-index: 100)` — the custom cursor element
- `grain (z-index: 999)` — the film grain overlay

**Parallax Factors:** During the signature moment (pinned scroll section), the particle orb expands at 1.0x scroll speed while text emerges at 0.5x, creating a sense that the text is rising from a deeper layer of the void.

**Flat UI on 3D Stage:** All UI elements — buttons, labels, navigation, cards — are perfectly flat. No shadows, no gradients, no depth effects on any interface element. This contrast between the flat, precise UI and the organic, luminous particle orb creates the defining spatial hierarchy: the orb exists in depth, the interface exists on the surface, and the user exists between them.

## Shapes

The shape language is defined by a deliberate tension between two extremes: architectural sharpness and organic fluidity.

**UI elements** use either perfectly sharp corners (`0px`) or fully pill-shaped curves (`9999px`). There are no intermediate border radii. Buttons are pills. Cards are sharp. This binary choice reinforces the precision of the interface layer.

**The Particle Orb** is the counterpoint — a continuously morphing, organic form made of 2,000 individual points that breathe, pulse, and respond to the user's cursor. It is the only organic shape on the page. The contrast between the rigid UI and the fluid orb is the defining visual tension of the Ethereal Void concept.

This tension is not accidental. It mirrors the meditation practice itself: the rigid discipline of technique (sharp corners, monospaced labels, precise positioning) in service of an experience that is ultimately fluid, formless, and beyond structure (the particle orb, the dissolve, the void).

## Components

**Primary Button:** Pill-shaped (`border-radius: 9999px`), Electric Lime background (#D2FF00), black text (#000000), Label Micro typography in uppercase. Used for the single most important call-to-action on any given view: "Begin Your Dissolution." There is at most one primary button visible at any time. Its Electric Lime color makes it impossible to ignore against the void, but its small size (10px type) demands the user approach it deliberately.

**Ghost Button:** Pill-shaped, transparent background, white text with 1px solid white border. Used for secondary actions: "Request Guidance." The border is fragile, almost invisible — a whisper compared to the primary button's shout.

**Navigation Labels:** Transparent background, secondary grey (#6B6B6B) text, Label Micro typography. Navigation items in the full-screen overlay feel like coordinates on a map — "PHILOSOPHY", "EXPERIENCE", "DETAILS", "CONTACT" — each a destination rather than a menu item.

**Custom Cursor (Default):** A 12px Electric Lime circle that follows the mouse with a 0.6s `power3.out` lag. The lag creates a physical, trailing sensation — as if the cursor is moving through water, not across glass. It uses `mix-blend-mode: difference` when over text, inverting the text color to create a visual "cutting through" effect.

**Custom Cursor (Hover):** Expands to 48px on hover over interactive elements. On `[data-magnetic]` elements, the cursor snaps toward the element's center with a magnetic pull effect (0.3 * distance from center), and the element itself shifts slightly toward the cursor, creating a mutual attraction.

## Do's and Don'ts

**Do** use the tertiary color (Electric Lime) exclusively for interactive elements and moments of awakening. Its scarcity is its power — every time it appears, the user should feel a signal.

**Do** maintain WCAG AA contrast ratios (4.5:1) for all readable text. High-end design and accessibility are not in conflict. White (#FFFFFF) on #0A0A0A achieves 17.4:1. Secondary (#6B6B6B) on #0A0A0A achieves 5.56:1. Both exceed AA.

**Do** define the site's "Signature Move" before writing any code. The particle orb that breathes with the cursor and dissolves on scroll is this site's signature move. It must be the first thing implemented and the last thing compromised.

**Do** implement the mobile experience as a separate design. The WebGL orb becomes a CSS gradient orb. Smooth scroll is simplified. The custom cursor is hidden. Touch interactions replace mouse-tracking.

**Don't** use Tailwind CSS. Its utility-first approach enforces a specific aesthetic that is antithetical to this design. Write custom CSS with viewport-relative units and CSS custom properties.

**Don't** use medium-sized text (24px–48px). Force the extreme contrast between massive display type and micro-copy. The gap is the design.

**Don't** use standard CSS `transition: all 0.3s ease`. Every animation must use GSAP with physics-based easing (`power4.out`, `expo.out`, `back.out(1.7)`).

**Don't** use a standard horizontal navigation bar as the primary navigation. The hamburger menu with a full-screen overlay is the minimum acceptable approach. Navigation should feel like opening a door to another room, not selecting from a list.

**Don't** allow more than one Electric Lime element per viewport section. If the cursor is lime, no other lime element should be visible in the same focal area.

**Don't** use `prefers-reduced-motion` as an afterthought. All GSAP animations must be wrapped in a matchMedia check from the first line of implementation. The static fallback must be designed, not defaulted.