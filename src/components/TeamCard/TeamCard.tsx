import { Avatar, Box, Heading, Text } from "@chakra-ui/react";

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
      w={{ base: "full", sm: "xs" }}
      bg="bg.surface"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="border"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Top banner  */}
      <Box h="30" bg="orange.900" />

      {/* Content */}
      <Box position="relative" p={6} pt={16} textAlign="center">
        <Avatar.Root
          position="absolute"
          top="-16"
          left="50%"
          transform="translateX(-50%)"
          w="30"
          h="30"
          borderWidth="4px"
          borderColor="bg.surface"
          boxShadow="lg"
          overflow="hidden"
        >
          <Avatar.Fallback name={name} />
          {imageUrl ? <Avatar.Image src={imageUrl} alt={`${name} avatar`} /> : null}
        </Avatar.Root>

        <Heading as="h3" size="md" color="gray.800">
          {name}
        </Heading>

        <Text fontSize="md" color="gray.700" fontStyle="italic">
          {position}
        </Text>

        {description ? (
          <Text
            mt={3}
            fontSize="sm"
            color="gray.700"
            lineClamp={3}
          >
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}

