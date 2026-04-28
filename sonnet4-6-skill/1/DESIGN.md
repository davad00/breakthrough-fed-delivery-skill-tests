---
version: alpha
name: Oasis — The Void
description: Luxury meditation retreat. Cosmic void aesthetic. Near-black base, warm gold accent, extreme typographic scale contrast. Particle constellation signature move.
colors:
  primary: "#F0EBE3"
  secondary: "#7A7368"
  tertiary: "#C4A87A"
  neutral: "#050508"
  on-tertiary: "#050508"
  on-neutral: "#F0EBE3"
typography:
  display-huge:
    fontFamily: Cormorant Garamond
    fontSize: 13vw
    fontWeight: 300
    lineHeight: 0.88
    letterSpacing: -0.02em
  display-large:
    fontFamily: Cormorant Garamond
    fontSize: 7vw
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: -0.01em
  display-medium:
    fontFamily: Cormorant Garamond
    fontSize: 5vw
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.01em
  display-quote:
    fontFamily: Cormorant Garamond
    fontSize: 4.5vw
    fontStyle: italic
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0em
  display-cta:
    fontFamily: Cormorant Garamond
    fontSize: 8vw
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: -0.02em
  body-md:
    fontFamily: Cormorant Garamond
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.01em
  label-micro:
    fontFamily: JetBrains Mono
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
    padding: "14px 36px"
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 36px"
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  experience-card:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 32px
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 12px
    rounded: "{rounded.full}"
  cursor-ring:
    backgroundColor: "transparent"
    size: 40px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 48px
    rounded: "{rounded.full}"
---

## Overview

Cosmic void. The Oasis design system inhabits the silence between stars. It is not minimal — it is **vast**. The aesthetic philosophy derives from the experience of standing under the Sedona night sky: an overwhelming, humbling depth that dissolves the ego and leaves only presence.

The emotional register is **sublime awe** — the psychological state described by Kant as encountering something so vast it initially overwhelms, then transforms. The user should feel small in the best possible way. Every design decision amplifies this: the near-black void, the delicate gold accents that read like distant stars, the extreme typographic scale that makes individual words into cosmic objects.

The **Signature Move** is the particle constellation canvas: ~280 warm gold particles drift imperceptibly slowly across the void. When the cursor moves within proximity, particles brighten and draw connecting lines — a private constellation, unique to each visitor's movement. It makes the page feel alive, responsive, and deeply intimate.

**Motion Tokens:**
- `ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` — fast in, long slow settle. Primary ease for all reveals.
- `ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1)` — symmetrical, dreamy. Background and overlay transitions.
- `ease-spring: gsap power4.out` — element entry animations.
- `ease-magnetic: gsap power3.out` — cursor and hover micro-interactions.
- Duration scale: micro (0.2s), standard (0.8s), cinematic (1.6s+).

**Particle System:**
- Count: 280 particles
- Base size: 1–2px, opacity 0.3–0.6
- Drift velocity: 0.05–0.15 px/frame (imperceptibly slow)
- Activation radius: 120px from cursor
- Activated: opacity 1.0, size increases to 3px, warm gold glow
- Connection lines: drawn between activated particles within 160px, opacity 0.4

## Colors

The palette is derived from astrophotography and Sedona's red rock landscapes viewed at midnight.

**Neutral (`#050508`)** is the foundation — an almost-black with the faintest blue undertone, replicating the deep sky at altitude. Pure black would feel manufactured; this reads as infinite and natural. Every page defaults to this background. The entire experience lives inside it.

**Primary (`#F0EBE3`)** is a warm, slightly ivory white — not clinical pure white. It carries the warmth of candlelight and aged paper, evoking ancient wisdom rather than modern technology. Used for all narrative text, headlines, and primary UI labels.

**Secondary (`#7A7368`)** is a warm mid-tone grey, the color of weathered sandstone or undisturbed desert dust. Used for metadata, timestamps, section labels, and supporting copy. Creates depth in the typographic hierarchy without introducing additional hue.

**Tertiary (`#C4A87A`, "Desert Gold")** is the sole accent. Not a bright gold — a warm, earthy gold, the color of the last light on sandstone, or a flame seen through amber. It is used exclusively for: the custom cursor core, the particle system, primary call-to-action elements, hover states, and single typographic highlights. Its restraint is its power. Every appearance signals something important.

## Typography

The typographic strategy operates on a single insight: **Cormorant Garamond at extreme scale becomes architecture**. At 13vw, individual letters are geological formations. At 10px monospace, text becomes technical data. The vast space between these two extremes is intentional — it is the silence between notes that makes music possible.

**Display Huge (13vw, Cormorant Garamond Light)** — the word "Oasis" in the hero. At this scale it ceases to be a word and becomes a shape, an environment. Set in weight 300 to maximize the contrast between the hairline strokes and the thick ones — a quality unique to classical serif faces.

**Display Large (7vw, Cormorant Garamond Light)** — menu overlay items. Large enough that each item commands the full screen as it slides in. The user reads one word at a time, giving each menu destination gravity.

**Display Medium (5vw, Cormorant Garamond Regular)** — section headings. "The art of sacred stillness" at this size creates a visual event, not just a heading.

**Display Quote (4.5vw, Cormorant Garamond Light Italic)** — the centered quote section. Italics at this scale feel like a spoken thought. The slant adds movement to an otherwise still layout.

**Display CTA (8vw, Cormorant Garamond Light)** — "Reserve your stillness." A command large enough to feel inevitable.

**Body MD (18px, Cormorant Garamond Regular)** — narrative paragraphs. Cormorant Garamond is used even for body copy (rather than Inter) because it maintains the warmth and classicism of the system. At 18px with 1.75 line-height it is supremely legible.

**Label Micro (10px, JetBrains Mono Medium)** — all technical data: coordinates, altitude, dates, prices, UI labels, button text, navigation. Always uppercase, generous tracking (0.14em). Evokes precision instruments, astronomical readouts, the GPS coordinates burned into the landscape.

**The Gap:** No typography exists between Body MD (18px) and Display Medium (5vw). This is intentional — the visual leap creates the tension that makes the layout feel designed rather than generated.

## Layout

The layout abandons the standard grid entirely. Content exists on a borderless canvas where elements breathe at viewport scale.

**Borderless Canvas:** No gutters, no max-width containers constraining the flow. Content bleeds to edges. Sections use `padding: 0 8vw` for breathing room, but never a centered `max-width: 1200px` container.

**Scroll as Descent:** The metaphor is vertical — the user *descends* from the noise of the surface into the stillness of the void. Section spacing is vast (`20vw`) to allow each section to exist in its own silence before the next arrives. The "SCROLL TO DESCEND" label on the hero explicitly states this metaphor.

**Hero Bottom-Alignment:** The hero text is pushed to the bottom of the 100vh canvas (flex column, justify-content: flex-end, padding-bottom: 80px). This leaves the upper canvas for the particle constellation — the visual silence that the text then interrupts from below.

**Asymmetric Placement:** The vertical "SCROLL TO DESCEND" label is positioned at the right edge, rotated 90 degrees. The coordinates appear at lower-left of the philosophy section. The section number "001" is set in small monospace above the large heading — a counter-intuitive hierarchy that rewards attention.

## Elevation & Depth

Depth is achieved through the particle system, typography scale, and motion — never through shadows or borders.

**Z-Axis Layers:**
- `canvas-particle (z-index: 0)` — the WebGL/Canvas2D particle void behind everything
- `content (z-index: 10)` — all sections, narrative text, cards
- `ui-overlay (z-index: 20)` — the menu overlay when active
- `ui-persistent (z-index: 30)` — the navigation bar (always visible)
- `cursor (z-index: 100)` — the custom cursor

**Parallax Philosophy:** Sections enter the viewport independently via GSAP ScrollTrigger. No CSS parallax — GSAP-controlled transforms only. Each reveal has a distinct entry direction: text slides up, images fade in from slight scale reduction, cards enter with staggered delay.

**Flat UI Against Deep Canvas:** All UI elements are perfectly flat — no drop shadows, no borders (save one exception: the ghost button uses a 1px warm white border). The absence of depth in the UI layer makes the particle canvas feel physically behind it, in a different spatial plane.

## Shapes

The shape vocabulary is a binary of two extremes: **razor-sharp geometry** and **infinite roundness**. No intermediate states.

UI elements use either `0px` (sharp, architectural — cards, section dividers, the canvas itself) or `9999px` (pill-shaped — buttons, the cursor). This binary maps to the experience's duality: the ancient, angular red rock formations of Sedona against the circular, infinite nature of the void and the self.

The particle system adds organic, continuously shifting forms — the connections between particles form irregular constellations, never the same shape twice. The contrast between the rigid UI and the living, organic particle system creates the defining spatial tension.

## Components

**Primary Button ("Inquire Now"):** Pill-shaped. Desert Gold (`#C4A87A`) background, near-black text, Label Micro typography in uppercase. Maximum one visible at a time. The only element on the page where gold becomes a background — used exclusively for the highest-priority action.

**Ghost Button ("View Availability"):** Pill-shaped. Transparent background, warm white text, 1px warm white border. Used for the secondary CTA alongside the primary button.

**Navigation Label ("MENU"):** Top-right. Label Micro, secondary grey color. On click, triggers the full-screen menu overlay. A single word — the most restrained possible navigation.

**Experience Card:** No background, no border. Gold bottom border (1px) appears on hover with GSAP animation. The card number in Label Micro top-left, experience name in Display Medium, detail line (duration, price) in Label Micro at bottom. Hover state: the gold border grows from left to right over 0.6s.

**Custom Cursor (Default):** A 12px Desert Gold filled circle + a 40px transparent ring with 1px gold border. The ring follows the cursor with a 0.6s power3.out lag, creating separation and a physical trailing sensation.

**Custom Cursor (Hover):** On hover over interactive elements, the ring expands to 48px and the core dot fades. On hover over text blocks, the ring switches to `mix-blend-mode: difference`.

## Do's and Don'ts

**Do** use Desert Gold (`#C4A87A`) exclusively for the cursor, particles, primary button, card hover borders, and isolated typographic highlights. Its scarcity is its signal — every appearance means something.

**Do** maintain WCAG AA contrast ratios. Warm white `#F0EBE3` on near-black `#050508` achieves 19.6:1 — far exceeding requirements. Gold `#C4A87A` on near-black achieves 6.8:1 — passes for large text.

**Do** define the particle count dynamically based on viewport area to ensure consistent visual density on all screen sizes.

**Do** use `overflow: hidden` on text containers and animate the inner element upward from `y: 100%` for the hero title reveal — this creates the "sliding up from below the ground" entrance.

**Don't** use Tailwind CSS. Write custom CSS in `<style>` tags. The visual precision required by this system cannot be achieved through utility classes.

**Don't** use any typography between 18px and 5vw. The gap is architectural. Anything in between would collapse the tension.

**Don't** use `transition: all 0.3s ease` anywhere. All motion uses GSAP with physics-based easing. CSS transitions may only be used for the simplest opacity changes where GSAP adds no value.

**Don't** use a horizontal navigation bar. The single "MENU" label triggers a full-screen takeover — the only navigation that matches the scale of the experience.

**Don't** show the particle canvas on mobile (`< 768px`). Reduce to a static starfield background image or CSS-animated subtle gradient. Complex canvas animations on mobile degrade the experience.
