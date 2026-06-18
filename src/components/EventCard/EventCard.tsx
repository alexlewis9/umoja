import { Badge, Box, Link, Stack, Text } from "@chakra-ui/react";

export type EventStatus = "upcoming" | "ongoing" | "past";

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status: EventStatus;
  registrationUrl?: string;
};

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const statusColorScheme =
    event.status === "upcoming"
      ? "green"
      : event.status === "ongoing"
        ? "blue"
        : "gray";

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      shadow="md"
    >
      <Stack gap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Text fontSize="2xl" fontWeight="700" color="gray.900">
            {event.title}
          </Text>

          <Badge
            colorScheme={statusColorScheme}
            fontSize="sm"
            textTransform="capitalize"
          >
            {event.status}
          </Badge>
        </Box>

        <Stack gap={2}>
          <Text fontSize="sm" color="gray.600">
            📅 {event.date}
            {event.time ? ` • ${event.time}` : ""}
          </Text>

          <Text fontSize="sm" color="gray.600">
            📍 {event.location}
          </Text>
        </Stack>

        <Text color="gray.700">{event.description}</Text>

        {event.registrationUrl ? (
          <Link
            href={event.registrationUrl}
            target="_blank"
            rel="noreferrer"
            color="blue.500"
            textDecoration="underline"
            width="fit-content"
          >
            Register
          </Link>
        ) : (
          <Text fontSize="sm" color="gray.500">
            TODO: Add registration URL
          </Text>
        )}
      </Stack>
    </Box>
  );
}