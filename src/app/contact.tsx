"use client";

import type { FormEvent } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const contactEmail = "info@durham1.ca";
const footerBrown = "#4f1a05";
const footerBrownDark = "#2b0d01";
const accentOrange = "#9f3e0d";
const warmSurface = "#fff8f1";

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <Text
      as="label"
      display="block"
      fontSize={{ base: "14px", md: "15px" }}
      fontWeight="700"
      color={footerBrownDark}
      mb={1}
    >
      {children}
      {required ? (
        <Text as="span" color={accentOrange} ml={1}>
          *
        </Text>
      ) : null}
    </Text>
  );
}

const fieldStyles = {
  bg: "#f4eee8",
  border: "0",
  borderBottom: "1px solid",
  borderBottomColor: "#b27857",
  borderRadius: "0",
  color: footerBrownDark,
  fontSize: "14px",
  px: 4,
  _placeholder: { color: "#9b8172" },
  _focusVisible: {
    bg: "#fffaf5",
    borderBottomColor: accentOrange,
    boxShadow: `0 1px 0 ${accentOrange}`,
    outline: "none",
  },
};

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Contact request from ${name || "DurhamONE website"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone || "Not provided"}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Box
      as="main"
      bg={footerBrown}
      color="white"
      minH="100vh"
      borderBottom="20px solid #000000"
    >
      <Container maxW="1120px" px={{ base: 5, md: 8 }} py={{ base: 12, md: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 0.95fr" }}
          gap={{ base: 10, lg: 12 }}
          alignItems="center"
        >
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg={warmSurface}
            boxShadow="0 20px 44px rgba(0, 0, 0, 0.32)"
            border="1px solid rgba(255, 255, 255, 0.18)"
            borderRadius="2px"
            px={{ base: 6, md: 8 }}
            py={{ base: 7, md: 9 }}
            maxW={{ base: "100%", lg: "520px" }}
            w="100%"
          >
            <Flex direction="column" gap={4}>
              <Box>
                <FieldLabel required>Name</FieldLabel>
                <Input
                  name="name"
                  placeholder="Full Name"
                  required
                  h="40px"
                  {...fieldStyles}
                />
              </Box>

              <Box>
                <FieldLabel>Phone</FieldLabel>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="(xxx) xxx xxx"
                  h="40px"
                  {...fieldStyles}
                />
              </Box>

              <Box>
                <FieldLabel required>Email</FieldLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="me@email.com"
                  required
                  h="40px"
                  {...fieldStyles}
                />
              </Box>

              <Box>
                <FieldLabel required>Message</FieldLabel>
                <Textarea
                  name="message"
                  placeholder="Type here..."
                  required
                  minH="90px"
                  resize="vertical"
                  {...fieldStyles}
                />
              </Box>

              <Button
                type="submit"
                bg={accentOrange}
                color="#ffffff"
                borderRadius="0"
                h="46px"
                mt={2}
                fontSize="17px"
                fontWeight="700"
                letterSpacing="0.02em"
                boxShadow="0 10px 22px rgba(79, 26, 5, 0.22)"
                _hover={{ bg: "#b95518" }}
                _active={{ bg: footerBrownDark }}
              >
                Send
              </Button>
            </Flex>
          </Box>

          <Box maxW="480px" justifySelf={{ base: "start", lg: "center" }}>
            <Heading
              as="h1"
              fontSize={{ base: "40px", md: "48px" }}
              lineHeight="1.05"
              fontWeight="700"
              color="#ffffff"
              mb={5}
            >
              Contact Us
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "24px", md: "27px" }}
              lineHeight="0.98"
              fontWeight="700"
              color="#f5c5a6"
              maxW="390px"
              mb={5}
            >
              We would be happy to hear from you
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "17px" }}
              lineHeight="1.38"
              color="rgba(255, 255, 255, 0.88)"
              maxW="450px"
            >
              Thank you for contacting DurhamONE. In order to respond to your
              inquiries in an expedient manner, please complete the required
              fields below. The optional phone field will only be used to assist
              with your inquiries.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
