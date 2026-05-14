import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          maroon: { value: "#3C1300" },
          russet: { value: "#6d220f" },
        },
      },
      fonts: {
        heading: {
          value:
            "var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        },
      },
      shadows: {
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
