import { Box, Heading, Text } from "@chakra-ui/react";

type EventsHeroProps = {
  title: string;
  description?: string;
};

export function EventsHero({ title, description }: EventsHeroProps) {
  return (
    <Box textAlign="center" w="full">
      <Heading as="h1" size="2xl" mb={4} color="black">
        {title}
      </Heading>

      {description ? (
        <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
          {description}
        </Text>
      ) : null}
    </Box>
  );
}