---
version: alpha
name: Oasis — The Temple
description: Luxury meditation retreat landing page. Ceremonial, primal, warm. Ancient temple aesthetics with sacred geometry and terracotta fire.
colors:
  primary: "#EDE0CF"
  secondary: "#7A6A58"
  tertiary: "#C25B35"
  neutral: "#0E0806"
  on-tertiary: "#FFFFFF"
  on-neutral: "#EDE0CF"
typography:
  display-huge:
    fontFamily: Playfair Display
    fontSize: 11vw
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: -0.03em
  display-large:
    fontFamily: Playfair Display
    fontSize: 6vw
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.02em
  display-large-italic:
    fontFamily: Playfair Display
    fontSize: 6vw
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1:
    fontFamily: Playfair Display
    fontSize: 8vw
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.025em
  body-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.01em
  label-micro:
    fontFamily: Space Mono
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
    padding: 18px 48px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 18px 48px
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
    backgroundColor: "{colors.tertiary}"
    size: 44px
    rounded: "{rounded.full}"
  testimonial-card:
    backgroundColor: "#16100D"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 64px
---

## Overview

Ceremonial. Primal. Warm with ancient ritual. *Oasis – The Temple* is a luxury meditation retreat set in the sacred landscape of Bali, Indonesia. This design system is built not from the language of modern wellness brands, but from the vocabulary of the ancient world: stone temples, ember light, the geometry of fire and earth.

The aesthetic philosophy draws from Balinese Hindu temple architecture — the layered stone gates, the circular yantra mandalas, the terracotta offerings lit by torchlight. Every interaction echoes this: elements do not appear, they *emerge*. They open like portals, revealing sacred space behind.

The palette abandons the cool minimalism of contemporary wellness. It is warm, earthy, and charged — a near-black so warm it feels like the inside of a temple at dusk, offset by cremation cream and the raw fire of terracotta.

**The Signature Move:** CSS `clip-path: circle()` reveals. Every section opens to the viewer through an expanding circular mask — a portal, a sun, a mandala unfolding. The hero itself is born from this circle, expanding from nothing at load time. This is the one uniquely unreplicable interaction of this experience.

**Motion Tokens:**
- `ease-ceremonial: cubic-bezier(0.16, 1, 0.3, 1)` — the slow, inevitable expand of a circle opening. Use for all clip-path reveal animations.
- `ease-ember: cubic-bezier(0.45, 0, 0.55, 1)` — atmospheric, symmetrical warmth. Use for background and color transitions.
- `ease-breath: power4.out` — the exhalation. Use for text reveal stagger animations.
- `ease-magnetic: back.out(1.7)` — slight spring overshoot. Use for cursor and hover micro-interactions.
- Duration scale: micro (0.2s), standard (0.8s), ceremonial (1.8s+), portal (2.4s for clip-path circle expand).

## Colors

The palette is derived from the Balinese landscape at dusk — the moment before the temple lamps are lit, when everything is amber, shadow, and anticipation.

**Neutral (`#0E0806`)** — "Temple Night." The foundation. A near-black so deep and warm it reads as the inside of an ancient stone chamber. It is not black, which would feel digital and cold. This specific hex carries the warmth of aged volcanic stone. All backgrounds default to this.

**Primary (`#EDE0CF`)** — "Sacred Cream." The color of unbleached linen, of temple offering cloth, of aged palm-leaf manuscripts. Used for all narrative text, headlines, and primary UI elements. It has warmth that pure white entirely lacks.

**Secondary (`#7A6A58`)** — "Stone." A warm mid-grey with brown undertones — the color of weathered temple stone. Used exclusively for secondary information: coordinates, labels, navigation items, metadata. It recedes deliberately, creating typographic hierarchy without introducing new hue.

**Tertiary (`#C25B35`)** — "Ember." Terracotta, the color of Balinese clay offerings and the edge of a flame. The sole driver of interaction and attention. It is used exclusively for: the custom cursor, primary call-to-action buttons, active navigation states, section numbers, and critical accent marks. Extreme scarcity is required — it should appear like fire, suddenly, punctuating darkness.

## Typography

The typographic system is built on the conviction that **a single serif of sufficient gravitas, deployed at extreme scale contrast, is more expressive than any system of multiple typefaces**.

**Playfair Display** is the sole display typeface. It carries the weight of print culture, of illuminated manuscripts, of carved stone — yet it retains a contemporary elegance that does not tip into pastiche. Its high contrast between thick and thin strokes makes it sing at display scale. Its italic cuts are among the most beautiful in the Google Fonts library.

**Space Mono** is used exclusively for technical information, labels, navigation, and UI copy. Its monospaced geometry creates a counterpoint — the precise, measured against the expressive — that evokes both ancient measurement systems and contemporary precision instruments.

**Display Huge (11vw)** — The logo and primary hero word. At this scale, letterforms become architecture. The tight negative leading (0.88) causes descenders and ascenders to almost touch, creating textural density.

**Display Large / Display Large Italic (6vw)** — Section-opening statements. The italic variant is the primary voice of The Temple — it suggests breath, the spoken word, the chant.

**H1 (8vw)** — Used for the final CTA and major declarations. Heavy weight, tightest tracking.

**Body MD (14px, Space Mono)** — All narrative paragraphs. Space Mono at 14px with generous line-height (1.8) creates a deliberate, meditative reading pace. The reader is not rushed.

**Label Micro (10px, Space Mono)** — All coordinates, navigation items, section numbering, metadata. Always uppercase, always with generous letter-spacing (0.14em). Reads like a temple inscription.

**The Gap:** There are intentionally no type tokens between H1 (8vw) and Body MD (14px). The visual chasm between architectural type and intimate body copy is the defining tension of the layout. It cannot be filled.

## Layout

The layout abandons the grid in favor of the **mandala principle** — radial composition, centered hierarchy, expansion from a center point. Content does not march across the page; it radiates.

**The Left Vertical Navigation Strip:** A thin fixed column (64px wide) on the left edge of the viewport. Navigation items are rotated 90 degrees and stacked vertically. The strip itself is almost invisible — dark on dark — emerging only on hover. This is not navigation as wayfinding; it is navigation as ritual boundary.

**Centerline Composition:** All hero content aligns to the vertical centerline. This creates the formal, symmetric quality of a temple facade. Sections then intentionally break from this — asymmetric number-plus-text layouts create rhythm and prevent monotony.

**The Vast Vertical:** Sections are separated by massive vertical space (`18vw`) to allow each section its own temporal moment as it enters through the scroll portal. The user does not scroll to read more; they scroll to open the next portal.

**Content Width:** Narrative text is constrained to 620px maximum for comfortable reading, but display type spans the full viewport.

## Elevation & Depth

Depth is achieved through clip-path geometry and parallax, not shadows or elevation layers.

**Z-Axis Layers:**
- `canvas-decorative (z-index: 0)` — the large CSS terracotta circle/sun behind the hero
- `content (z-index: 10)` — all narrative sections and reveal elements
- `nav-strip (z-index: 30)` — the left vertical navigation strip
- `nav-overlay (z-index: 40)` — the full-screen navigation panel when expanded
- `cursor (z-index: 100)` — the custom cursor element

**The Portal Depth:** When `clip-path: circle()` reveals sections, the expanding circle creates the *perception* of a third dimension — as if the viewer is looking through a circular aperture into a lit chamber beyond. This optical illusion of depth is the primary spatial device.

**Parallax Factors:** The decorative terracotta circle behind the hero moves at `0.15x` scroll speed, creating a sense that it exists behind the content plane.

**No Drop Shadows:** Under no circumstances should box-shadow or text-shadow be used in the main layout. All separation is achieved through contrast and motion.

## Shapes

The shape philosophy is built on two forms: **the perfect circle** and **the sharp edge**. Nothing else.

The circle is the primary sacred geometry. It appears as: the hero reveal portal, the decorative sun element, the cursor, the primary button's pill ends, section number containers, and the clip-path reveal mask for every section. The circle suggests completeness, the mandala, the sun, the portal.

The sharp edge appears as: the left navigation strip boundary, image frames, the testimonial card, horizontal rules. Its presence creates the tension between the sacred (circle) and the architectural (edge) that defines Balinese temple aesthetics.

Intermediate border radii (`8px`, `16px`) do not exist in this system. A shape is either a perfect circle or it has no radius at all. The binary enforces visual discipline.

## Components

**Primary Button ("Begin the Ceremony"):** Pill-shaped, Ember terracotta background, white text, Label Micro typography in uppercase. Maximum one visible at any time. It should feel like accepting an invitation to a ritual.

**Ghost Button:** Pill-shaped, transparent, Sacred Cream border (1px) and text. For secondary actions.

**Navigation Labels (Vertical Strip):** Space Mono 10px, Stone color, rotated -90deg, uppercase. Items: PHILOSOPHY / EXPERIENCES / SANCTUARY / RESERVE. On hover, text shifts to Sacred Cream and a small terracotta dot appears beside it.

**Custom Cursor (Default):** 10px Ember terracotta circle, follows mouse with a 0.6s `power3.out` lag. No border. It trails with physical weight.

**Custom Cursor (Hover over interactive elements):** Expands to 44px. On hover over body text, switches to `mix-blend-mode: difference` creating a light inversion effect.

**Decorative Sun Element:** A CSS-only circle, 60vw × 60vw, positioned at the vertical center of the hero section. Filled with a radial gradient from `#C25B35` at center to `#7A1A00` at edge. No border. It glows like an ember. Positioned absolutely behind all content, z-index 0.

**Testimonial Card:** Full-width card with `#16100D` background (slightly lighter than neutral), 2px terracotta left border, generous 64px padding. The border is the only accent color on the card.

**Section Numbers:** The numerals "01", "02", "03" in Display Large (6vw), Ember terracotta, positioned vertically to the left of experience descriptions.

## Do's and Don'ts

**Do** use `clip-path: circle()` as the singular reveal mechanism for every section. It is the signature. Consistency across all sections creates a ritual rhythm.

**Do** maintain extreme scale contrast. The gap between 11vw display type and 10px micro labels is the visual architecture. Every intermediate size is a compromise that weakens the system.

**Do** treat the terracotta accent as fire — rare, precious, attention-commanding. Every appearance should feel like a flame appearing in darkness.

**Do** implement the `prefers-reduced-motion` check and provide static fallbacks. Sacred stillness is also valid.

**Do** wrap all GSAP animations and Lenis initialization in a `prefersReducedMotion` guard.

**Don't** use Tailwind CSS. Its utility-class approach enforces a cadence antithetical to the ceremonial pace of this design.

**Don't** use `transition: all 0.3s ease`. Every animation must use GSAP with the ceremonial easing tokens above.

**Don't** use pure black (`#000000`) or pure white (`#FFFFFF`) anywhere in the layout. The warmth of the palette is the warmth of the experience.

**Don't** use a standard horizontal navigation bar. The left vertical strip is the only navigation on desktop. It is architectural, not functional.

**Don't** use more than one primary button visible at once. The ember should appear once, at the moment of decision.

**Don't** add medium-sized typography (20px–48px). Force the contrast between monumental and micro. The chasm is the design.
