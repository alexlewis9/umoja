import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function FooterTestPage() {
  return (
    <Box bg="white" color="black">
      <Container maxW="1200px" px={{ base: 6, md: 8 }} py={{ base: 12, md: 16 }}>
        <Box maxW="760px" mb={{ base: 10, md: 14 }}>
          <Heading as="h1" size="3xl" mb={4}>
            Footer Test Page
          </Heading>
          <Text color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            This route provides a simple page body above the global footer so the footer can be
            checked in isolation without duplicating the shared layout component.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mb={{ base: 16, md: 24 }}>
          {["Desktop spacing", "Tablet wrapping", "Mobile stacking"].map((label) => (
            <Box
              key={label}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={5}
              minH="120px"
            >
              <Text fontWeight="700" mb={2}>
                {label}
              </Text>
              <Text color="gray.600" lineHeight="1.7">
                Resize the viewport to confirm the footer layout, link groups, contact icons, and
                copyright bar behave as expected.
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box minH={{ base: "18vh", md: "26vh" }} />
      </Container>
    </Box>
  );
}
