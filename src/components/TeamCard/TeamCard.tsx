import { Avatar, Box, Text } from "@chakra-ui/react";

type TeamCardProps = {
  name: string;
  position: string;
  description?: string;
  imageUrl?: string;
};

export default function TeamCard({
  name,
  position,
  description,
  imageUrl,
}: TeamCardProps) {
  return (
    <Box
      w={{ base: "100%", sm: "300px" }}
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="blackAlpha.300"
      boxShadow="0 8px 18px rgba(0,0,0,0.12)"
      overflow="hidden"
    >
      {/* Top banner */}
      <Box
        h="120px"
        bg="#5A1D0D"
      />

      {/* Content */}
      <Box position="relative" p={6} pt={16} textAlign="center">
        <Avatar.Root
          position="absolute"
          top="-66px"
          left="50%"
          transform="translateX(-50%)"
          w="120px"
          h="120px"
          border="4px solid white"
          boxShadow="0 6px 10px rgba(0,0,0,0.18)"
          overflow="hidden"
        >
          <Avatar.Fallback name={name} />
          {imageUrl ? <Avatar.Image src={imageUrl} alt={`${name} avatar`} /> : null}
        </Avatar.Root>

        <Text as="h3" fontSize="xl" fontWeight="bold" color="gray.800">
          {name}
        </Text>

        <Text fontSize="md" color="gray.700" fontStyle="italic">
          {position}
        </Text>

        {description ? (
          <Text mt={3} fontSize="sm" color="gray.700">
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}
