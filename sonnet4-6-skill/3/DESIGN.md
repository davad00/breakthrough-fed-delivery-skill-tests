---
version: alpha
name: Oasis — The Grove
description: Luxury forest meditation retreat. Ancient, grounded, cinematic. Dark forest base with sage palette and literary serif typography.
colors:
  primary: "#D4E6C3"
  secondary: "#4A6352"
  tertiary: "#7FBC8C"
  neutral: "#060E09"
  on-tertiary: "#060E09"
  on-neutral: "#D4E6C3"
typography:
  display-huge:
    fontFamily: EB Garamond
    fontSize: 12vw
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: -0.02em
  display-large:
    fontFamily: EB Garamond
    fontSize: 7vw
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.02em
  display-italic:
    fontFamily: EB Garamond
    fontSize: 5vw
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1:
    fontFamily: EB Garamond
    fontSize: 3.5vw
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.015em
  body-md:
    fontFamily: Courier Prime
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Courier Prime
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.14em
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
  massive: 18vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
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
  cursor-drag:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    content: "↔"
    size: 48px
    rounded: "{rounded.full}"
  panel-dark:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  panel-light:
    backgroundColor: "#0E1E13"
    textColor: "{colors.primary}"
---

## Overview

Ancient, grounded, and deeply alive. The Oasis design system channels the experience of stepping into old-growth forest: a profound settling of the nervous system, a world where time moves at the pace of seasons. Every visual decision serves one emotional truth — the deep exhale of arrival.

The aesthetic draws from literary tradition (EB Garamond's lineage stretches to 16th-century typefaces) and the physical precision of typewriter craft (Courier Prime). Large type functions as architecture, the way a cathedral canopy functions — not merely to communicate but to create a spatial experience. The extreme scale contrast mirrors the forest itself: ancient towering cedars and the intimate silence between them.

The palette is the Kyoto forest at dusk. Deep forest black (#060E09), sage white (#D4E6C3) that catches filtered light, muted forest green (#4A6352) for depth, and bright sage (#7FBC8C) as the single vivid signal — the color of new growth catching sun.

**Motion Tokens:**
- `ease-forest: cubic-bezier(0.16, 1, 0.3, 1)` — unhurried entry, long slow settle. Like branches releasing tension.
- `ease-breath: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, meditative. For background and color transitions.
- `ease-spring: gsap power4.out` — for hover micro-interactions.
- `ease-drag: none (scrub: 1)` — direct, physical, tactile.
- Duration scale: micro (0.2s), standard (0.8s), cinematic (1.8s+).

**Signature Move — The Horizontal Journey:**
The defining interaction of this site is a full-viewport horizontal drag carousel. Five "chapters" of the Oasis story are laid out side-by-side in a draggable container. The user reaches in with their cursor (or finger) and pulls the story forward. The cursor transforms to a bidirectional arrow (↔) on hover, signaling the invitation. This interaction is a metaphor: you must move through the grove to experience it. It cannot be seen from one vantage point.

## Colors

The palette is rooted in the Kyoto forest at last light, just as the mist descends.

**Neutral (`#060E09`)** is not pure black but a deeply saturated near-black green — the color of standing inside old-growth forest at dusk. It carries the weight and silence of the space. All pages default to this background. The slight green undertone ensures warmth even at maximum darkness.

**Primary (`#D4E6C3`)** is sage white — the color of filtered forest light on pale lichen, or morning mist lifting from cedar branches. It is softer than pure white and kinder to the eye, evoking organic materials rather than digital screens. Used for all primary text, headlines, and primary narrative content.

**Secondary (`#4A6352`)** is deep forest green — the shadow cast by a dense cedar grove. It is used for supporting text, dividers, metadata, and secondary labels. It creates hierarchy within the dark palette without introducing contrast that disturbs the atmosphere.

**Tertiary (`#7FBC8C`)** is bright sage — the electric quality of new leaves catching sunlight, the vivid green of moss after rain. It is the sole driver of interaction: the custom cursor, the primary CTA button, active states, and critical highlights. Its scarcity amplifies its signal value. When this color appears, the user should feel an invitation.

## Typography

The typographic strategy is built on the tension between literary antiquity and typewriter precision.

**Display Huge (12vw, EB Garamond Regular)** is used for the primary hero title "Oasis" — a single word that becomes a landscape. At this scale, letterforms function as architecture. The thin hairline serifs of EB Garamond at maximum size are startling — delicate and enormous simultaneously.

**Display Large (7vw, EB Garamond Regular)** bridges architectural scale and legibility. Used for the Philosophy section's central statement and major section moments where the word itself must carry atmospheric weight.

**Display Italic (5vw, EB Garamond Italic)** is used for lyrical, poetic statements — "The grove remembers", "The forest is the oldest teacher". The italic cut of EB Garamond is among the most beautiful in the serif canon: flowing, calligraphic, evoking handwritten manuscripts.

**H1 (3.5vw, EB Garamond Medium)** provides the panel headings in the horizontal journey. Large enough to command, small enough to read.

**Body MD (15px, Courier Prime Regular)** provides all narrative paragraph text. Courier Prime's monospaced precision contrasts sharply with the fluid calligraphy of EB Garamond. This is intentional: the body copy feels like retreat notes, field observations, precise documentation of an ineffable experience.

**Label Micro (10px, Courier Prime Regular)** is used for all navigation labels, button text, coordinates, statistics, and UI metadata. UPPERCASE with 0.14em letter-spacing. The precision of a field logbook. The distance between 12vw display type and 10px micro-copy is the design — that gulf is felt as physical space, like the distance from the canopy to the forest floor.

## Layout

The layout philosophy is derived from the spatial logic of a forest path: you move forward, and the world opens. You cannot take it all in from one position.

**Borderless Canvas:** Content extends to all four viewport edges. No standard gutters constrain the layout. Elements bleed, overlap, and occupy unexpected positions.

**Three-Act Structure:** The page is organized as a narrative arc — Arrival (Hero), Journey (Horizontal Panels), Return (CTA). This is the structure of the retreat experience itself. The horizontal drag section is the narrative core; everything before and after it exists to frame that journey.

**Scroll as Approach:** The vertical sections (hero, philosophy, CTA) use scroll-driven reveals — text emerging from below, opacity lifting — evoking the way the forest gradually becomes visible as morning fog clears.

**Journey as Horizontal Axis:** The five horizontal panels are the one place where the user moves laterally. This perpendicular shift in movement direction creates a conceptual break — a portal into a different kind of attention.

**Asymmetric Composition:** Panel headings, hero layout split (60/40), tilted CTA text (-2deg) — all create visual tension that resists passivity. The eye is never able to rest in a "complete" balanced composition; it is always drawn forward.

**Vast Spacing:** Section spacing is `massive (18vw)` between major narrative moments, allowing the content to breathe like the silence between breaths in meditation practice.

## Elevation & Depth

Depth is created through typography scale, darkness gradients, and the physical sensation of the drag interaction.

**Z-Axis Layers:**
- `background (z-index: 0)` — CSS particle field, subtle breathing dots
- `content (z-index: 10)` — all narrative text, images, panel content
- `drag-container (z-index: 15)` — the horizontal journey section, above content flow
- `ui-overlay (z-index: 20)` — navigation, floating RESERVE button
- `cursor (z-index: 100)` — custom cursor, always topmost

**Particle Field (Hero Background):** Pure CSS keyframe animations drive 40 tiny dots (2–4px diameter) that fade in and out at varying speeds (6s–18s) and positions across the hero section. No canvas. No JavaScript. The effect reads as deep, slow-breathing mist through a dark canopy. Will-change is not applied (elements too small to warrant GPU promotion).

**The Drag Plane:** The horizontal panels occupy a special perceptual layer. By switching cursor behavior and requiring active input, the user is made conscious of their physical interaction with the page — a hand-mind connection that mirrors the bodily awareness cultivated in meditation. The panels do not scroll; they are dragged. The distinction is significant.

**Parallax Factors:** Hero text and subtitle at different vertical scroll rates (text 0.85x, subtitle 0.7x) create subtle Z-separation as the user scrolls away from the hero.

**Floating RESERVE Button:** Appears at `z-index: 20`, bottom-right, after 60% scroll progress. Materializes with a 0.8s power4.out animation.

## Shapes

The shape language is defined by a tension between the organic (nature, living things) and the geometric (precision, intention).

**Hard Edges (0px):** The horizontal drag panels use zero border radius — strict rectangular frames. They function like glass panels in a forest pavilion: perfect geometry within organic chaos.

**Pill Forms (9999px):** All interactive buttons use fully pill-shaped borders. This contrast — the strictness of the panel frames versus the soft invitation of the buttons — creates a visual grammar: panels contain, buttons invite.

**No intermediate radii.** There are no 4px, 8px, or 16px border radii anywhere in the UI. The binary of 0px and 9999px is maintained throughout.

**Organic in Text:** The calligraphic quality of EB Garamond's italic cut introduces the only "organic" form in the UI — curves that are not controlled by CSS border-radius but by the centuries-old conventions of letterform design.

## Components

**Primary Button (RESERVE / BEGIN ↓):** Pill-shaped, #7FBC8C background, #060E09 text, Courier Prime 10px UPPERCASE. Used for the single most important call to action. The floating RESERVE button appears only after significant scroll engagement, rewarding exploration.

**Ghost Button:** Pill-shaped, transparent background, #D4E6C3 text, 1px #D4E6C3 border. Used for secondary actions and navigation.

**Navigation:** Single-line. Left: "OASIS — KYOTO" in Label Micro. Right: "BEGIN ↓" pill button in tertiary green. No multi-item menu. Navigation is intentionally stripped to its minimum — the retreat does not need to explain itself at the threshold.

**Custom Cursor (Default):** A 10px dot in #7FBC8C. Follows the mouse with 0.6s power3.out lag, creating a physical trailing sensation. The lag is tuned to feel like moving through dense air — present but unhurried.

**Custom Cursor (Hover):** Expands to 40px on hover over interactive elements. On hover over text, switches to `mix-blend-mode: difference`.

**Custom Cursor (Drag Zone):** On entering the horizontal journey container, the cursor transforms to display the ↔ symbol, signaling the drag interaction. Returns to default on exit.

**Horizontal Panel:** Each of 5 panels occupies exactly 100vw × 100vh. Panels 1, 3, 5 use the dark forest background (#060E09). Panels 2, 4 use a slightly lighter forest tone (#0E1E13). Each panel contains: a chapter number (Courier Prime, Label Micro, top-left), a large chapter title (EB Garamond, Display Large), and a body paragraph (Courier Prime, Body MD, max-width 520px).

**Floating RESERVE Button:** Fixed position, bottom-right (40px from each edge). Hidden initially, appears after 60% scroll depth with a slide-up animation.

## Do's and Don'ts

**Do** treat EB Garamond as architecture, not decoration. At 12vw, the title "Oasis" should feel like the forest's name carved into stone, not text on a page.

**Do** maintain the binary shape language: 0px or 9999px, never in between. The restraint is the design.

**Do** implement the horizontal drag with GSAP Draggable. The physics of snap-to-panel and the momentum when releasing a throw should feel natural and satisfying.

**Do** wrap all GSAP animations in `(prefers-reduced-motion: reduce)` checks. On mobile and reduced-motion devices, present panels stacked vertically with no drag.

**Do** keep the floating RESERVE button earned — it should only appear after genuine scroll engagement (60%+ of page height).

**Don't** use Tailwind CSS or any utility framework. Every pixel of this design requires custom CSS.

**Don't** use any text size between H1 (3.5vw) and Body MD (15px). The gap is the breathing room. Medium-sized type in this context would feel like clutter.

**Don't** animate with CSS `transition`. Every motion uses GSAP. The difference is physical — CSS transitions feel mechanical; GSAP animations feel alive.

**Don't** use more than one CTA at a time. At any given scroll position, there is precisely one invitation extended to the user. The scarcity of action creates the feeling of ceremony.

**Don't** use drop shadows, gradients, or borders on UI elements. Depth comes from scale and motion, not from skeuomorphic effects.
