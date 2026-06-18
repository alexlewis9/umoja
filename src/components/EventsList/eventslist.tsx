import { VStack } from "@chakra-ui/react";
import { EventCard } from "@/components/EventCard/EventCard";
import type { EventItem } from "@/types/events";

type EventsListProps = {
  events: EventItem[];
};

export function EventsList({ events }: EventsListProps) {
  return (
    <VStack align="stretch" gap={6} w="full">
      {events.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}-${event.location}`}
          event={event}
        />
      ))}
    </VStack>
  );
}