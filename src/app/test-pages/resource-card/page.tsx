import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";

export default function ResourceCardTestPage() {
  return (
    <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
      <Heading as="h1" size="lg" mb={8}>
        Resource Card Test
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <ResourceCard
          title="Community Toolkit"
          description="Templates, checklists, and guides to help you launch and manage
          local programs effectively without reinventing the wheel."
        />
        <ResourceCard
          title="Funding Guide"
          description="A step-by-step roadmap for identifying grants, preparing budgets,
          and submitting strong proposals."
        />
      </SimpleGrid>
    </Container>
  );
}
