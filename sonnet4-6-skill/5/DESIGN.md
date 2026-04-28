---
version: alpha
name: Oasis — The Peak
description: Himalayan luxury meditation retreat. Dark alpine void, crisp cool white, aurora teal accent. Ascent as metaphor for transformation.
colors:
  primary: "#F0F2F5"
  secondary: "#4A5568"
  tertiary: "#64CCC5"
  neutral: "#080B10"
  on-tertiary: "#080B10"
  on-neutral: "#F0F2F5"
  mountain-far: "#0D111A"
  mountain-mid: "#111520"
  mountain-near-mid: "#151B27"
  mountain-near: "#1A2133"
typography:
  display-huge:
    fontFamily: DM Serif Display
    fontSize: 13vw
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: -0.03em
  display-large:
    fontFamily: DM Serif Display
    fontSize: 7vw
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.02em
  display-medium:
    fontFamily: DM Serif Display
    fontSize: 5vw
    fontStyle: italic
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1:
    fontFamily: DM Serif Display
    fontSize: 4vw
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  h2:
    fontFamily: DM Serif Display
    fontSize: 9vw
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.03em
  body-md:
    fontFamily: Source Code Pro
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.02em
  label-micro:
    fontFamily: Source Code Pro
    fontSize: 10px
    fontWeight: 500
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
  massive: 20vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  nav-altitude:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 16px
    rounded: "{rounded.none}"
  cursor-hover:
    backgroundColor: "{colors.tertiary}"
    size: 40px
    rounded: "{rounded.none}"
  vista-panel:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.display-large}"
  panel-label:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-micro}"
---

## Overview

The Peak is an ascent. Every design decision encodes the metaphysics of altitude: the progressive stripping away of noise as elevation increases, the expansion of perspective at the summit, the earned silence of thin air. This is not a wellness brand — it is an encounter with something ancient and indifferent to comfort.

The aesthetic is informed by alpine photography, Tibetan thangka color theory, and the modernist architectural language of brutalist stone structures built for permanence. The palette is the night sky above Pangong Lake: a near-black void that makes stars possible, cooled whites that carry the temperature of snowfields, and a single aurora-teal accent that appears only in moments of signal — like light on glacial ice.

**The Signature Move:** A GSAP-pinned horizontal scroll section housing five "vista panels." The user scrolls vertically; the world moves horizontally. Each panel is a chapter of the retreat experience, lit by its own atmosphere, populated by layered CSS mountain silhouettes creating physical depth through parallax. This mechanic literalizes the retreat's central promise: that stillness and movement are not opposites.

**Motion Tokens:**
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle. All element reveals, mountain entrances.
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy. Background color transitions between panels.
- `ease-ascent: power4.out` — for text and image reveals tied to scroll progress.
- `ease-hover: back.out(1.7)` — slight overshoot for cursor and button micro-interactions.
- Duration scale: micro (0.2s), standard (0.8s), cinematic (1.8s+), geological (3s+).

**Cursor:** A cross/plus shape in aurora teal — 16px default, expanding to 40px on interactive elements. Not a circle. The cross evokes the summit marker, the cartographic annotation, the crosshair of high-altitude navigation.

## Colors

The palette is the color memory of a Himalayan night.

**Neutral (`#080B10`)** is a near-black with a faint blue undertone — not void-black, but the sky just before the first star becomes visible. All pages default to this background. It creates the depth that makes white type feel like it's floating in space and teal feel electric by contrast.

**Primary (`#F0F2F5`)** is a slightly cool white — the color of glacial ice in overcast light. Never pure white, which would feel harsh. This is the white of elevation, where the air is too clean for warmth.

**Secondary (`#4A5568`)** is a slate grey for supporting information — coordinates, metadata, secondary labels. It recedes into the background like a far mountain, present but not demanding.

**Tertiary (`#64CCC5`, "Aurora Teal")** is the soul of the system. It appears exclusively where signal must occur: the custom cursor, the primary CTA button, active nav states, altitude indicators, panel labels. Its color temperature is exact — not quite blue, not quite green, like the light that appears on glaciers at dusk. It is never used as a large-area background. Its scarcity is its power. Each appearance is an instruction: *look here, act now.*

**Mountain Depth Layers:** Four dark variations of the neutral — `#0D111A` (far), `#111520` (mid), `#151B27` (near-mid), `#1A2133` (near) — used exclusively for CSS clip-path mountain silhouettes. The progressive lightening of these layers creates perceived atmospheric depth through color temperature, mimicking the way distant mountains appear bluer and darker while near mountains show more contrast.

## Typography

The typographic system encodes altitude through scale. As type grows larger, it becomes less readable in the traditional sense and more architectural — letterforms become landscape elements.

**Display Huge (13vw, DM Serif Display)** exists only once: the word "Oasis" in the hero. At this scale, the letterforms are topography. DM Serif Display is chosen for its wedge serifs and editorial intelligence — it carries the authority of a masthead and the warmth of hand-cut stone lettering.

**Display Large (7vw, DM Serif Display)** is used for section anchors — the major architectural headers that define spatial zones. At 7vw it is still partially architectural, still demanding peripheral attention.

**Display Medium (5vw italic, DM Serif Display)** is the voice of the mountain. Used for the Philosophy section's central statement. Italic DM Serif at this size has a quality of inscription — permanent, deliberate, unhurried.

**H2 (9vw, DM Serif Display)** is used for the CTA section headline "Ascend with us" — the climactic typographic moment of the page.

**Body MD (14px, Source Code Pro)** handles all prose, feature lists, and descriptive text. Source Code Pro's monospaced regularity evokes precision instruments and technical altitude data — the opposite of marketing copy warmth. This is intentional. The mountain does not sell itself.

**Label Micro (10px uppercase, Source Code Pro, 0.14em tracking)** is used for navigation items, button text, panel labels, coordinates, and metadata. At 10px with wide tracking, it reads as a technical readout — altimeter data, GPS coordinates, trail markers. Never marketing language.

**The Gap:** There is no typography token between H1 (4vw) and Body MD (14px). This is the chasm between the geological and the human-scaled. The absence of mid-size type is a design argument: the mountain does not do medium.

## Layout

The layout encodes the experience of being at altitude: vast, exposed, without convenient shelter.

**Borderless Canvas:** No gutters, no container max-widths constraining content. Elements bleed to viewport edges. The hero mountains extend to every corner. The typography floats in the void.

**Scroll as Ascent:** Sections are separated by `massive (20vw)` vertical padding. The user does not scroll through a document — they ascend through spatial zones, each with its own atmosphere. The white space between sections is not empty; it is altitude.

**The Horizontal Interrupt:** The experiences section breaks the vertical ascent with a pinned horizontal scroll — five panels, each `100vw` wide, traversed by scrolling vertically while the world moves sideways. This is the peak: the moment where the axis of movement changes, where forward becomes sideways, where progress feels like drift. It is disorienting by design.

**Asymmetric Composition:** Text anchors change — left-aligned hero title, right-aligned philosophy text, center-aligned testimonial. Navigation labels float at the left edge. Altitude indicators float right. No element occupies the same horizontal register twice.

## Elevation & Depth

Depth is achieved through CSS clip-path layering and GSAP parallax — not shadows.

**Mountain Depth System:** Four CSS clip-path polygon layers simulate atmospheric perspective:
- `mountain-far (z-index: 1)` — smallest peaks, most blue-shifted (`#0D111A`), moves at `0.1x` scroll velocity
- `mountain-mid (z-index: 2)` — `#111520`, moves at `0.25x`
- `mountain-near-mid (z-index: 3)` — `#151B27`, moves at `0.5x`
- `mountain-near (z-index: 4)` — `#1A2133`, highest contrast, moves at `0.8x`

**Z-Axis Layers:**
- `canvas-mountains (z-index: 0–4)` — CSS clip-path silhouette layers
- `content (z-index: 10)` — narrative text, images
- `ui-overlay (z-index: 20)` — navigation bar
- `cursor (z-index: 100)` — custom cross cursor

**Panel Atmosphere:** Each horizontal vista panel has its own slightly different dark background tone, creating a sense of traveling through different light conditions as hours pass at altitude. The tonal shift is subtle — 5–10% luminosity change — to suggest time passing without breaking system coherence.

## Shapes

The shape language is defined by the tension between the geometry of stone and the mathematics of human navigation.

**UI elements** use two shapes only: **perfectly sharp corners (0px)** for containers, data labels, and cards; **full pill shapes (9999px)** for the single primary CTA button. The binary is deliberate — either geological flatness or the organic curve of a water-smoothed stone. Nothing between.

**Mountain Silhouettes** use CSS `clip-path: polygon()` to render jagged, asymmetric peak profiles. No two mountain layer polygons share the same profile. The profiles are drawn to suggest real Himalayan ridgelines — not decorative triangles — with varying peak heights, false summits, and technical-feeling ridge angles.

**The Cursor Cross:** A plus/cross shape built from two thin rectangles intersecting at center. This shape is unique in the vocabulary: it is neither geometric container nor organic form. It is cartographic — the summit marker, the coordinate origin point, the crosshair of deliberate attention.

## Components

**Primary Button (Reserve Your Ascent):** Pill-shaped, Aurora Teal background (`#64CCC5`), near-black text (`#080B10`), Label Micro typography in uppercase. One instance per view maximum. On hover: slight scale-up (`1.04x`) with `back.out(1.7)` easing and a magnetic pull toward the cursor.

**Ghost Button:** Pill-shaped, transparent background, 1px Primary border, Primary text. Used for secondary navigation actions.

**Navigation Bar:** Fixed top, height 64px. Left: "OASIS / LADAKH" in DM Serif Display 16px. Right: altitude indicator "11,562 FT" in Aurora Teal Label Micro + "RESERVE" pill button. The bar has `background: transparent` on load, transitions to `rgba(8, 11, 16, 0.92)` with `backdrop-filter: blur(12px)` on scroll. A 1px Aurora Teal bottom border appears only on scroll, triggered by GSAP when scroll Y > 100px.

**Vista Panel Label:** Aurora Teal, Label Micro, uppercase. Positioned bottom-left of each horizontal panel. Examples: "01 / BASE CAMP", "02 / THE MONASTERY".

**Horizontal Track:** Five panels, each `100vw` wide, arranged in a horizontal flex row inside a pinned container. The entire track width equals `500vw`. GSAP translates the track from `x: 0` to `x: -(400vw)` driven by scroll progress via ScrollTrigger scrub.

**Custom Cursor (Default):** Aurora Teal cross shape, 16×16px total span, 2px line thickness. Follows mouse with `duration: 0.5, ease: power3.out` lag.

**Custom Cursor (Hover):** Expands to 40×40px cross. On hover over text, switches to `mix-blend-mode: difference`. On hover over the CTA button, cross rotates 45° to form an × shape with `back.out(1.7)`.

## Do's and Don'ts

**Do** use Aurora Teal (`#64CCC5`) only for interactive signals. Every appearance is information. Dilution destroys its signal value.

**Do** write copy in the register of the mountain — declarative, unhurried, slightly austere. "The mountain does not hurry. It simply is." The retreat does not chase the guest.

**Do** maintain WCAG AA contrast (4.5:1) for all body and label text. White on near-black easily exceeds this. Verify teal-on-dark combinations — `#64CCC5` on `#080B10` achieves approximately 7.2:1.

**Do** implement the pinned horizontal scroll correctly: `pin: true`, `scrub: 1`, with Lenis `ScrollTrigger.normalizeScroll(true)` to prevent scroll conflicts. Test on both trackpad and mouse wheel.

**Do** define mountain silhouette polygons with real topographic irregularity. Avoid decorative symmetrical triangles — they read as clipart. The profiles should feel like they were traced from a survey map.

**Don't** use Tailwind CSS. Its constraint aesthetics enforce the generic. Every property here must be authored.

**Don't** use standard horizontal navigation. The top bar described is minimal, technical, and non-standard — it reads as instrumentation, not wayfinding.

**Don't** use `transition: all 0.3s ease` anywhere. All motion is GSAP. All timing is intentional.

**Don't** use medium-sized type. The gap between 13vw and 10px is the design. Filler text at 24–48px would collapse the tension.

**Don't** use color for decoration. Every teal element is functional. Every secondary grey is informational. Color serves hierarchy, not aesthetics.

**Don't** animate on mobile without checking `prefers-reduced-motion`. The pinned horizontal scroll degrades to a vertically stacked panel layout on viewports below 768px. Touch devices get simplified CSS transitions only.
