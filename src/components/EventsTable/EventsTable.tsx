"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export function EventsTable() {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p={{ base: 6, md: 10 }}
      shadow="md"
    >
      <Heading as="h2" size="md" mb={2} color="gray.900">
        EventsTable goes here
      </Heading>
      <Text color="gray.600">
        Placeholder container for the EventsTable component.
      </Text>
    </Box>
  );
}