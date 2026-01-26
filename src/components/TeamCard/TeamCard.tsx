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
      boxShadow="md"
      overflow="hidden"
    >
      {/* Top banner */}
      <Box h="90px" bg="gray.400" />

      {/* Content */}
      <Box position="relative" p={5} pt={12} textAlign="center">
        {/* Avatar placeholder */}
        <Box
          position="absolute"
          top="-35px"
          left="50%"
          transform="translateX(-50%)"
          w="70px"
          h="70px"
          bg="gray.300"
          borderRadius="full"
          border="3px solid white"
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