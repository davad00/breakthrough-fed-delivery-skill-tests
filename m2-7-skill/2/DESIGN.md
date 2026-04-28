# Oasis Landing Page — Version 2: Zen Minimalism

## Concept & Vision

Pure, pristine stillness distilled into pixels. This version channels the Japanese concept of **Ma** (間) — the profound power of empty space. Every element is deliberate, every whitespace intentional. The experience feels like meditation itself: calm, unhurried, deeply satisfying. The aesthetic draws from traditional Japanese ryokan meets Scandinavian design studio.

## Design Language

**Aesthetic Direction:** Wabi-sabi minimalism. Reference: a tea ceremony in a Tadao Ando concrete pavilion.

**Color Palette:**
- Primary: `#1A1A1A` (warm charcoal)
- Secondary: `#8A8A8A` (stone grey)
- Accent: `#2D5A4A` (forest jade)
- Background: `#F7F5F2` (warm paper)
- Text on light: `#2C2C2C`

**Typography:**
- Display: `Noto Serif JP` at `10vw`, weight 200, tracking 0em
- Headlines: `Noto Serif JP` at `3.5vw`, weight 300
- Body: `Inter` at `16px`, weight 300, line-height 2
- Labels: `Space Mono` at `11px`, tracking 0.08em

**Spatial System:**
- Extreme whitespace — sections separated by `30vw` gaps
- Content hugs the left edge with max-width constraints
- Vertical rhythm based on 8px baseline grid

**Motion Philosophy:**
- Ultra-slow reveals: 1.5s to 3s duration
- `cubic-bezier(0.25, 0.1, 0.25, 1)` — gentle, breathing pace
- Elements don't translate — they fade from existence
- Floating animations: slow sine waves, 6-8s periods

## Layout & Structure

1. **Hero Section** — Text on left, vast breathing space. A single horizontal line expands. A floating organic shape drifts gently.
2. **Principles Section** — Three pillars presented as vertical text columns with elegant separators.
3. **Spaces Section** — Horizontal scroll gallery with parallax depth.
4. **Practice Section** — Full-width statement text, minimal.
5. **Booking Section** — Centered form with single input focus.

## Features & Interactions

- Custom cursor: thin ring that morphs to elongated shape on links
- Ultra-smooth transitions
- Horizontal scroll section with magnetic snap
- Floating organic SVG shape with continuous gentle motion
- Ink-wash hover effects on images

## Component Inventory

**Button Primary:** Forest jade background, cream text, no border-radius, generous padding 18px 48px
**Navigation:** Minimal top bar, wordmark left, single CTA right
**Cards:** Soft shadows `0 20px 60px rgba(0,0,0,0.06)`, no borders, hover lifts 4px
**Input Fields:** Single bottom border, large typography, focus expands with jade color

## Technical Approach

- Single HTML file with embedded CSS and JavaScript
- GSAP for animations (minimal usage, mostly CSS)
- Google Fonts: Noto Serif JP, Inter, Space Mono
- No build tools required
