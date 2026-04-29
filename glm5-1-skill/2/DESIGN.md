---
version: alpha
name: Oasis Desert Mirage
description: Warm, cinematic desert-inspired meditation retreat. Deep sand base, gold accent, editorial serif display type, horizontal scroll narrative.
colors:
  primary: "#F5F0E8"
  secondary: "#8B7355"
  tertiary: "#D4A853"
  neutral: "#1A1410"
  on-tertiary: "#1A1410"
  on-neutral: "#F5F0E8"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 11vw
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: -0.03em
  display-large:
    fontFamily: Playfair Display
    fontSize: 6.5vw
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: -0.02em
  h1:
    fontFamily: Playfair Display
    fontSize: 3.5vw
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.01em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
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
  massive: 22vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 18px 32px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px 32px
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

Warm, immersive, and contemplative. The Desert Mirage design system evokes the experience of standing at the edge of the Sahara at golden hour — when the sand radiates warmth, the horizon shimmers with impossible light, and silence becomes a physical presence. This is not a cold, technological aesthetic. It is heritage, craftsmanship, and the ancient stillness of the desert rendered as a digital experience.

The emotional register is **reverent, slow, and luminous** — the feeling of encountering something sacred and vast. Every element moves as if suspended in heat-haze: slightly delayed, slightly blurred, perpetually drifting. The palette draws from sun-bleached sandstone, terracotta clay, and the molten gold of a desert sunset. The typographic system pairs an editorial serif — Playfair Display — with technical monospaced micro-copy, creating a tension between heritage gravitas and precise intentionality.

The Signature Move is a horizontal scroll section where four desert landscape panels slide across the viewport as the user scrolls vertically. This mimics the experience of scanning the desert horizon — an endless, slow pan across an impossibly wide landscape where each dune reveals a new chapter of the journey.

**Motion Tokens:**
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle. Use for all text reveals and element entrances.
- `ease-heat-haze: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy drift. Use for background transitions, gradient morphs, and atmospheric effects.
- `ease-spring: gsap back.out(1.7)` — slight overshoot for hover micro-interactions on buttons and magnetic elements.
- Duration scale: micro (0.2s), standard (0.6s), cinematic (1.5s+), mirage (3s+ for ambient loops).

## Colors

The palette is rooted in the geology and light of the Sahara at golden hour. It is warm, ancient, and deliberately restrained.

**Neutral (`#1A1410`)** is the foundation — a deep warm black that evokes the desert night, the shadow side of a dune, the interior of a nomad tent. It is not pure black; it carries the warmth of sand even in darkness. All pages default to this background. It creates the depth that makes the gold accent glow like lantern light.

**Primary (`#F5F0E8`)** is warm cream — the color of sun-bleached sand, parchment, and the first light of dawn on a dune crest. Used for all core narrative text and primary UI labels. It provides exceptional legibility against the warm black ground while maintaining the organic warmth of the palette.

**Secondary (`#8B7355`)** is desert stone — the muted terracotta of weathered sandstone, ancient clay walls, and the shadowed portions of a dune at midday. Used for secondary information, metadata, supporting labels, and atmospheric text. It recedes gracefully, creating hierarchy without breaking the warm tonal field.

**Tertiary (`#D4A853`, "Desert Gold")** is the sole driver of interaction and illumination. It evokes molten gold, lantern light, and the shimmer of a mirage. Used exclusively for: the custom cursor, primary call-to-action buttons, active navigation states, the morphing hero gradient orb, and critical typographic highlights. It must never appear as a background for large areas. Its scarcity is its power — like a single lantern in the desert dark.

## Typography

The typography strategy is built on a single principle: **extreme scale contrast between editorial heritage and technical precision creates a tension that feels both ancient and contemporary**.

**Display Huge (11vw, Playfair Display 700)** is used as an architectural, monumental element. At this scale, the serif letterforms evoke inscriptions carved into sandstone — permanent, sacred, and vast. It is used for the hero wordmark "OASIS" and for single-word anchors that punctuate the scroll narrative. The tight line height (0.88) and negative letter-spacing (-0.03em) create a dense, insistent mass that commands the viewport.

**Display Large (6.5vw, Playfair Display 600)** bridges the monumental and the readable. Used for the philosophy statement, panel titles in the horizontal scroll section, and major section headings. The lighter weight (600 vs 700) and slightly more open spacing give it a contemplative quality — like spoken ritual rather than carved inscription.

**H1 (3.5vw, Playfair Display 600)** is the smallest "large" text. Used for sub-section headings and retreat detail labels where readability meets gravitas. It carries the editorial heritage of the display sizes but at a scale that supports longer phrases.

**Body MD (16px, Inter 400)** is used for all narrative paragraphs and descriptive text. Inter is chosen for its exceptional legibility at small sizes and its neutral, modern character — a quiet counterpoint to the expressive serif display type. The generous line height (1.7) creates the breathing room of open desert.

**Label Micro (10px, JetBrains Mono 500)** is used for all technical data, coordinates, UI labels, button text, and metadata. Always uppercase with generous letter-spacing (0.14em). It evokes navigational instruments, cartographic annotations, and the precise language of desert expedition logs — a rational framework for the mystical content.

**The Gap:** There is intentionally no typography token between H1 (3.5vw) and Body MD (16px). This gap is the design. It forces the layout to oscillate between monumental architecture and intimate reading, creating the visual tension that defines the aesthetic.

## Layout

The layout abandons standard grids entirely. Elements are positioned as if placed on an infinite desert plain — no constraining boundaries, no rigid columns, only the relationship between content and the vast warm void.

**Borderless Canvas:** Content bleeds toward the edges of the viewport with generous but asymmetric margins. The warm black background extends infinitely, like the desert floor extending beyond sight.

**Scroll as Narrative:** Vertical spacing is vast (`massive: 22vw`) to allow each section to enter and exit the viewport independently, driven by its own GSAP ScrollTrigger animation. The user does not scroll to see more content; they scroll to advance through the stages of the retreat journey — from arrival, through silence, through sound, to return.

**The Horizontal Scroll:** The signature layout move is a pinned horizontal scroll section where four landscape panels slide across the viewport. This section is given extraordinary vertical space (400vh) to ensure the horizontal pan feels slow, meditative, and physically connected to the user's scroll gesture. On mobile (<768px), this collapses to a vertical stack — the desert narrative is told vertically, like turning the pages of a journal.

**Asymmetrical Composition:** Text blocks are intentionally offset from center, with generous negative space that evokes the emptiness of the desert. Supporting copy sits far from display type — sometimes 30vw away — creating a spatial relationship that mirrors the distance between dunes.

## Elevation & Depth

Depth is achieved through layered CSS gradients and motion, not WebGL. This version is a warm, analog counterpart to a cold digital aesthetic — all depth comes from light, shadow, and atmosphere.

**Z-Axis Layers:** `grain-overlay (z-index: 1)` for the desert sand texture, `gradient-orb (z-index: 2)` for the morphing mirage sun, `content (z-index: 10)` for narrative text and UI, `horizontal-scroll (z-index: 10)` for the pinned panels, `nav-overlay (z-index: 50)` for the fullscreen menu, `cursor (z-index: 100)` for the custom cursor.

**Gradient Depth:** The hero gradient orb uses multiple layered radial-gradients at different sizes and opacities, animated with different periods, creating an organic sense of depth and luminosity — as if looking into a mirage that breathes. Inner layers glow brighter and shift faster; outer layers are dimmer and drift slowly.

**Parallax Factors:** Background grain moves at `0.05x` scroll speed (distant sand), the gradient orb at `0.15x` (mid-distance heat haze), and foreground content at `0.8x` (near), creating a subtle sense of physical depth without 3D rendering.

## Shapes

The shape language is defined by the tension between **organic desert forms** and **architectural precision**.

UI elements use either perfectly sharp corners (`0px`) or fully pill-shaped curves (`9999px`). There are no intermediate border radii. This binary choice mirrors the desert itself: the sharp edge of a dune crest versus the infinite curve of the horizon line.

The gradient orb, by contrast, is a continuously morphing, organic form — a circle that breathes and shifts, never settling into a fixed shape. This is the mirage: the one element that refuses precision, always slightly out of reach, always dissolving upon inspection.

The horizontal scroll panels are themselves architectural — clean rectangular frames that slide past the viewport like panels in a panoramic viewing device. Their rigidity contrasts with the shifting content within them.

## Components

**Primary Button:** Pill-shaped, Desert Gold background, warm black text, Label Micro typography in uppercase. Used for the single most important call to action on any given view. The gold glows against the dark ground like a lantern. There should be at most one primary button visible at any time. Padding is generous (18px 32px) to create a substantial, tactile target.

**Ghost Button:** Pill-shaped, transparent background, warm cream text with a 1px warm cream border. Used for secondary actions — the contemplative alternative to the decisive primary. The border creates a mirage-like frame: present but translucent.

**Navigation Labels:** Transparent background, desert stone text, Label Micro typography. Navigation items should feel like cartographic annotations — precise coordinates marking a location in the journey. Hidden behind a hamburger menu with a full-screen warm overlay that transitions in like the desert dawn.

**Custom Cursor (Default):** A 12px Desert Gold circle that follows the mouse with a `power3.out` lag, creating a trailing, heat-haze sensation. It appears to drift like a distant light in the desert.

**Custom Cursor (Hover):** Expands to 48px on hover over interactive elements. On hover over text, switches to `mix-blend-mode: difference` to create a visual inversion effect — like the optical distortion of a heat mirage. On `[data-magnetic]` elements, the cursor and element pull toward each other within a 24px radius.

## Do's and Don'ts

**Do** use the tertiary color (Desert Gold) exclusively for interactive elements and the hero gradient orb. Its scarcity is its power — every time it appears, the user should feel warmth and invitation, like a lantern in the desert dark.

**Do** maintain WCAG AA contrast ratios (4.5:1) for all readable text against the warm black background. High-end design and accessibility are not in conflict. The warm cream (#F5F0E8) at 12.6:1 and the desert gold (#D4A853) at 7.2:1 both exceed requirements.

**Do** define the site's "Signature Move" before writing any code. The horizontal scroll is not decoration — it is the narrative spine of the entire experience, mimicking the endless desert horizon.

**Do** use `prefers-reduced-motion` to provide static fallbacks for all animations. The desert is equally beautiful in stillness.

**Don't** use Tailwind CSS. Its utility-first approach enforces a specific aesthetic that is antithetical to the organic, heritage quality of Desert Mirage. Write custom CSS.

**Don't** use medium-sized text (24px–48px). Force the extreme contrast between monumental serif display type and micro monospaced copy. The gap is the design.

**Don't** use standard CSS `transition: all 0.3s ease`. Every animation must use GSAP with physics-based easing that feels like natural motion — heat rising, sand settling, light fading.

**Don't** use a standard horizontal navigation bar. Hide navigation behind the hamburger menu. The desert demands undivided attention; navigation should only appear when summoned.

**Don't** use cool or blue tones anywhere in the palette. The Desert Mirage is entirely warm — even the shadows carry warmth. Cool tones would shatter the atmospheric illusion.
