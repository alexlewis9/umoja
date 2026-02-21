import { Box, Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";
import { RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC } from "@/components/ResourceCard/resourceCardPlaceholder";

type ResourceDetailCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
};

export default function ResourceDetailCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  onClick,
}: ResourceDetailCardProps) {
  const content = (
    <>
      <Flex
        align="center"
        justify="space-between"
        gap={8}
        px={{ base: 6, md: 12 }}
        py={{ base: 5, md: 7 }}
        bg="orange.900"
      >
        <Heading
          as="h2"
          color="fg.inverted"
          fontWeight="700"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="shorter"
        >
          {title}
        </Heading>

        <Box
          w={{ base: "44", md: "96" }}
          h={{ base: "24", md: "42" }}
          bg="bg.surface"
          borderRadius={{ base: "lg", md: "2xl" }}
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
          p={4}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              maxW="100%"
              maxH="100%"
              objectFit="contain"
            />
          ) : (
            <Box
              w="100%"
              h="100%"
              bg="bg.muted"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC}
                alt="Placeholder"
                boxSize={{ base: 10, md: 16 }}
                opacity={0.9}
              />
            </Box>
          )}
        </Box>
      </Flex>

      <Box px={{ base: 6, md: 12 }} py={{ base: 6, md: 8 }}>
        <Text fontSize={{ base: "lg", md: "3xl" }} color="fg" lineHeight="tall">
          {description}
        </Text>
      </Box>
    </>
  );

  const baseProps = {
    w: "full",
    maxW: "container.xl",
    bg: "bg.subtle",
    borderRadius: "2xl",
    borderWidth: "1px",
    borderColor: "border",
    boxShadow: "md",
    overflow: "hidden",
    textAlign: "left" as const,
  };

  if (onClick) {
    return (
      <chakra.button
        type="button"
        onClick={onClick}
        {...baseProps}
        cursor="pointer"
        _hover={{ boxShadow: "lg" }}
        transition="box-shadow 120ms ease"
      >
        {content}
      </chakra.button>
    );
  }

  return <Box {...baseProps}>{content}</Box>;
}
