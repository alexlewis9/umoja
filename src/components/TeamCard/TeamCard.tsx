import { Box, Text } from "@chakra-ui/react";

type TeamCardProps = {
  name: string;
  position: string;
  description: string;
};

export default function TeamCard({
  name,
  position,
  description,
}: TeamCardProps) {
  return (
    <Box
      w="300px"
      bg="white"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.300"
      boxShadow="sm"
      overflow="hidden"
    >
      {/* Top banner */}
      <Box
        h="120px"
        bgGradient="linear(to-br, #2A0D04, #5A2A0F)"
      />

      {/* Content */}
      <Box position="relative" p={6} pt={14} textAlign="center">
        {/* Avatar placeholder */}
        <Box
          position="absolute"
          top="-60px"
          left="50%"
          transform="translateX(-50%)"
          w="120px"
          h="120px"
          bg="gray.200"
          borderRadius="full"
          border="4px solid white"
          boxShadow="0 3px 6px rgba(0,0,0,0.2)"
        />

        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>

        <Text fontSize="sm" color="gray.600" fontStyle="italic">
          {position}
        </Text>

        <Text mt={3} fontSize="sm" color="gray.700">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
