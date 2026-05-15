import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";
import { RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC } from "./resourceCardPlaceholder";

type ResourceItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ResourceCardProps = {
  resource: ResourceItem;
  onClick?: () => void;
};

export default function ResourceCard({
  resource,
  onClick,
}: ResourceCardProps) {
  const cardContents = (
    <>
      <Flex
        align="flex-start"
        justify="space-between"
        gap={4}
        p={5}
        bg="linear-gradient(145deg, #2b1206, #632504)"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="fg.inverted"
          flex="1"
          minW={0}
          lineClamp={2}
        >
          {resource.title}
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
          {resource.imageSrc ? (
            <Image
              src={resource.imageSrc}
              alt={resource.imageAlt}
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

      <Box p={5} bg="whiteAlpha.900">
        <Text fontSize="sm" color="fg.muted" lineClamp={4}>
          {resource.description}
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
