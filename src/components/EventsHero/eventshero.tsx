import { Box, Heading, Text } from "@chakra-ui/react";

type EventsHeroProps = {
  title: string;
  description: string;
};

export function EventsHero({ title, description }: EventsHeroProps) {
  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        {title}
      </Heading>

      <Text fontSize="lg" color="gray.600" maxW="3xl">
        {description}
      </Text>
    </Box>
  );
}