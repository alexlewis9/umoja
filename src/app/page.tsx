import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EventCard } from "../components/EventCard/EventCard";

const SAMPLE_EVENTS = [
  {
    title: "Sample Event (replace later)",
    date: "Feb 21, 2026",
    time: "6:00 PM",
    location: "Durham College Gym",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming" as const,
  },
  {
    title: "Sample Event (replace later)",
    date: "Mar 3, 2026",
    time: "5:30 PM",
    location: "Community Center",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming" as const,
  },
];

export default function EventsPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading as="h1" size="2xl" mb={4} color="white">
            Events
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl">
            This is the Events page skeleton. A list + filters will be added later.
          </Text>
        </Box>

        <HStack gap={3} flexWrap="wrap">
          <Button borderRadius="full" colorScheme="gray" variant="solid">
            All
          </Button>
          <Button
            borderRadius="full"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.100" }}
          >
            Upcoming
          </Button>
          <Button
            borderRadius="full"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.100" }}
          >
            Ongoing
          </Button>
          <Button
            borderRadius="full"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.100" }}
          >
            Past
          </Button>
        </HStack>

        <VStack align="stretch" gap={6}>
          {SAMPLE_EVENTS.map((event) => (
            <EventCard
              key={`${event.title}-${event.date}-${event.time}`}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              status={event.status}
            />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
}