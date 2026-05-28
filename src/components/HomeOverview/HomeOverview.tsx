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
  alt?: string;
  label?: string;
};

type HomeOverviewProps = {
  photoGalleryHref?: string;
  missionContent?: string;
  photos?: HomeOverviewPhoto[];
};

const fallbackHeroImage = "/umoja_logo_new.jpg";
const introCopy =
  "General Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const detailCopy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
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
  photoGalleryHref = "/photos",
  missionContent,
  photos = [],
}: HomeOverviewProps) {
  const imagePhotos = photos.filter((photo) => photo.src && photo.type !== "video");
  const heroImage = imagePhotos[0];

  return (
    <Stack as="section" gap="homeSectionY" color="homeText" w="full">
      <Box position="relative" h="homeHero" overflow="hidden" borderRadius="homeCard">
        <Image
          src={heroImage?.src ?? fallbackHeroImage}
          alt={heroImage?.alt ?? "UMOJA hero placeholder"}
          w="homeHeroImage"
          h="homeHeroImage"
          objectFit="cover"
        />
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
          This is FAMILY. This is JOY. This is UMOJA.
        </Heading>
      </Box>

      <Stack gap="homeSectionGap" textAlign="center">
        <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
          How UMOJA started
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="homeCardInnerGap"
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
              {introCopy}
            </Heading>
            <Text fontSize="homeBody" color="homeMutedText" lineHeight="tall">
              {missionContent ?? detailCopy}
            </Text>
          </Stack>
          <Box maxW="homePromoImage" w="full" mx="auto">
            <HomeImagePlaceholder height="homePromoHeight" label="Insert banner pic here" />
          </Box>
        </SimpleGrid>
      </Stack>

      <Stack gap="homeSectionGap" textAlign="center">
        <Heading as="h2" fontSize="homeSectionTitle" lineHeight="short" fontWeight="bold">
          UMOJA Today
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="homeCardGap"
          p="homeCardPadding"
          alignItems="center"
        >
          <Stack gap="homeCardInnerGap" textAlign="right">
            <Box bg="homeMediaBg" borderRadius="homeMedia" p="homeCardPadding">
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="homeCardInnerGap">
                {todayImageSlots.map((slot, index) => {
                  const image = imagePhotos[index];

                  return image?.src ? (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt ?? image.label ?? "UMOJA photo placeholder"}
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
              <NextLink href={photoGalleryHref}>View photo gallery</NextLink>
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
              {introCopy}
            </Heading>
            <Text fontSize="homeBody" color="homeMutedText" lineHeight="tall" textAlign="right">
              {detailCopy}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
