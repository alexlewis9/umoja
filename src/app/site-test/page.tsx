import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import path from "path";
import FAQTable from "@/components/FAQTable/FAQTable";
import HomeOverview from "@/components/HomeOverview/HomeOverview";
import PageHeader from "@/components/PageHeader/PageHeader";
import PhotoGallery, {
  type PhotoGalleryProps,
} from "@/components/PhotoGallery/PhotoGallery";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
import ResourceGrid from "@/components/ResourceGrid/ResourceGrid";
import TeamCard from "@/components/TeamCard/TeamCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
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
    voices?: {
      heading?: string;
      subtitle?: string;
    };
  };
};

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

type TestimonialsContent = {
  testimonials?: Array<{
    quote: string;
    name: string;
    rating?: number;
  }>;
};

type EventsContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  events?: Array<{
    title: string;
    date?: string;
    time?: string;
    location?: string;
    description?: string;
    imageSrc?: string;
  }>;
};

type ResourcesContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  resources?: Array<{
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
  }>;
};

type RegistrationContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  form?: {
    embedUrl?: string;
  };
};

type FAQContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
};

const sections = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#resources", label: "Resources" },
  { href: "#photos", label: "Photos" },
  { href: "#registration", label: "Registration" },
  { href: "#faqs", label: "FAQs" },
];

async function loadContent() {
  const contentPath = (fileName: string) =>
    path.join(process.cwd(), "src/content", fileName);

  const [
    site,
    about,
    team,
    testimonials,
    events,
    resources,
    photos,
    registration,
    faq,
  ] = await Promise.all([
    loadYaml(contentPath("site.yaml")) as Promise<SiteContent>,
    loadYaml(contentPath("about.yaml")) as Promise<AboutContent>,
    loadYaml(contentPath("team.yaml")) as Promise<TeamContent>,
    loadYaml(contentPath("testimonials.yaml")) as Promise<TestimonialsContent>,
    loadYaml(contentPath("events.yaml")) as Promise<EventsContent>,
    loadYaml(contentPath("resources.yaml")) as Promise<ResourcesContent>,
    loadYaml(contentPath("photos.yaml")) as Promise<PhotoGalleryProps>,
    loadYaml(contentPath("registration.yaml")) as Promise<RegistrationContent>,
    loadYaml(contentPath("faq.yaml")) as Promise<FAQContent>,
  ]);

  return {
    site,
    about,
    team,
    testimonials,
    events,
    resources,
    photos,
    registration,
    faq,
  };
}

export default async function SiteTestPage() {
  const {
    site,
    about,
    team,
    testimonials,
    events,
    resources,
    photos,
    registration,
    faq,
  } = await loadContent();

  const offer = site.home?.whatWeOffer;
  const voices = site.home?.voices;

  return (
    <Box bg="white" color="black">
      <Box
        as="header"
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="white"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="1200px" px={{ base: 6, md: 8 }} py={4}>
          <Flex align="center" justify="space-between" gap={5} wrap="wrap">
            <Link asChild fontWeight="800" color="orange.900">
              <NextLink href="/site-test">UMOJA Site Test</NextLink>
            </Link>
            <Flex as="nav" gap={{ base: 3, md: 5 }} wrap="wrap">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  color="gray.700"
                  fontSize="sm"
                  fontWeight="700"
                  _hover={{ color: "orange.800" }}
                >
                  {section.label}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="1200px" px={{ base: 6, md: 8 }} py={{ base: 12, md: 16 }}>
        <Stack gap={{ base: 16, md: 24 }}>
          <Box id="about">
            <HomeOverview
              photoGalleryHref="#photos"
              missionContent={about.mission?.content}
              photos={photos.items}
            />
          </Box>

          <Box as="section" id="programs">
            <PageHeader
              title={offer?.heading}
              subtitle="A combined test of the current program, testimonial, and content components."
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} justifyItems="center">
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
            <PageHeader
              title={about.team?.title}
              subtitle={about.team?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6} justifyItems="center">
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

          <Box as="section">
            <PageHeader
              title={voices?.heading}
              subtitle={voices?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} justifyItems="center">
              {(testimonials.testimonials ?? []).map((testimonial) => (
                <TestimonialCard
                  key={`${testimonial.name}-${testimonial.quote}`}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  rating={testimonial.rating}
                />
              ))}
            </SimpleGrid>
          </Box>

          <Box as="section" id="events">
            <PageHeader
              title={events.header?.title}
              subtitle={events.header?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
              {(events.events ?? []).map((event) => (
                <Box
                  key={event.title}
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  bg="white"
                >
                  {event.imageSrc ? (
                    <Image src={event.imageSrc} alt="" h="180px" w="full" objectFit="cover" />
                  ) : null}
                  <Stack gap={3} p={5}>
                    <Heading as="h3" size="lg">
                      {event.title}
                    </Heading>
                    <Text color="orange.900" fontWeight="700">
                      {[event.date, event.time].filter(Boolean).join(" | ")}
                    </Text>
                    <Text color="gray.700" fontWeight="700">
                      {event.location}
                    </Text>
                    <Text color="gray.700" lineHeight="1.7">
                      {event.description}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box as="section" id="resources">
            <PageHeader
              title={resources.header?.title}
              subtitle={resources.header?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            <ResourceGrid
              resources={resources.resources ?? []}
              columns={{ base: 1, md: 2, lg: 3 }}
              getResourceKey={(resource) => resource.title}
              renderCard={(resource) => (
                <ResourceCard
                  title={resource.title}
                  description={resource.description}
                  imageSrc={resource.imageSrc}
                  imageAlt={resource.imageAlt ?? resource.title}
                />
              )}
            />
          </Box>

          <Box as="section" id="photos">
            <PhotoGallery header={photos.header} items={photos.items ?? []} />
          </Box>

          <Box as="section" id="registration">
            <PageHeader
              title={registration.header?.title}
              subtitle={registration.header?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            {registration.form?.embedUrl ? (
              <Box
                as="iframe"
                src={registration.form.embedUrl}
                title="UMOJA registration form"
                w="full"
                h={{ base: "520px", md: "680px" }}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                bg="white"
              />
            ) : (
              <Text textAlign="center" color="gray.700">
                Registration form URL is not configured.
              </Text>
            )}
          </Box>

          <Box as="section" id="faqs" maxW="4xl" mx="auto" w="full">
            <PageHeader
              title={faq.header?.title}
              subtitle={faq.header?.subtitle}
              titleSize="3xl"
              mb={{ base: 8, md: 10 }}
            />
            {faq.faqItems ? <FAQTable faqData={faq.faqItems} /> : null}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
