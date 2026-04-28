# Oasis Landing Page — Version 5: WebGL 3D Experience

## Concept & Vision

An immersive journey through abstract luxury space. This version uses **WebGL shaders and Three.js** to create a living, breathing 3D environment that responds to scroll and cursor. The feeling is **otherworldly, premium, and unforgettable**. Reference: Apple's spatial computing meets high-fashion editorial meets meditation app of the future.

## Design Language

**Aesthetic Direction:** Abstract luxury in three-dimensional space. Deep blacks, luminous gradients, floating geometry.

**Color Palette:**
- Primary: `#0A0A0A` (void black)
- Secondary: `#1A1A2E` (deep space blue)
- Accent: `#E94560` (luminous coral)
- Highlight: `#533483` (royal purple)
- Text: `#FFFFFF`

**Typography:**
- Display: `Bebas Neue` at `15vw`, weight 400
- Headlines: `Montserrat` at `3vw`, weight 300
- Body: `Montserrat` at `16px`, weight 300, line-height 1.8
- Labels: `JetBrains Mono` at `10px`, tracking 0.15em

**Spatial System:**
- Full viewport 3D canvas
- Content overlaid with glassmorphism panels
- Depth layers created with Three.js z-positioning
- Parallax via camera movement

**Motion Philosophy:**
- Continuous 3D ambient motion (particles, geometry rotation)
- Scroll-driven camera movement through 3D space
- Cursor-driven light/camera shifts
- Content panels fade in with depth blur
- `expo.out` easing for reveals

## Layout & Structure

1. **Hero Section** — Full WebGL canvas with floating particle field spelling "OASIS". Camera slowly drifts.
2. **Philosophy Section** — 3D geometric forms rotate in background. Text panel with glassmorphism overlay.
3. **Offerings Section** — Cards float in 3D space, parallax on scroll and cursor.
4. **Experience Section** — Full-screen 3D abstract shape that morphs on interaction.
5. **Contact Section** — Minimal floating panel with CTA.
6. **Footer** — Simple text, fades into 3D void.

## Features & Interactions

- Three.js scene with particle system and geometric shapes
- Custom cursor: glowing orb that leaves a trail
- Scroll-driven camera path through 3D space
- Cursor affects light direction in scene
- Glassmorphism UI panels
- Smooth transitions between sections

## Component Inventory

**Button Primary:** Coral background, glass effect, hover glows
**Navigation:** Minimal, floating, glassmorphism background
**Cards:** Glass panels floating in 3D space, subtle border glow
**Section Panels:** Frosted glass overlays with blur backdrop

## Technical Approach

- Single HTML file with embedded CSS and JavaScript
- Three.js for WebGL rendering
- GSAP + ScrollTrigger for UI animations and camera control
- Custom shader for particle effects
- Google Fonts: Bebas Neue, Montserrat, JetBrains Mono
- No build tools required
