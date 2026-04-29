---
version: alpha
name: Oasis — The Prism
description: "Three.js rotating crystal geometry. Refractive amethyst light. Radial navigation. Violet accent on deep indigo."
colors:
  primary: "#EEF0F8"
  secondary: "#8B84A8"
  tertiary: "#9B6BED"
  neutral: "#0B0911"
  on-tertiary: "#0B0911"
  on-neutral: "#EEF0F8"
typography:
  display-huge:
    fontFamily: "Space Grotesk"
    fontSize: 12vw
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: -0.05em
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
    size: 48px
    rounded: "{rounded.full}"
---