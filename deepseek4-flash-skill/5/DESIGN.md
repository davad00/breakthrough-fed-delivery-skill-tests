---
version: alpha
name: Oasis — The Oracle
description: "Kinetic typography as ritual. Scroll-choreographed letterforms. Morphing geometric backdrops. Vermilion accent on charcoal."
colors:
  primary: "#F2EEEA"
  secondary: "#8C8279"
  tertiary: "#E0523A"
  neutral: "#0E0C0A"
  on-tertiary: "#0E0C0A"
  on-neutral: "#F2EEEA"
typography:
  display-huge:
    fontFamily: "Space Grotesk"
    fontSize: 14vw
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: -0.06em
  display-large:
    fontFamily: "Space Grotesk"
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: -0.04em
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
    size: 6px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 72px
    rounded: "{rounded.full}"
---