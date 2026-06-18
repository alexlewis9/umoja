import { Badge, Box, Link, Stack, Text } from "@chakra-ui/react";
import type { EventItem } from "@/types/events";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  const statusStyles =
    event.status === "upcoming"
      ? { bg: "green.100", color: "green.800" }
      : event.status === "ongoing"
        ? { bg: "blue.100", color: "blue.800" }
        : { bg: "gray.100", color: "gray.700" };

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      shadow="md"
      w="full"
    >
      <Stack gap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Text fontSize="2xl" fontWeight="700" color="gray.900">
            {event.title}
          </Text>

          <Badge
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            textTransform="capitalize"
            {...statusStyles}
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