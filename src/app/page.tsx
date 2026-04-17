import { Container, VStack } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import { EventsFilters } from "@/components/EventsFilter/eventsfilter";
import { EventsHero } from "@/components/EventsHero/eventshero";
import { EventsList } from "@/components/EventsList/eventslist";
import type { EventCardProps } from "@/components/EventCard/EventCard";

type EventsContent = {
  title?: string;
  description?: string;
};

const SAMPLE_EVENTS: EventCardProps[] = [
  {
    title: "Sample Event (replace later)",
    date: "Feb 21, 2026",
    time: "6:00 PM",
    location: "Durham College Gym",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming",
  },
  {
    title: "Sample Event (replace later)",
    date: "Mar 3, 2026",
    time: "5:30 PM",
    location: "Community Center",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming",
  },
];

export default async function Home() {
  const eventsPath = path.join(process.cwd(), "src/content/events.yaml");
  const events = (await loadYaml(eventsPath)) as EventsContent;

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <VStack align="stretch" gap={8}>
        <EventsHero
          title={events?.title ?? "Events"}
          description={
            events?.description ??
            "This is the Events page skeleton. A list + filters will be added later."
          }
        />

        <EventsFilters />

        <EventsList events={SAMPLE_EVENTS} />
      </VStack>
    </Container>
  );
}