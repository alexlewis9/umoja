import { Box, Container, Heading, Text } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import { EventsTable, type EventItem } from "@/components/EventsTable/EventsTable";

type EventsContent = {
  title?: string;
  description?: string;
  events?: EventItem[];
};

export default async function EventsPage() {
  const eventsPath = path.join(process.cwd(), "src/content/events.yaml");
  const eventsContent = (await loadYaml(eventsPath)) as EventsContent;

  const title = eventsContent?.title ?? "Events";
  const description =
    eventsContent?.description ??
    "This is the Events page skeleton. A list + filters will be added later.";

  const events = eventsContent?.events ?? [];

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {title}
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          {description}
        </Text>

        <EventsTable events={events} />
      </Box>
    </Container>
  );
}