---
version: alpha
name: Oasis — The Scroll Temple
description: "Horizontal scroll pilgrimage. Each section is a chamber of the retreat. Sapphire accent on charcoal."
colors:
  primary: "#F0F4F8"
  secondary: "#7A8599"
  tertiary: "#4A90D9"
  neutral: "#0C0E12"
  on-tertiary: "#0C0E12"
  on-neutral: "#F0F4F8"
typography:
  display-huge:
    fontFamily: "Space Grotesk"
    fontSize: 13vw
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
    fontSize: 3.5vw
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
  massive: 15vw
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
    size: 12px
    rounded: "{rounded.full}"
  cursor-hover:
    backgroundColor: "{colors.primary}"
    size: 56px
    rounded: "{rounded.full}"
---