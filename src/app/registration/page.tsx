import { Box, Container, Heading, Text } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";

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

  const reg = site?.registration;
  const title = reg?.title ?? "Registration";
  const description =
    reg?.description ??
    "Complete the registration form below.";
  const formUrl = reg?.formUrl;

  const hasRealUrl =
    typeof formUrl === "string" &&
    formUrl.trim().length > 0 &&
    !formUrl.includes("TODO");

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
              {/* Google Forms */}
              <Box
                as="iframe"
                src={formUrl}
                title="Registration Form"
                w="100%"
                h={{ base: "75vh", md: "80vh" }}
                border="0"
              />
            </Box>

            <Text mt={4} fontSize="sm" color="gray.500">
              Having trouble viewing the embed?{" "}
              <Box as="a" href={formUrl} target="_blank" rel="noreferrer" color="blue.400">
                Open the form in a new tab
              </Box>
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
              TODO: Add the form embed URL in <b>src/content/site.yaml</b> under{" "}
              <b>registration.formUrl</b>.
            </Text>
          </Box>
        )}
      </Box>
    </Container>
  );
}