import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          maroon: { value: "#3C1300" },
        },
      },
    },
    semanticTokens: {
      colors: {
        resourceGridBg: { value: "{colors.brand.maroon}" },
        brandBannerGradient: {
          value: "linear-gradient(90deg, #431b07 41%, #823207 100%)",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
