import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export type HomeOverviewPhoto = {
  type?: string;
  src?: string;
  poster?: string;
  alt?: string;
  label?: string;
};

export type HomeOverviewContent = {
  heroTitle?: string;
  heroMedia?: HomeOverviewPhoto;
  started?: {
    heading?: string;
    intro?: string;
    body?: string;
    banner?: HomeOverviewPhoto;
  };
  today?: {
    heading?: string;
    intro?: string;
    body?: string;
    galleryLinkLabel?: string;
  };
};

type HomeOverviewProps = {
  content?: HomeOverviewContent;
  photoGalleryHref?: string;
  missionContent?: string;
  photos?: HomeOverviewPhoto[];
};

const fallbackHeroImage = "/umoja_logo_new.jpg";
const todayImageSlots = ["today-photo-one", "today-photo-two", "today-photo-three"];

function HomeImagePlaceholder({
  height = "homeMediaHeight",
  label = "Insert pic here",
}: {
  height?: string;
  label?: string;
}) {
  return (
    <Box
      h={height}
      w="homeHeroImage"
      borderRadius="homeCard"
      bg="homePlaceholderBg"
      color="homePlaceholderText"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      fontSize="homeBody"
      fontWeight="bold"
    >
      {label}
    </Box>
  );
}

export default function HomeOverview({
  content,
  photoGalleryHref = "/photos",
  missionContent,
  photos = [],
}: HomeOverviewProps) {
  const mediaPhotos = photos.filter((photo) => photo.src);
  const fallbackHeroMedia = mediaPhotos[0];
  const heroMedia = content?.heroMedia?.src ? content.heroMedia : fallbackHeroMedia;
  const todayMedia = content?.heroMedia?.src
    ? mediaPhotos
    : mediaPhotos.filter((photo) => photo.src !== fallbackHeroMedia?.src);
  const startedBody = content?.started?.body ?? missionContent;

  return (
    <Stack as="section" gap="homeSectionY" color="homeText" w="full">
      <Box
        position="relative"
        h="homeHero"
        w="full"
        overflow="hidden"
        borderRadius="homeCard"
      >
        {heroMedia?.type === "video" && heroMedia.src ? (
          <video
            src={heroMedia.src}
            poster={heroMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Image
            src={heroMedia?.src ?? fallbackHeroImage}
            alt={heroMedia?.alt ?? "UMOJA hero placeholder"}
            w="full"
            h="full"
            objectFit="cover"
          />
        )}
        <Box position="absolute" inset="homeOverlayInset" bg="homeHeroOverlay" />
        <Heading
          as="h1"
          position="absolute"
          insetInline="homeHeroTextInset"
          bottom="homeHeroTextInset"
          color="homeOverlayText"
          fontSize="homeHeroTitle"
          lineHeight="short"
          textShadow="homeHeroText"
        >
          {content?.heroTitle ?? "This is FAMILY. This is JOY. This is UMOJA."}
        </Heading>
      </Box>

      <Stack gap="homeSectionGap" textAlign="center">
        <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
          {content?.started?.heading ?? "How UMOJA started"}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "homeCardGap", md: 12 }}
          p="homeCardPadding"
          alignItems="center"
        >
          <Stack gap="homeCardInnerGap" textAlign="left">
            <Heading
              as="h3"
              fontSize="homeLead"
              color="homeMutedText"
              lineHeight="tall"
              fontWeight="bold"
            >
              {content?.started?.intro}
            </Heading>
            {startedBody ? (
              <Text fontSize="homeBody" color="homeMutedText" lineHeight="tall">
                {startedBody}
              </Text>
            ) : null}
          </Stack>
          <Box maxW={{ base: "full", md: "560px" }} w="full" mx="auto">
            {content?.started?.banner?.src ? (
              <Image
                src={content.started.banner.src}
                alt={content.started.banner.alt ?? content.started.banner.label ?? ""}
                h={{ base: "140px", md: "170px" }}
                w="full"
                objectFit="cover"
                borderRadius="homeCard"
              />
            ) : (
              <HomeImagePlaceholder height="170px" label="Insert banner pic here" />
            )}
          </Box>
        </SimpleGrid>
      </Stack>

      <Stack gap="homeSectionGap" textAlign="center">
        <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
          {content?.today?.heading ?? "UMOJA Today"}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "homeCardGap", md: 10 }}
          p="homeCardPadding"
          alignItems="center"
        >
          <Stack gap="homeCardInnerGap" textAlign="right" align="center">
            <Box bg="homeMediaBg" borderRadius="homeMedia" p="homeCardPadding">
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="homeCardInnerGap">
                {todayImageSlots.map((slot, index) => {
                  const media = todayMedia[index];

                  return media?.type === "video" && media.src ? (
                    <video
                      key={media.src}
                      src={media.src}
                      poster={media.poster}
                      controls
                      style={{
                        width: "100%",
                        height: "136px",
                        objectFit: "cover",
                        borderRadius: "14px",
                      }}
                    />
                  ) : media?.src ? (
                    <Image
                      key={media.src}
                      src={media.src}
                      alt={media.alt ?? media.label ?? "UMOJA photo placeholder"}
                      h="homeMediaHeight"
                      w="homeHeroImage"
                      objectFit="cover"
                      borderRadius="homeCard"
                    />
                  ) : (
                    <HomeImagePlaceholder key={slot} />
                  );
                })}
              </SimpleGrid>
            </Box>
            <Link asChild fontSize="homeLink" color="homeText" fontWeight="bold">
              <NextLink href={photoGalleryHref}>
                {content?.today?.galleryLinkLabel ?? "View photo gallery"}
              </NextLink>
            </Link>
          </Stack>

          <Stack gap="homeCardInnerGap">
            <Heading
              as="h3"
              fontSize="homeLead"
              color="homeMutedText"
              lineHeight="tall"
              fontWeight="bold"
              textAlign="right"
            >
              {content?.today?.intro}
            </Heading>
            <Text fontSize="homeBody" color="homeMutedText" lineHeight="tall" textAlign="right">
              {content?.today?.body}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
