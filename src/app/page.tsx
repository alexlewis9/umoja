import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import path from "path";
import HomeOverview from "@/components/HomeOverview/HomeOverview";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import WhatWeOfferCard from "@/components/WhatWeOfferCard/WhatWeOfferCard";
import { loadYaml } from "@/lib/loadYaml";

type OfferItem = {
  title: string;
  description: string;
};

type HomeMedia = {
  type?: string;
  src?: string;
  poster?: string;
  alt?: string;
  label?: string;
};

type HomeOverviewContent = {
  heroTitle?: string;
  heroMedia?: HomeMedia;
  started?: {
    heading?: string;
    intro?: string;
    body?: string;
    banner?: HomeMedia;
  };
  today?: {
    heading?: string;
    intro?: string;
    body?: string;
    galleryLinkLabel?: string;
  };
};

type SiteContent = {
  home?: {
    overview?: HomeOverviewContent;
    registration?: {
      showButton?: boolean;
      label?: string;
    };
    whatWeOffer?: {
      heading?: string;
      items?: OfferItem[];
    };
    voices?: {
      heading?: string;
      subtitle?: string;
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
    poster?: string;
    alt?: string;
    label?: string;
  }>;
};

type TestimonialContent = {
  testimonials?: Array<{
    quote: string;
    name: string;
    rating?: number;
  }>;
};

export default async function Home() {
  const contentPath = (fileName: string) =>
    path.join(process.cwd(), "src/content", fileName);

  const [site, about, photos, testimonialsContent] = await Promise.all([
    loadYaml(contentPath("site.yaml")) as Promise<SiteContent>,
    loadYaml(contentPath("about.yaml")) as Promise<AboutContent>,
    loadYaml(contentPath("photos.yaml")) as Promise<PhotoContent>,
    loadYaml(contentPath("testimonials.yaml")) as Promise<TestimonialContent>,
  ]);

  const offer = site.home?.whatWeOffer;
  const offerItems = offer?.items ?? [];
  const testimonials = testimonialsContent.testimonials ?? [];
  const showRegistrationButton = site.home?.registration?.showButton ?? false;

  return (
    <Box bg="homePageBg" color="homeText">
      <Container maxW="homePage" w="full" mx="auto" px="homePageX" py="homeSectionY">
        <Stack gap="homeSectionY" align="center" w="full" mx="auto">
          <HomeOverview
            content={site.home?.overview}
            missionContent={about.mission?.content}
            photos={photos.items}
          />

          {offerItems.length > 0 ? (
            <Stack as="section" gap="homeSectionGap" textAlign="center" w="full" align="center">
              <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
                {offer?.heading ?? "What we offer"}
              </Heading>
              <Flex
                wrap="wrap"
                gap={{ base: 4, md: 8 }}
                w="full"
                maxW="1040px"
                justify="center"
              >
                {offerItems.map((item) => (
                  <WhatWeOfferCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    maxW="280px"
                    minH={{ base: "230px", md: "270px" }}
                    w="full"
                    px={{ base: 6, md: 7 }}
                    py={{ base: 8, md: 9 }}
                  />
                ))}
              </Flex>
            </Stack>
          ) : null}

          {testimonials.length > 0 ? (
            <Grid
              as="section"
              templateColumns={{ base: "1fr", lg: "0.85fr 1.5fr" }}
              gap={{ base: 6, lg: 12 }}
              w="full"
              alignItems="start"
            >
              <Stack gap={2} textAlign="center" align="center">
                <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
                  {site.home?.voices?.heading ?? "Voices of Our Community"}
                </Heading>
                {site.home?.voices?.subtitle ? (
                  <Text color="homeMutedText" fontSize={{ base: "lg", md: "xl" }}>
                    {site.home.voices.subtitle}
                  </Text>
                ) : null}
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${testimonial.quote}`}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    rating={testimonial.rating}
                  />
                ))}
              </SimpleGrid>
            </Grid>
          ) : null}

          {showRegistrationButton ? (
            <Box pt="homeSectionGap">
              <Button
                asChild
                size="xl"
                bg="orange.800"
                color="white"
                px={{ base: 8, md: 10 }}
                py={{ base: 6, md: 7 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                borderRadius="lg"
                _hover={{ bg: "orange.700", textDecoration: "none" }}
              >
                <NextLink href="/registration">
                  {site.home?.registration?.label ?? "Register with UMOJA"}
                </NextLink>
              </Button>
            </Box>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
