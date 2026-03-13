import { Box, Container, Heading, Text } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";

type EventsContent = {
  title?: string;
  description?: string;
};

export default async function EventsPage() {
  const eventsPath = path.join(process.cwd(), "src/content/events.yaml");
  const events = (await loadYaml(eventsPath)) as EventsContent;

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {events?.title ?? "Events"}
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          {events?.description ??
            "This is the Events page skeleton. A list + filters will be added later."}
        </Text>

        {/* TODO: Replace placeholder with EventsTable*/}
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          p={{ base: 6, md: 10 }}
          shadow="md"
          maxW="720px"
        >
          <Heading as="h2" size="md" mb={2} color="gray.900">
            EventsTable goes here
          </Heading>
          <Text color="gray.600">
            Placeholder container for the EventsTable component.
          </Text>
        </Box>
      </Box>
    </Container>
  );
}