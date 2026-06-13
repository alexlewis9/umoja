import { Container, VStack } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import { EventsFilters } from "@/components/EventsFilter/eventsfilter";
import { EventsHero } from "@/components/EventsHero/eventshero";
import { EventsList } from "@/components/EventsList/eventslist";
import type { EventItem } from "@/types/events";

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
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <VStack align="center" gap={8} w="full">
        <EventsHero
          title={content.header?.title ?? "Events"}
          description={content.header?.subtitle}
        />

        <EventsFilters />

        <EventsList events={content.events ?? []} />
      </VStack>
    </Container>
  );
}