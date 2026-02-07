import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";

type ResourceModalProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
};

const placeholderIcon =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='16' rx='2' ry='2' fill='none' stroke='%239CA3AF' stroke-width='1.5'/><circle cx='9' cy='10' r='1.5' fill='%239CA3AF'/><path d='M7 17l4-5 3 4 2-2 3 3' fill='none' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>";

export default function ResourceModal({
  title,
  description,
  imageSrc,
  imageAlt = "",
  onClick,
}: ResourceModalProps) {
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
        <Text
          color="white"
          fontWeight="700"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="1.05"
        >
          {title}
        </Text>

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
                src={placeholderIcon}
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
