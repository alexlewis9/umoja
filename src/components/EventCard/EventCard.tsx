import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/react";

export interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status?: "upcoming" | "past" | "ongoing";
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  status = "upcoming",
}: EventCardProps) {
  const statusColors = {
    upcoming: "green",
    past: "gray",
    ongoing: "blue",
  } as const;

  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={6}
      bg="white"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: "md" }}
    >
      <Stack gap={3}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Heading as="h3" size="md" color="gray.900">
            {title}
          </Heading>

          <Badge colorScheme={statusColors[status]} fontSize="sm">
            {status}
          </Badge>
        </Box>

        <Stack gap={2} fontSize="sm" color="gray.600">
          <Text>
            📅 {date} {time ? `• ${time}` : ""}
          </Text>
          <Text>📍 {location}</Text>
        </Stack>

        <Text color="gray.700">{description}</Text>

        <Text fontSize="sm" color="gray.500">
          TODO: Add registration URL
        </Text>
      </Stack>
    </Box>
  );
}