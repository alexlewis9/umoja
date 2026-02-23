import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function RegistrationPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          Registration
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={8}>
          This is the Registration page skeleton. The form/embed will be added later.
        </Text>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={{ base: 6, md: 8 }}
          bg="white"
        >
          <Heading as="h2" size="md" mb={2}>
            Registration form goes here
          </Heading>
          <Text color="gray.600">
            Placeholder container for the registration form (or embed).
          </Text>
        </Box>
      </Box>
    </Container>
  );
}