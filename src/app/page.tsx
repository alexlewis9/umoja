import { Box, Container, Flex, Heading, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import path from "path";
import HomeOverview from "@/components/HomeOverview/HomeOverview";
import WhatWeOfferCard from "@/components/WhatWeOfferCard/WhatWeOfferCard";
import { loadYaml } from "@/lib/loadYaml";

type OfferItem = {
  title: string;
  description: string;
};

type SiteContent = {
  home?: {
    whatWeOffer?: {
      heading?: string;
      items?: OfferItem[];
    };
  };
};

type AboutContent = {
  mission?: {
    content?: string;
  };
};

type PhotoContent = {
  items?: Array<{
    type?: string;
    src?: string;
    alt?: string;
    label?: string;
  }>;
};

export default async function Home() {
  const contentPath = (fileName: string) =>
    path.join(process.cwd(), "src/content", fileName);

  const [site, about, photos] = await Promise.all([
    loadYaml(contentPath("site.yaml")) as Promise<SiteContent>,
    loadYaml(contentPath("about.yaml")) as Promise<AboutContent>,
    loadYaml(contentPath("photos.yaml")) as Promise<PhotoContent>,
  ]);

  const offer = site.home?.whatWeOffer;

  return (
    <Box bg="homePageBg" color="homeText">
      <Container maxW="homePage" px="homePageX" py="homeSectionY">
        <Stack gap="homeSectionY">
          <HomeOverview missionContent={about.mission?.content} photos={photos.items} />

          <Stack as="section" gap="homeSectionGap" textAlign="center">
            <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
              {offer?.heading ?? "What we offer"}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="homeCardGap">
              {(offer?.items ?? []).map((item) => (
                <WhatWeOfferCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  maxW="homeTodayImage"
                  w="full"
                  mx="auto"
                />
              ))}
            </SimpleGrid>
          </Stack>

          <Flex justify="center" pt="homeSectionGap">
            <Link asChild fontSize="homeLink" color="homeText" fontWeight="bold">
              <NextLink href="/registration">Register with UMOJA</NextLink>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
