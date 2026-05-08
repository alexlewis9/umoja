<<<<<<< HEAD
import { Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type EventItem = {
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  imageSrc?: string;
};

type EventsContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  events?: EventItem[];
};

export default async function EventsPage() {
  const eventsPath = path.join(process.cwd(), "src/content/events.yaml");
  const content = (await loadYaml(eventsPath)) as EventsContent;

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <PageHeader
        title={content.header?.title}
        subtitle={content.header?.subtitle}
      />
    </Container>
  );
}
=======
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
>>>>>>> 64ac440 (UMO-XX: add EventsTable component and events page usage)
