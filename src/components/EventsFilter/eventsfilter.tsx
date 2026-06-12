import { Button, HStack, VStack } from "@chakra-ui/react";

const filters = ["All", "Upcoming", "Ongoing", "Past"] as const;

export function EventsFilters() {
  return (
    <VStack align="center" gap={2} w="full">
      <HStack gap={3} flexWrap="wrap" justify="center">
        {filters.map((filter, index) => (
          <Button
            key={filter}
            borderRadius="full"
            px={6}
            py={2}
            minH="44px"
            colorScheme={index === 0 ? "gray" : undefined}
            variant={index === 0 ? "solid" : "outline"}
          >
            {filter}
          </Button>
        ))}
      </HStack>

      {/* Filters are placeholder UI for now and are not functional yet. */}
    </VStack>
  );
}