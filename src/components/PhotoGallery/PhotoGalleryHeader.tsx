import { Box, Heading, Text } from "@chakra-ui/react";

type PhotoGalleryHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PhotoGalleryHeader({ title, subtitle }: PhotoGalleryHeaderProps) {
  return (
    <Box as="header" mb="1.5rem" textAlign="center">
      <Heading
        as="h2"
        fontSize={{ base: "2rem", md: "clamp(2rem, 4vw, 3.25rem)" }}
        color="#151515"
        fontFamily="var(--font-lato), Arial, Helvetica, sans-serif"
        fontWeight="700"
        letterSpacing="-0.05em"
        lineHeight="1"
      >
        {title}
      </Heading>
      <Text
        mt="0.75rem"
        color="#3f3a36"
        fontFamily="var(--font-lato), Arial, Helvetica, sans-serif"
        fontSize="1rem"
        fontWeight="400"
      >
        {subtitle}
      </Text>
    </Box>
  );
}
