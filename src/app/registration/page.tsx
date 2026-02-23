<<<<<<< HEAD
import { Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type RegistrationContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  form?: {
    embedUrl?: string;
  };
};

export default async function RegistrationPage() {
  const registrationPath = path.join(
    process.cwd(),
    "src/content/registration.yaml",
  );
  const content = (await loadYaml(registrationPath)) as RegistrationContent;

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <PageHeader
        title={content.header?.title}
        subtitle={content.header?.subtitle}
      />
    </Container>
  );
}
=======
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
>>>>>>> 9a300b9 (UMO-52: registration page)
