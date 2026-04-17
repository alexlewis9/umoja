import { Button, HStack, Text, VStack } from "@chakra-ui/react";

export function EventsFilters() {
  return (
    <VStack align="stretch" gap={2}>
      <HStack gap={3} flexWrap="wrap">
        <Button borderRadius="full" colorScheme="gray" variant="solid">
          All
        </Button>

        <Button borderRadius="full" variant="outline">
          Upcoming
        </Button>

        <Button borderRadius="full" variant="outline">
          Ongoing
        </Button>

        <Button borderRadius="full" variant="outline">
          Past
        </Button>
      </HStack>

      <Text fontSize="sm" color="gray.500">
        Filters are placeholder UI for now and are not functional yet.
      </Text>
    </VStack>
  );
}