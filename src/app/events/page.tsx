import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { EventCard } from "@/components/EventCard/EventCard";

export default function EventsPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          Events
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={8}>
          This is the Events page skeleton. A list + filters will be added later.
        </Text>

        <Stack gap={6} maxW="720px">
          <EventCard
            title="UMOJA Open Gym"
            date="Feb 21, 2026"
            time="6:00 PM"
            location="Durham College Gym"
            description="Come join us for an open gym session. All skill levels welcome."
            status="upcoming"
          />
          <EventCard
            title="Skill Development Session"
            date="Mar 3, 2026"
            time="5:30 PM"
            location="Community Center"
            description="Training session focused on fundamentals. More details coming soon."
            status="upcoming"
          />
        </Stack>
      </Box>
    </Container>
  );
}