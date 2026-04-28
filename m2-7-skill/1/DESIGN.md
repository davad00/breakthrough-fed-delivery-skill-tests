# Oasis Landing Page — Version 1: Cinematic Void

## Concept & Vision

A meditation retreat emerges from absolute darkness like a mirage in the desert. The experience is **trance-inducing, hypnotic, and cinematic** — a seamless descent into stillness where content materializes from the void as users scroll. The aesthetic channels the quiet intensity of underground meditation chambers carved into volcanic rock.

## Design Language

**Aesthetic Direction:** Cinematic void meets sacred geometry. Reference: the interior of a Tom Ford fashion show crossed with a James Turrell light installation.

**Color Palette:**
- Primary: `#FAFAFA` (warm white)
- Secondary: `#6B6B6B` (muted stone)
- Accent: `#C9A962` (aged gold)
- Background: `#050505` (void black)
- Text on dark: `#F5F5F0`

**Typography:**
- Display: `Cormorant Garamond` at `12vw`, weight 300, tracking -0.04em
- Headlines: `Cormorant Garamond` at `5vw`, weight 400
- Body: `Inter` at `16px`, weight 300, line-height 1.8
- Labels: `JetBrains Mono` at `10px`, tracking 0.15em, uppercase

**Spatial System:**
- Massive negative space — sections breathe with `20vw` vertical padding
- Content floats in the void, never anchored to grids
- Asymmetric positioning creates tension and intrigue

**Motion Philosophy:**
- `cubic-bezier(0.16, 1, 0.3, 1)` for all reveals — fast attack, slow settle
- Elements fade from opacity 0 and translate Y by 60px
- Staggered reveals on scroll: 150ms between children
- Duration scale: micro 0.3s, standard 0.8s, cinematic 1.5s

## Layout & Structure

1. **Hero Section** — Full viewport. Vast display typography centered. Subtle particle drift. Scroll indicator pulses gently.
2. **Philosophy Section** — Text reveals on scroll. Large pull-quote with gold accent line.
3. **Retreats Section** — Three offerings float in an asymmetrical arrangement. Hover reveals details.
4. **Experience Section** — Full-bleed atmospheric imagery with parallax depth.
5. **Contact/Booking** — Minimal form, gold CTA button. Footer whispers away.

## Features & Interactions

- Custom cursor: small gold dot that scales on hover
- Smooth scroll with Lenis
- GSAP ScrollTrigger for all reveals
- Magnetic button effect on CTAs
- Parallax depth on hero and experience images

## Component Inventory

**Button Primary:** Gold background `#C9A962`, dark text, `border-radius: 0`, padding 20px 48px, hover scales 1.02 with glow
**Navigation:** Fixed, initially hidden, reveals on scroll-up, menu icon morphs to X
**Cards:** Dark glass effect `rgba(255,255,255,0.03)`, subtle border, hover lifts with gold accent glow
**Input Fields:** Bottom border only, transparent background, focus line expands from center

## Technical Approach

- Single HTML file with embedded CSS and JavaScript
- GSAP + ScrollTrigger via CDN
- Lenis smooth scroll via CDN
- Google Fonts: Cormorant Garamond, Inter, JetBrains Mono
- No build tools required
