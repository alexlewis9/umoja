"use client";

import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import TeamCard from "@/components/TeamCard/TeamCard";

const demoAvatar =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>" +
  "<rect width='240' height='240' fill='%23d9d9d9'/>" +
  "<circle cx='120' cy='92' r='34' fill='%23999999'/>" +
  "<ellipse cx='120' cy='162' rx='64' ry='34' fill='%23999999'/>" +
  "</svg>";

export default function TeamCardTestPage() {
  return (
    <Box minH="100vh" bg="gray.50" px={6} py={10}>
      <Center mb={6} textAlign="center" flexDirection="column" gap={2}>
        <Heading size="lg">TeamCard Test</Heading>
        <Text color="gray.600">
          Visual QA: image avatar, fallback avatar, and optional description.
        </Text>
      </Center>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={10} maxW="1100px" mx="auto">
        <Center>
          <TeamCard
            name="Amina Diallo"
            position="Community Partnerships"
            description="Connects local organizers with resources and helps grow inclusive, high-impact programs."
            imageUrl={demoAvatar}
          />
        </Center>
        <Center>
          <TeamCard
            name="No Image"
            position="Program Coordinator"
            description="Avatar fallback should render initials when no image is provided."
          />
        </Center>
        <Center>
          <TeamCard
            name="No Description"
            position="Volunteer Lead"
          />
        </Center>
      </SimpleGrid>
    </Box>
  );
}
