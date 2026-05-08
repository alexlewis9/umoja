import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#8B3A0E" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);