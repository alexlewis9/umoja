import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import path from "path";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import WhatWeOfferCard from "@/components/WhatWeOfferCard/WhatWeOfferCard";
import { loadYaml } from "../lib/loadYaml";

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
    voices?: {
      heading?: string;
      subtitle?: string;
    };
  };
};

type TestimonialsContent = {
  testimonials?: Array<{
    quote: string;
    name: string;
    rating?: number;
  }>;
};

export default async function Home() {
  const sitePath = path.join(process.cwd(), "src/content/site.yaml");
  const testimonialsPath = path.join(
    process.cwd(),
    "src/content/testimonials.yaml",
  );

  const site = (await loadYaml(sitePath)) as SiteContent;
  const testimonials = (await loadYaml(
    testimonialsPath,
  )) as TestimonialsContent;

  const offer = site.home?.whatWeOffer;
  const voices = site.home?.voices;
  const testimonialItems = testimonials.testimonials ?? [];

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <Box as="section" mb={{ base: 12, md: 16 }}>
        <Heading as="h2" size="3xl" color="black" mb={3}>
          {offer?.heading}
        </Heading>
      </Box>
      <Box as="section" mb={{ base: 12, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={6}
          justifyItems="center"
        >
          {(offer?.items ?? []).map((item) => (
            <WhatWeOfferCard
              key={item.title}
              title={item.title}
              description={item.description}
              w="full"
              maxW="sm"
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box as="section">
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="start">
          <Box gridColumn={{ base: "span 1", lg: "span 4" }} textAlign="left">
            <Heading as="h2" size="3xl" color="black" mb={3}>
              {voices?.heading}
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="md">
              {voices?.subtitle}
            </Text>
          </Box>
          <SimpleGrid
            gridColumn={{ base: "span 1", lg: "span 8" }}
            columns={{ base: 1, md: 2 }}
            gap={4}
            justifyItems="center"
          >
            {testimonialItems.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.quote}`}
                quote={testimonial.quote}
                name={testimonial.name}
                rating={testimonial.rating}
              />
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
