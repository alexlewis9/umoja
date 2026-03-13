"use client";

import { Badge, Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { AppButton } from "@/components/Button/Button";

export type EventStatus = "upcoming" | "ongoing" | "past";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description?: string;
  status?: EventStatus;
  registrationUrl?: string;
};

const STATUS_COLOR: Record<EventStatus, string> = {
  upcoming: "green",
  ongoing: "blue",
  past: "gray",
};

type Filter = "all" | "upcoming" | "ongoing" | "past";

const SAMPLE_EVENTS: EventItem[] = [
  {
    id: "sample-1",
    title: "Sample Event (replace later)",
    date: "Feb 21, 2026",
    time: "6:00 PM",
    location: "Durham College Gym",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming",
    registrationUrl: "", //TODO
  },
  {
    id: "sample-2",
    title: "Sample Event (replace later)",
    date: "Mar 3, 2026",
    time: "5:30 PM",
    location: "Community Center",
    description: "TODO: Replace with real event copy from data source.",
    status: "upcoming",
    registrationUrl: "", //TODO
  },
];


export function EventsTable({
  events,
  maxW = "720px",
}: {
  events?: EventItem[];
  maxW?: string | number;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  // Sample placeholder events
  const data = useMemo<EventItem[]>(
    () => (events && events.length > 0 ? events : SAMPLE_EVENTS),
    [events]
  );

  const filtered = useMemo(() => {
    if (filter === "all") return data;
    return data.filter((e) => (e.status ?? "upcoming") === filter);
  }, [data, filter]);

  return (
    <Box maxW={maxW}>
      {/* Filters */}
      <HStack gap={2} mb={6} flexWrap="wrap">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterButton>
        <FilterButton
          active={filter === "upcoming"}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </FilterButton>
        <FilterButton active={filter === "ongoing"} onClick={() => setFilter("ongoing")}>
          Ongoing
        </FilterButton>
        <FilterButton active={filter === "past"} onClick={() => setFilter("past")}>
          Past
        </FilterButton>
      </HStack>

      {/* List */}
      <Stack gap={6}>
        {filtered.length === 0 ? (
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            p={{ base: 6, md: 10 }}
            shadow="md"
          >
            <Heading as="h3" size="md" mb={2} color="gray.900">
              No events to show
            </Heading>
            <Text color="gray.600">Try a different filter.</Text>
          </Box>
        ) : (
          filtered.map((e) => <EventRow key={e.id} event={e} />)
        )}
      </Stack>
    </Box>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button
      size="sm"
      onClick={onClick}
      bg={active ? "whiteAlpha.300" : "whiteAlpha.100"}
      _hover={{ bg: "whiteAlpha.200" }}
      borderWidth="1px"
      borderColor={active ? "whiteAlpha.400" : "whiteAlpha.200"}
      color="white"
      fontWeight={600}
      borderRadius="full"
    >
      {children}
    </Button>
  );
}

function EventRow({ event }: { event: EventItem }) {
  const status: EventStatus = event.status ?? "upcoming";
  const badgeColor = STATUS_COLOR[status];

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p={{ base: 5, md: 6 }}
      shadow="md"
    >
      <Stack gap={4}>
        <HStack justify="space-between" align="start">
          <Heading as="h3" size="md" color="gray.900">
            {event.title}
          </Heading>
          <Badge colorScheme={badgeColor} fontSize="sm" textTransform="capitalize">
            {status}
          </Badge>
        </HStack>

        <Text fontSize="sm" color="gray.600">
          📅 {event.date}
          {event.time ? ` • ${event.time}` : ""}
        </Text>

        <Text fontSize="sm" color="gray.600">
          📍 {event.location}
        </Text>

        {event.description ? (
          <Text
            color="gray.700"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {event.description}
          </Text>
        ) : null}

        <HStack justify="flex-end">
          {event.registrationUrl && event.registrationUrl.trim() !== "" ? (
            <AppButton
              size="sm"
              onClick={() => {
                window.open(event.registrationUrl, "_blank", "noopener,noreferrer");
              }}
            >
              Register
            </AppButton>
          ) : (
            <Text fontSize="sm" color="gray.500">
              TODO: Add registration URL
            </Text>
          )}
        </HStack>
      </Stack>
    </Box>
  );
}