"use client";

import { useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status: "all" | "upcoming" | "ongoing" | "past";
  registrationUrl?: string;
};

type Filter = "all" | "upcoming" | "ongoing" | "past";

type EventsTableProps = {
  events: EventItem[];
};

export function EventsTable({ events }: EventsTableProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredEvents = useMemo(() => {
    if (filter === "all") {
      return events;
    }

    return events.filter((event) => event.status === filter);
  }, [events, filter]);

  return (
    <VStack align="stretch" gap={6}>
      <VStack align="stretch" gap={2}>
        <HStack gap={3} flexWrap="wrap">
          <Button
            borderRadius="full"
            colorScheme={filter === "all" ? "gray" : undefined}
            variant={filter === "all" ? "solid" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>

          <Button
            borderRadius="full"
            colorScheme={filter === "upcoming" ? "gray" : undefined}
            variant={filter === "upcoming" ? "solid" : "outline"}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming
          </Button>

          <Button
            borderRadius="full"
            colorScheme={filter === "ongoing" ? "gray" : undefined}
            variant={filter === "ongoing" ? "solid" : "outline"}
            onClick={() => setFilter("ongoing")}
          >
            Ongoing
          </Button>

          <Button
            borderRadius="full"
            colorScheme={filter === "past" ? "gray" : undefined}
            variant={filter === "past" ? "solid" : "outline"}
            onClick={() => setFilter("past")}
          >
            Past
          </Button>
        </HStack>

        <Text fontSize="sm" color="gray.500">
          Filters are placeholder UI for now and are not final.
        </Text>
      </VStack>

      {filteredEvents.length > 0 ? (
        <VStack align="stretch" gap={6}>
          {filteredEvents.map((event) => (
            <Box
              key={`${event.title}-${event.date}-${event.location}`}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              shadow="md"
            >
              <Stack gap={4}>
                <HStack justify="space-between" align="start" flexWrap="wrap">
                  <Text fontSize="2xl" fontWeight="700" color="gray.900">
                    {event.title}
                  </Text>

                  <Badge
                    colorScheme={
                      event.status === "upcoming"
                        ? "green"
                        : event.status === "ongoing"
                          ? "blue"
                          : "gray"
                    }
                    fontSize="sm"
                    textTransform="capitalize"
                  >
                    {event.status}
                  </Badge>
                </HStack>

                <Text color="gray.600">
                  📅 {event.date}
                  {event.time ? ` • ${event.time}` : ""}
                </Text>

                <Text color="gray.600">📍 {event.location}</Text>

                <Text color="gray.700">{event.description}</Text>

                {event.registrationUrl ? (
                  <Link
                    href={event.registrationUrl}
                    color="blue.500"
                    textDecoration="underline"
                    target="_blank"
                    rel="noreferrer"
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
          ))}
        </VStack>
      ) : (
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          p={{ base: 6, md: 8 }}
          shadow="md"
        >
          <Text color="gray.600">No events match this filter yet.</Text>
        </Box>
      )}
    </VStack>
  );
}