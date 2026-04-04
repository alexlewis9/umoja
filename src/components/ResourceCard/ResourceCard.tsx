import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";
import { RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC } from "./resourceCardPlaceholder";

type ResourceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
};

export default function ResourceCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  onClick,
}: ResourceCardProps) {
  const cardContents = (
    <>
      <Flex
        align="flex-start"
        justify="space-between"
        gap={4}
        p={5}
        bg="orange.900"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="fg.inverted"
          flex="1"
          minW={0}
          lineClamp={2}
        >
          {title}
        </Text>

        <Box
          w="24"
          h="16"
          bg="bg.surface"
          borderRadius="md"
          boxShadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              maxW="70%"
              maxH="70%"
              objectFit="contain"
            />
          ) : (
            <Box
              w="70%"
              h="70%"
              bg="bg.muted"
              borderRadius="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC}
                alt="Placeholder"
                boxSize={6}
                opacity={0.9}
              />
            </Box>
          )}
        </Box>
      </Flex>

      <Box p={5}>
        <Text fontSize="sm" color="fg.muted" lineClamp={4}>
          {description}
        </Text>
      </Box>
    </>
  );

  if (onClick) {
    return (
      <chakra.button
        type="button"
        onClick={onClick}
        w="72"
        bg="bg.surface"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="border"
        boxShadow="sm"
        overflow="hidden"
        textAlign="left"
        cursor="pointer"
        _hover={{ boxShadow: "md" }}
        _active={{ transform: "scale(0.99)" }}
        transition="box-shadow 120ms ease, transform 120ms ease"
      >
        {cardContents}
      </chakra.button>
    );
  }

  return (
    <Box
      as="div"
      w={{ base: "full", sm: "72" }}
      bg="bg.surface"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="border"
      boxShadow="sm"
      overflow="hidden"
      textAlign="left"
    >
      {cardContents}
    </Box>
  );
}
