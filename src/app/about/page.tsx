import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import path from "path";
import TeamCard from "@/components/TeamCard/TeamCard";
import { loadYaml } from "@/lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type AboutContent = {
  hero?: {
    title?: string;
    subtitle?: string;
  };
  mission?: {
    title?: string;
    content?: string;
  };
  story?: {
    title?: string;
    content?: string;
  };
  team?: {
    title?: string;
    subtitle?: string;
  };
};

type TeamContent = {
  members?: Array<{
    name: string;
    position: string;
    description?: string;
    imageUrl?: string;
  }>;
};

export default async function AboutPage() {
  const aboutPath = path.join(process.cwd(), "src/content/about.yaml");
  const teamPath = path.join(process.cwd(), "src/content/team.yaml");

  const about = (await loadYaml(aboutPath)) as AboutContent;
  const team = (await loadYaml(teamPath)) as TeamContent;

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <PageHeader title={about.hero?.title} subtitle={about.hero?.subtitle} />
      <Box textAlign="center">
        <Heading as="h2" size="3xl" color="black" textAlign="center" mb={3}>
          {about.team?.title}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={6}
          justifyItems="center"
        >
          {(team.members ?? []).map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              position={member.position}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
