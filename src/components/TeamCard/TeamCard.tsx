import { Box, Heading, Image, Text } from "@chakra-ui/react";

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
  const avatarSrc = imageUrl ?? "/profile-photo-placeholder.svg";
  const avatarAlt = imageUrl
    ? `${name} profile photo`
    : "Profile photo placeholder";

  return (
    <Box
      w="full"
      maxW="320px"
      bg="bg.surface"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="border"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Top banner  */}
      <Box h={{ base: "120px", md: "140px" }} bg="brandBannerGradient" />

      {/* Content */}
      <Box
        position="relative"
        p={6}
        pt={{ base: 20, md: 20 }}
        textAlign="center"
      >
        <Box
          position="absolute"
          top="-20"
          left="50%"
          transform="translateX(-50%)"
          w={{ base: "24", md: "28" }}
          h={{ base: "24", md: "28" }}
          borderRadius="full"
          borderWidth="4px"
          borderColor="bg.surface"
          boxShadow="lg"
          overflow="hidden"
        >
          <Image src={avatarSrc} alt={avatarAlt} w="full" h="full" objectFit="cover" />
        </Box>

        <Heading as="h3" size="md" color="gray.800">
          {name}
        </Heading>

        <Text fontSize="md" color="gray.700" fontStyle="italic">
          {position}
        </Text>

        {description ? (
          <Text mt={3} fontSize="sm" color="gray.700" lineClamp={3}>
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}
