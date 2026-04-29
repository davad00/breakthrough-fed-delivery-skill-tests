---
version: alpha
name: Oasis — The Void
description: "A particle-field meditation retreat landing page. Near-black void with gold phosphor accent. WebGL particle system as the sole visual environment."
colors:
  primary: "#F5F0E8"
  secondary: "#6B6560"
  tertiary: "#C8A45C"
  neutral: "#0A0806"
  on-tertiary: "#0A0806"
  on-neutral: "#F5F0E8"
typography:
  display-huge:
    fontFamily: "Space Grotesk"
    fontSize: 14vw
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: -0.05em
  display-large:
    fontFamily: "Space Grotesk"
    fontSize: 7vw
    fontWeight: 600
    lineHeight: 0.9
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
  massive: 20vw
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    padding: 16px
    typography: "{typography.label-micro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.primary}"
    padding: 16px
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
    backgroundColor: "{colors.primary}"
    size: 48px
    rounded: "{rounded.full}"
---