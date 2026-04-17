import { Box, Heading, Text, Badge, Stack } from "@chakra-ui/react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
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
      borderRadius="lg"
      p={6}
      bg="white"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Stack gap={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={3}
        >
          <Heading as="h3" size="md" color="gray.900">
            {title}
          </Heading>

          <Badge
            colorScheme={statusColors[status]}
            variant="subtle"
            textTransform="capitalize"
            fontSize="sm"
          >
            {status}
          </Badge>
        </Stack>

        <Text color="gray.700">
          📅 {date} • {time}
        </Text>

        <Text color="gray.700">📍 {location}</Text>

        <Text color="gray.800">{description}</Text>

        <Text color="gray.500">TODO: Add registration URL</Text>
      </Stack>
    </Box>
  );
}