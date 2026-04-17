import { VStack } from "@chakra-ui/react";
import { EventCard, type EventCardProps } from "@/components/EventCard/EventCard";

type EventsListProps = {
  events: EventCardProps[];
};

export function EventsList({ events }: EventsListProps) {
  return (
    <VStack align="stretch" gap={6}>
      {events.map((event) => (
        <EventCard
          key={`${event.title}-${event.date}-${event.location}`}
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
          status={event.status}
        />
      ))}
    </VStack>
  );
}