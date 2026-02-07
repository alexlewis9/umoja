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
        align="flex-start"
        justify="space-between"
        gap={4}
        p={5}
        bg="#5A2A0F"
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
            <Box
              w="70%"
              h="70%"
              bg="gray.100"
              borderRadius="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='16' rx='2' ry='2' fill='none' stroke='%239CA3AF' stroke-width='1.5'/><circle cx='9' cy='10' r='1.5' fill='%239CA3AF'/><path d='M7 17l4-5 3 4 2-2 3 3' fill='none' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
                alt="Placeholder"
                boxSize={6}
                opacity={0.9}
              />
            </Box>
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
