import { Anta } from "next/font/google";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { loadYaml } from "@/lib/loadYaml";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

type SiteContent = {
  registration?: {
    formUrl?: string;
  };
};

function hasRealFormUrl(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export default async function RegistrationPage() {
  const site = (await loadYaml("src/content/site.yaml")) as SiteContent;
  const formUrl = site?.registration?.formUrl;
  const showEmbed = hasRealFormUrl(formUrl);

  return (
    <Box bg="#FFFFFF" minH="100vh">
      <Container
        maxW="1440px"
        px={{ base: 6, md: 10, lg: 12 }}
        pt={{ base: 8, md: 10, lg: 12 }}
        pb={{ base: 14, md: 20 }}
      >
        <Heading
          as="h1"
          className={anta.className}
          textAlign="center"
          color="#000000"
          fontWeight="400"
          fontSize={{ base: "28px", md: "42px", lg: "56px" }}
          lineHeight="1.08"
          mb={{ base: 8, md: 12, lg: 14 }}
        >
          UMOJA Basketball Registration
        </Heading>

        <Box
          maxW="1180px"
          mx="auto"
          bg="#E7E6DE"
          borderRadius="20px"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.18)"
          overflow="hidden"
        >
          <Box h="18px" bg="#AAA45F" />

          <Box p={{ base: 5, md: 8, lg: 10 }}>
            {showEmbed ? (
              <>
                <Box
                  bg="#FFFFFF"
                  borderRadius="14px"
                  overflow="hidden"
                  border="1px solid #D9D9D9"
                >
                  <iframe
                    src={formUrl}
                    title="UMOJA registration form"
                    style={{
                      width: "100%",
                      height: "1100px",
                      border: "0",
                      display: "block",
                    }}
                  />
                </Box>

                <Text mt={5} textAlign="center" fontSize="14px" color="#555555">
                  Having trouble viewing the form?{" "}
                  <Link
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#7A4A12"
                    textDecoration="underline"
                    fontWeight="600"
                  >
                    Open it in a new tab
                  </Link>
                </Text>
              </>
            ) : (
              <Box
                bg="#FFFFFF"
                borderRadius="14px"
                border="1px solid #D9D9D9"
                px={{ base: 6, md: 10, lg: 12 }}
                py={{ base: 8, md: 10, lg: 12 }}
                minH={{ base: "260px", md: "300px", lg: "320px" }}
              >
                <Heading
                  as="h2"
                  color="#1A1A1A"
                  fontWeight="700"
                  fontSize={{ base: "24px", md: "36px", lg: "44px" }}
                  lineHeight="1.08"
                  mb={6}
                  maxW="900px"
                >
                  UMOJA Summer Basketball Skills Camp
                </Heading>

                <Text
                  color="#2A2A2A"
                  fontSize={{ base: "16px", md: "20px" }}
                  lineHeight="1.55"
                  maxW="900px"
                >
                  TODO: Add the embedded registration form URL in{" "}
                  <Text as="span" fontWeight="700">
                    src/content/site.yaml
                  </Text>{" "}
                  under{" "}
                  <Text as="span" fontWeight="700">
                    registration.formUrl
                  </Text>
                  . Once provided, this page should display the live embedded
                  form here.
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}