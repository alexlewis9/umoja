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
import path from "path";
import { loadYaml } from "../../lib/loadYaml";

type SiteContent = {
  registration?: {
    title?: string;
    description?: string;
    formUrl?: string;
  };
};

export default async function RegistrationPage() {
  const sitePath = path.join(process.cwd(), "src/content/site.yaml");
  const site = (await loadYaml(sitePath)) as SiteContent;

  const title = site?.registration?.title ?? "Registration";
  const description =
    site?.registration?.description ??
    "Complete the registration form below.";

  const formUrl = site?.registration?.formUrl?.trim() ?? "";

  const hasRealUrl = formUrl.length > 0 && !formUrl.toLowerCase().includes("todo");

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {title}
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl" mb={10}>
          {description}
        </Text>

        {hasRealUrl ? (
          <>
            <Box
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
              overflow="hidden"
              shadow="md"
            >
              <iframe
                src={formUrl}
                title="Registration Form"
                style={{ width: "100%", height: "80vh", border: "0" }}
              />
            </Box>

            <Text mt={4} fontSize="sm" color="gray.500">
              Having trouble viewing the embed?{" "}
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#63b3ed", textDecoration: "underline" }}
              >
                Open the form in a new tab
              </a>
              .
            </Text>
          </>
        ) : (
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            p={{ base: 6, md: 10 }}
            shadow="md"
          >
            <Heading as="h2" size="md" mb={2} color="gray.900">
              Registration form goes here
            </Heading>
            <Text color="gray.600">
              TODO: Add the embed URL in <b>src/content/site.yaml</b> under{" "}
              <b>registration.formUrl</b>.
            </Text>
          </Box>
        )}
      </Box>
    </Container>
  );
}
>>>>>>> 9a300b9 (UMO-52: registration page)
