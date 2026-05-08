import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#8B3A0E" },
          primaryHover: { value: "#74310C" },
          primaryActive: { value: "#5E2709" },

          maroon: { value: "#3C1300" },
          russet: { value: "#6d220f" },
          contactBrown: { value: "#4f1a05" },
          contactBrownDark: { value: "#2b0d01" },
          contactOrange: { value: "#9f3e0d" },
          contactOrangeHover: { value: "#b95518" },
          contactSurface: { value: "#fff8f1" },
          contactFieldBg: { value: "#f4eee8" },
          contactFieldBorder: { value: "#b27857" },
          contactFieldPlaceholder: { value: "#9b8172" },
          contactFieldFocusBg: { value: "#fffaf5" },
          contactHeadingAccent: { value: "#f5c5a6" },
        },
      },
      fonts: {
        heading: {
          value:
            "var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        },
      },
      shadows: {
        contactForm: { value: "0 20px 44px rgba(0, 0, 0, 0.32)" },
        contactButton: { value: "0 10px 22px rgba(79, 26, 5, 0.22)" },
        contactFieldFocus: { value: "0 1px 0 {colors.brand.contactOrange}" },
        footerLogo: { value: "0 18px 40px rgba(0,0,0,0.22)" },
      },
    },
    semanticTokens: {
      colors: {
        resourceGridBg: { value: "{colors.brand.maroon}" },
        aboutSectionBorder: { value: "rgba(0, 0, 0, 0.35)" },
        brandBannerGradient: {
          value: "linear-gradient(90deg, #431b07 41%, #823207 100%)",
        },
        contactPageBg: { value: "{colors.brand.contactBrown}" },
        contactTextStrong: { value: "{colors.brand.contactBrownDark}" },
        contactAccent: { value: "{colors.brand.contactOrange}" },
        contactAccentHover: { value: "{colors.brand.contactOrangeHover}" },
        contactSurface: { value: "{colors.brand.contactSurface}" },
        contactFieldBg: { value: "{colors.brand.contactFieldBg}" },
        contactFieldBorder: { value: "{colors.brand.contactFieldBorder}" },
        contactFieldPlaceholder: {
          value: "{colors.brand.contactFieldPlaceholder}",
        },
        contactFieldFocusBg: { value: "{colors.brand.contactFieldFocusBg}" },
        contactHeadingAccent: { value: "{colors.brand.contactHeadingAccent}" },
        contactFormBorder: { value: "rgba(255, 255, 255, 0.18)" },
        contactBodyText: { value: "rgba(255, 255, 255, 0.88)" },
        footerBg: { value: "{colors.brand.russet}" },
        footerText: { value: "white" },
        footerBorder: { value: "rgba(255,255,255,0.08)" },
        footerLogoBg: { value: "#120905" },
        footerLogoBorder: { value: "rgba(255,255,255,0.06)" },
        footerHeading: { value: "#f0c5ae" },
        footerLink: { value: "rgba(255,255,255,0.88)" },
        footerLinkHover: { value: "#f4b699" },
        footerIconBg: { value: "rgba(255,255,255,0.08)" },
        footerIconBgHover: { value: "rgba(255,255,255,0.14)" },
        footerIconBorder: { value: "rgba(255,255,255,0.06)" },
        footerIconBorderHover: { value: "rgba(255,255,255,0.16)" },
        footerTextMuted: { value: "rgba(255,255,255,0.74)" },
        footerCopyrightBg: { value: "#000000" },
        footerCopyrightText: { value: "rgba(255,255,255,0.62)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);