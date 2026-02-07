import { Container, Heading, Stack } from "@chakra-ui/react";
import { EventCard } from "../../../components/EventCard/EventCard";

export default function EventCardTestPage() {
  return (
    <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
      <Heading as="h1" size="lg" mb={8}>
        Event Card Test
      </Heading>

      <Stack gap={6}>
        <EventCard
          title="Community Health Workshop"
          date="March 15, 2026"
          time="10:00 AM - 1:00 PM"
          location="Umoja Community Center"
          description="A hands-on workshop focused on preventive care, wellness habits, and local health resources."
          status="upcoming"
          imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
          imageAlt="Event calendar and notebook"
        />

        <EventCard
          title="Youth Leadership Summit"
          date="February 7, 2026"
          time="9:00 AM - 4:00 PM"
          location="Downtown Conference Hall"
          description="Interactive sessions and mentorship opportunities for emerging youth leaders in the community."
          status="ongoing"
        />

        <EventCard
          title="Neighborhood Clean-Up Day"
          date="January 20, 2026"
          location="Westside Park"
          description="Volunteers came together to clean shared spaces and build stronger neighborhood connections."
          status="past"
        />
      </Stack>
    </Container>
  );
}
