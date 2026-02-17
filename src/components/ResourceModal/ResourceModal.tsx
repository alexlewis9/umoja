import { Box, Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";
import { RESOURCE_DETAIL_CARD_PLACEHOLDER_ICON } from "./resourceDetailCardPlaceholder";

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
        bg="#5A2A0F"
      >
        <Heading
          as="h2"
          color="white"
          fontWeight="700"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="1.05"
        >
          {title}
        </Heading>

        <Box
          w={{ base: "170px", md: "390px" }}
          h={{ base: "96px", md: "168px" }}
          bg="white"
          borderRadius={{ base: "lg", md: "2xl" }}
          boxShadow="0 4px 10px rgba(0,0,0,0.28)"
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
              bg="gray.100"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={RESOURCE_DETAIL_CARD_PLACEHOLDER_ICON}
                alt="Placeholder"
                boxSize={{ base: 10, md: 16 }}
                opacity={0.9}
              />
            </Box>
          )}
        </Box>
      </Flex>

      <Box px={{ base: 6, md: 12 }} py={{ base: 6, md: 8 }}>
        <Text fontSize={{ base: "lg", md: "3xl" }} color="gray.800" lineHeight="1.35">
          {description}
        </Text>
      </Box>
    </>
  );

  const baseProps = {
    w: "100%",
    maxW: "1220px",
    bg: "#E7E7E7",
    borderRadius: "2xl",
    border: "1px solid",
    borderColor: "gray.400",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
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
        _hover={{ boxShadow: "0 6px 14px rgba(0,0,0,0.25)" }}
        transition="box-shadow 120ms ease"
      >
        {content}
      </chakra.button>
    );
  }

  return <Box {...baseProps}>{content}</Box>;
}
