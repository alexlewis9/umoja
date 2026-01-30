import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";

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
        align="center"
        justify="space-between"
        gap={4}
        p={5}
        bgGradient="linear(to-br, #2A0D04, #5A2A0F)"
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          {title}
        </Text>

        <Box
          w="88px"
          h="64px"
          bg="white"
          borderRadius="md"
          boxShadow="0 3px 6px rgba(0,0,0,0.25)"
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
            <Box w="60%" h="60%" bg="gray.200" borderRadius="sm" />
          )}
        </Box>
      </Flex>

      <Box p={5}>
        <Text
          fontSize="sm"
          color="gray.700"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
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
        w="280px"
        bg="white"
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.300"
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
      w="280px"
      bg="white"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.300"
      boxShadow="sm"
      overflow="hidden"
      textAlign="left"
    >
      {cardContents}
    </Box>
  );
}
