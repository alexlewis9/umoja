import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          About
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl">
          This is the About page skeleton. Content will be added later.
        </Text>

        <Box mt={10}>
          <Heading as="h2" size="md" mb={2}>
            What to add next
          </Heading>
          <Text color="gray.600">
            Mission, program info, team section, and photos (based on Figma).
          </Text>
        </Box>
      </Box>
    </Container>
  );
}