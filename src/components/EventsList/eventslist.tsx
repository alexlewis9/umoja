import { VStack } from "@chakra-ui/react";
import { EventCard, type EventItem } from "@/components/EventCard/EventCard";

type EventsListProps = {
  events: EventItem[];
};

export function EventsList({ events }: EventsListProps) {
  return (
    <VStack align="stretch" gap={6}>
      {events.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}-${event.location}`}
          event={event}
        />
      ))}
    </VStack>
  );
}