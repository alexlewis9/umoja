import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { EventsTable } from "@/components/EventsTable/EventsTable";

export default function EventsPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          Events
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          This is the Events page skeleton. A list + filters will be added later.
        </Text>

        {/* EventsTable placeholder */}
        <EventsTable />
      </Box>
    </Container>
  );
}