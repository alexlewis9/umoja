import { Box, HStack, Text } from "@chakra-ui/react";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  rating?: number;
  maxRating?: number;
};

const clampRating = (value: number, max: number) => {
  if (value < 0) return 0;
  if (value > max) return max;
  return value;
};

export default function TestimonialCard({
  quote,
  name,
  rating,
  maxRating = 5,
}: TestimonialCardProps) {
  const normalizedMax = maxRating > 0 ? Math.floor(maxRating) : 5;
  const normalizedRating =
    typeof rating === "number"
      ? clampRating(Math.floor(rating), normalizedMax)
      : undefined;

  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      p={{ base: 5, md: 6 }}
      maxW="2xl"
      w="full"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border"
    >
      <Text
        fontSize={{ base: "5xl", md: "6xl" }}
        lineHeight="none"
        color="orange.800"
        fontWeight="bold"
        fontFamily="serif"
        letterSpacing="tight"
        mb={1}
        aria-hidden="true"
      >
        &ldquo;
      </Text>

      <Text mt={2} color="fg" fontSize={{ base: "lg", md: "2xl" }} lineHeight="tall">
        {quote}
      </Text>

      {typeof normalizedRating === "number" && normalizedRating > 0 ? (
        <HStack
          mt={4}
          gap={2}
          color="orange.600"
          lineHeight="none"
          role="img"
          aria-label={`${normalizedRating} out of ${normalizedMax} stars`}
        >
          {Array.from({ length: normalizedRating }, (_, index) => (
            <Text
              key={index}
              data-testid="rating-star"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="none"
              color="orange.600"
              aria-hidden="true"
            >
              &#9733;
            </Text>
          ))}
        </HStack>
      ) : null}

      <Text mt={4} fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="fg">
        {name}
      </Text>
    </Box>
  );
}
