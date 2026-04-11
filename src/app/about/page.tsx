import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import path from "path";
import TeamCard from "@/components/TeamCard/TeamCard";
import { loadYaml } from "@/lib/loadYaml";

type AboutContent = {
  hero?: {
    title?: string;
    subtitle?: string;
  };
  mission?: {
    title?: string;
    content?: string;
    images?: Array<{
      src?: string;
      alt?: string;
    }>;
  };
  story?: {
    title?: string;
    content?: string;
    images?: Array<{
      src?: string;
      alt?: string;
    }>;
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

type GalleryImage = {
  src: string;
  alt: string;
};

function getGalleryImages(
  items: Array<{
    src?: string;
    alt?: string;
  }> = []
): GalleryImage[] {
  return items
    .filter((item): item is GalleryImage => Boolean(item?.src))
    .map((item) => ({
      src: item.src,
      alt: item.alt ?? "UMOJA community photo",
    }));
}

export default async function AboutPage() {
  const aboutPath = path.join(process.cwd(), "src/content/about.yaml");
  const teamPath = path.join(process.cwd(), "src/content/team.yaml");

  const about = (await loadYaml(aboutPath)) as AboutContent;
  const team = (await loadYaml(teamPath)) as TeamContent;

  const storySourceImages = getGalleryImages(about.story?.images);
  const storyImages = [
    storySourceImages[0],
    storySourceImages[1] ?? storySourceImages[0],
    storySourceImages[2] ?? storySourceImages[1] ?? storySourceImages[0],
  ].filter(Boolean) as GalleryImage[];

  return (
    <Container maxW="960px" py={{ base: 8, md: 12 }} mx="auto" w="full">
      <Box
        bg="white"
        borderWidth="1px"
        borderColor="rgba(60, 19, 0, 0.16)"
        boxShadow="lg"
        px={{ base: 4, md: 6 }}
        py={{ base: 6, md: 8 }}
        position="relative"
      >
        <Stack gap={{ base: 8, md: 10 }} align="center">
          <Stack gap={2} textAlign="center" maxW="3xl">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="black"
              fontFamily="var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            >
              {about.hero?.title ?? "About Us..."}
            </Heading>
            {about.hero?.subtitle ? (
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
                {about.hero.subtitle}
              </Text>
            ) : null}
          </Stack>

          <Box
            as="section"
            w="full"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.35)"
            borderRadius="xl"
            boxShadow="md"
            px={{ base: 5, md: 10 }}
            py={{ base: 6, md: 8 }}
          >
            <Stack gap={4} textAlign="center" w="full">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                color="gray.900"
                fontFamily="var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
              >
                {about.mission?.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "2xl" }}
                color="gray.700"
                lineHeight="tall"
                maxW="none"
              >
                {about.mission?.content}
              </Text>
            </Stack>
          </Box>

          <Box as="section" w="full">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }} alignItems="center">
              <Stack gap={3} textAlign="center" px={{ base: 2, md: 4 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="gray.900"
                  fontFamily="var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                >
                  {about.story?.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.700" lineHeight="tall">
                  {about.story?.content}
                </Text>
              </Stack>

              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                gridTemplateRows="repeat(2, minmax(0, 1fr))"
                gap={3}
                h={{ base: "260px", md: "320px" }}
              >
                <Box
                  gridColumn="span 1"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  borderWidth="1px"
                  borderColor="rgba(60, 19, 0, 0.12)"
                >
                  <Image
                    src={storyImages[0]?.src}
                    alt={storyImages[0]?.alt ?? "UMOJA story photo"}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  gridRow="span 2"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  borderWidth="1px"
                  borderColor="rgba(60, 19, 0, 0.12)"
                >
                  <Image
                    src={storyImages[1]?.src}
                    alt={storyImages[1]?.alt ?? "UMOJA basketball photo"}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  borderWidth="1px"
                  borderColor="rgba(60, 19, 0, 0.12)"
                >
                  <Image
                    src={storyImages[2]?.src}
                    alt={storyImages[2]?.alt ?? "UMOJA community photo"}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Stack as="section" w="full" gap={5} align="center">
            <Stack gap={2} textAlign="center" maxW="2xl">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="black"
                fontFamily="var(--font-anta), Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
              >
                {about.team?.title}
              </Heading>
              {about.team?.subtitle ? (
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
                  {about.team.subtitle}
                </Text>
              ) : null}
            </Stack>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3 }}
              gap={{ base: 5, md: 6 }}
              justifyItems="center"
              w="full"
              alignItems="start"
            >
              {(team.members ?? []).slice(0, 3).map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  position={member.position}
                  description={member.description}
                  imageUrl={member.imageUrl}
                />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>

        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          h="10px"
          bg="brandBannerGradient"
        />
      </Box>
    </Container>
  );
}
