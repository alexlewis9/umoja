import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          maroon: { value: "#3C1300" },
        },
      },
      fonts: {
        heading: {
          value:
            "var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        },
      },
    },
    semanticTokens: {
      colors: {
        resourceGridBg: { value: "{colors.brand.maroon}" },
        aboutSectionBorder: { value: "rgba(0, 0, 0, 0.35)" },
        brandBannerGradient: {
          value: "linear-gradient(90deg, #431b07 41%, #823207 100%)",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
