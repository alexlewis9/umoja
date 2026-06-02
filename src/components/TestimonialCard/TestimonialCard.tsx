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
      borderRadius="md"
      boxShadow="md"
      p={{ base: 4, md: 5 }}
      w="full"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border"
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        lineHeight="none"
        color="orange.800"
        fontWeight="bold"
        fontFamily="serif"
        mb={1}
        aria-hidden="true"
      >
        &ldquo;
      </Text>

      <Text
        mt={2}
        color="fg"
        fontSize={{ base: "sm", md: "sm" }}
        lineHeight="normal"
      >
        {quote}
      </Text>

      {typeof normalizedRating === "number" && normalizedRating > 0 ? (
        <HStack
          mt={4}
          gap={1.5}
          justify="flex-start"
          color="orange.600"
          lineHeight="none"
          role="img"
          aria-label={`${normalizedRating} out of ${normalizedMax} stars`}
        >
          {Array.from({ length: normalizedRating }, (_, index) => (
            <Text
              key={index}
              data-testid="rating-star"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="none"
              color="orange.600"
              aria-hidden="true"
            >
              &#9733;
            </Text>
          ))}
        </HStack>
      ) : null}

      <Text
        mt={4}
        fontSize={{ base: "sm", md: "sm" }}
        fontWeight="bold"
        color="fg"
      >
        {name}
      </Text>
    </Box>
  );
}
