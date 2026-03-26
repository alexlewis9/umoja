import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { AppButton } from "@/components/Button/Button";

export default function ButtonTestPage() {
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          Button test page
        </Heading>

        <Text fontSize="lg" color="gray.600" mb={6}>
          If you can see buttons below, the component works.
        </Text>

        <AppButton>Solid button</AppButton>

        <Box h={4} />

        <AppButton variant="outline">Outline button</AppButton>
      </Box>
    </Container>
  );
}