import { Box, Button, Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";
import { RESOURCE_CARD_PLACEHOLDER_IMAGE_SRC } from "@/components/ResourceCard/resourceCardPlaceholder";

type ResourceItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ResourceDetailCardProps = {
  resource: ResourceItem;
  onClick?: () => void;
  onClose: () => void;
};

export default function ResourceDetailCard({
  resource,
  onClick,
  onClose,
}: ResourceDetailCardProps) {
  const content = (
    <>
      <Flex
        align="center"
        justify="space-between"
        gap={8}
        px={{ base: 6, md: 12 }}
        py={{ base: 5, md: 7 }}
        bg="linear-gradient(145deg, #2b1206, #632504)"
      >
        <Heading
          as="h2"
          color="fg.inverted"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "2xl" }}
          lineHeight="shorter"
        >
          {resource.title}
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
          {resource.imageSrc ? (
            <Image
              src={resource.imageSrc}
              alt={resource.imageAlt}
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
        <Text fontSize={{ base: "sm", md: "lg" }} color="fg">
          {resource.description}
        </Text>
      </Box>
    </>
  );

  const baseProps = {
    w: "full",
    maxW: "container.md",
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

  return (
    <Box {...baseProps} position="relative">
      <Button
        position="absolute"
        top={4}
        right={4}
        zIndex={1}
        size="sm"
        borderRadius="full"
        bg="whiteAlpha.900"
        color="blackAlpha.700"
        p={1}
        boxShadow="sm"
        onClick={onClose}
      >
        Close
      </Button>

      {content}
    </Box>
  );
}
