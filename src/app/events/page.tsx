import { Box, Container, Heading, Text } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "../../lib/loadYaml";

type SiteContent = {
  events?: {
    title?: string;
    description?: string;
  };
};

export default async function EventsPage() {
  const sitePath = path.join(process.cwd(), "src/content/site.yaml");
  const site = (await loadYaml(sitePath)) as SiteContent;

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {site?.events?.title ?? "Events"}
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          {site?.events?.description ??
            "This is the Events page skeleton. A list + filters will be added later."}
        </Text>

        {/* Placeholder for future EventsTable */}
        <Box bg="white" border="1px solid" borderColor="gray.200" borderRadius="xl" p={{ base: 6, md: 10 }} shadow="md">
        <Box bg="white" border="1px  m        <Box bg="white" border="1px  m        <Box bg="white"             <Box bg="w     <T        <Box bg="white" border="1px  m      or t        <Box bg="whon        xt>
        </Box>
      </Box>
    </Container>
  );
}
