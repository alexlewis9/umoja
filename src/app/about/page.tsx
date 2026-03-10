import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";

type SiteContent = {
  about?: {
    title?: string;
    intro?: string;
    missionTitle?: string;
    missionBody?: string;
    storyTitle?: string;
    storyBody?: string;
    teamTitle?: string;
    teamBody?: string;
  };
};

export default async function AboutPage() {
  const sitePath = path.join(process.cwd(), "src/content/site.yaml");
  const site = (await loadYaml(sitePath)) as SiteContent;

  const about = site?.about;

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {about?.title ?? "About"}
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          {about?.intro ??
            "This is the About page skeleton. Content to be added."}
        </Text>

        <Stack gap={10} maxW="3xl">
          {/* mission */}
          <Box>
            <Heading as="h2" size="lg" mb={3}>
              {about?.missionTitle ?? "Our Mission"}
            </Heading>
            <Text color="gray.700">
              {about?.missionBody ??
                "TODO: Add mission text."}
            </Text>
          </Box>

          <Box h="1px" bg="gray.200" />

          {/* our story */}
          <Box>
            <Heading as="h2" size="lg" mb={3}>
              {about?.storyTitle ?? "Our Story"}
            </Heading>
            <Text color="gray.700">
              {about?.storyBody ??
                "TODO: Add story."}
            </Text>
          </Box>

          <Box h="1px" bg="gray.200" />

          {/* meet our team */}
          <Box>
            <Heading as="h2" size="lg" mb={3}>
              {about?.teamTitle ?? "Meet Our Team"}
            </Heading>
            <Text color="gray.700" mb={4}>
              {about?.teamBody ??
                "TODO: Add team section."}
            </Text>

            {/* TODO: Replace placeholder */}
            <Box
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
              p={{ base: 6, md: 10 }}
              shadow="md"
            >
              <Heading as="h3" size="md" mb={2} color="gray.900">
                Team section component goes here
              </Heading>
              <Text color="gray.600">
                TODO: Insert TeamCard component grid based on Figma.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}