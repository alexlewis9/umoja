import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import type { Key, ReactNode } from "react";

export type ResourceGridProps<TResource> = {
  resources: TResource[];
  renderCard: (resource: TResource) => ReactNode;
  getResourceKey?: (resource: TResource, index: number) => Key;
  onResourceOpen?: (resource: TResource) => void;
  maxHeight?: string | number;
  columns?: { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
};

export default function ResourceGrid<TResource>({
  resources,
  renderCard,
  getResourceKey,
  onResourceOpen,
  maxHeight,
  columns = { base: 1, sm: 2, lg: 3 },
}: ResourceGridProps<TResource>) {
  if (!resources.length) {
    return (
      <Box
        borderRadius="2xl"
        bg="resourceGridBg"
        p={{ base: 4, md: 6 }}
        color="fg"
      >
        <Text fontSize="sm" opacity={0.85}>
          No resources available.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      borderRadius="2xl"
      bg="resourceGridBg"
      p={{ base: 4, md: 6 }}
    >
      <Box
        maxH={maxHeight}
        overflowY="auto"
        overflowX="hidden"
        pr={{ base: 1, md: 2 }}
        overscrollBehavior="contain"
      >
        <SimpleGrid columns={columns} gap={{ base: 4, md: 6 }}>
          {resources.map((resource, index) => {
            const key = getResourceKey?.(resource, index) ?? index;
            const card = renderCard(resource);

            if (!onResourceOpen) {
              return <Box key={key}>{card}</Box>;
            }

            return (
              <Box
                key={key}
                role="button"
                tabIndex={0}
                cursor="pointer"
                onClick={() => onResourceOpen(resource)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onResourceOpen(resource);
                  }
                }}
              >
                {card}
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
