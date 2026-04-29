---
version: alpha
name: Oasis — The Cinematic
description: "Full-screen clip-path morphing hero. Scroll-driven cinematic experience. Amber ember accent on obsidian."
colors:
  primary: "#FDF6EC"
  secondary: "#8A7D6B"
  tertiary: "#E67A3A"
  neutral: "#0F0D0B"
  on-tertiary: "#0F0D0B"
  on-neutral: "#FDF6EC"
typography:
  display-huge:
    fontFamily: "Space Grotesk"
    fontSize: 15vw
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: -0.06em
  display-large:
    fontFamily: "Space Grotesk"
    fontSize: 6vw
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.03em
  h1:
    fontFamily: "Space Grotesk"
    fontSize: 4vw
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0.02em
  label-micro:
    fontFamily: "JetBrains Mono"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  none: 0px
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
    padding: 16px 32px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.primary}"
    padding: 16px 32px
    typography: "{typography.label-micro}"
  nav-label:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-micro}"
  cursor-default:
    backgroundColor: "{colors.tertiary}"
    size: 8px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 64px
    rounded: "{rounded.full}"
---