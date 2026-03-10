import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status?: "upcoming" | "past" | "ongoing";
  tags?: string[];
  registerLabel?: string;
  registerHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  tags = [],
  registerLabel = "Register here",
  registerHref = "#",
  imageSrc,
  imageAlt = `${title} image`,
}: EventCardProps) {
  return (
    <Box
      borderWidth="2px"
      borderColor="blue.700"
      borderRadius="xl"
      bg="bg.subtle"
      p={{ base: 2, md: 3 }}
      boxShadow="sm"
    >
      <Box
        borderWidth="1px"
        borderColor="border"
        borderRadius="xl"
        bg="bg.muted"
        p={{ base: 3, md: 4 }}
        boxShadow="inner"
        position="relative"
      >
        <HStack align="stretch" gap={{ base: 3, md: 5 }}>
          <Box
            minW={{ base: "32", md: "56" }}
            w={{ base: "32", md: "56" }}
            h={{ base: "36", md: "56" }}
            borderRadius="xl"
            bg="bg.emphasized"
            borderWidth={{ base: "4px", md: "6px" }}
            borderColor="fg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            flexShrink={0}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                w="full"
                h="full"
                objectFit="cover"
                borderRadius="md"
              />
            ) : (
              <Box
                w={{ base: "14", md: "24" }}
                h={{ base: "14", md: "24" }}
                borderWidth={{ base: "2px", md: "4px" }}
                borderColor="blackAlpha.300"
                borderRadius="sm"
                position="relative"
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateRows="repeat(3, 1fr)"
                gap={{ base: 1, md: 2 }}
                p={{ base: 1, md: 2 }}
              >
                <Box
                  position="absolute"
                  top={{ base: "-3", md: "-4" }}
                  left={{ base: "3", md: "4" }}
                  w={{ base: "2", md: "3" }}
                  h={{ base: "3", md: "4" }}
                  bg="blackAlpha.300"
                  borderRadius="xs"
                />
                <Box
                  position="absolute"
                  top={{ base: "-3", md: "-4" }}
                  right={{ base: "3", md: "4" }}
                  w={{ base: "2", md: "3" }}
                  h={{ base: "3", md: "4" }}
                  bg="blackAlpha.300"
                  borderRadius="xs"
                />

                {Array.from({ length: 9 }).map((_, index) => (
                  <Box key={index} bg="blackAlpha.200" borderRadius="xs" />
                ))}
              </Box>
            )}
          </Box>

          <Stack flex="1" justify="space-between" minH={{ base: "36", md: "56" }}>
            <Stack align="center" gap={1} textAlign="center" pt={{ base: 0, md: 2 }}>
              <Heading
                as="h3"
                color="fg"
                fontWeight="800"
                fontSize={{ base: "2xl", md: "4xl" }}
                lineClamp={2}
                overflowWrap="anywhere"
              >
                {title}
              </Heading>
              <Text color="fg" fontWeight="700" fontSize={{ base: "xl", md: "3xl" }} lineHeight="shorter">
                {date}
                {time ? ` | ${time}` : ""}
              </Text>
              <Text
                color="fg"
                fontWeight="600"
                fontSize={{ base: "lg", md: "2xl" }}
                lineHeight="shorter"
                lineClamp={1}
                overflowWrap="anywhere"
              >
                {location}
              </Text>
            </Stack>

            <Text
              textAlign="center"
              color="fg.muted"
              px={{ base: 0, md: 3 }}
              fontSize={{ base: "sm", md: "2xl" }}
              lineHeight="tall"
              lineClamp={3}
              overflowWrap="anywhere"
            >
              {description}
            </Text>

            <Box display="flex" justifyContent="center" pb={{ base: 1, md: 2 }}>
              <Button
                asChild
                size={{ base: "md", md: "lg" }}
                minW={{ base: "48", md: "60" }}
                px={{ base: 10, md: 12 }}
                borderRadius="full"
                bg="red.900"
                color="fg.inverted"
                fontStyle="italic"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="600"
                textDecoration="underline"
                _hover={{ bg: "red.800", textDecoration: "none" }}
              >
                <a href={registerHref}>{registerLabel}</a>
              </Button>
            </Box>
          </Stack>
        </HStack>

        <Wrap
          position="absolute"
          right={{ base: 3, md: 4 }}
          bottom={{ base: 2, md: 4 }}
          gap={2}
          justify="flex-end"
          maxW={{ base: "45%", md: "35%" }}
        >
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Box
                bg="fg"
                color="fg.inverted"
                px={2}
                py={1}
                borderRadius="sm"
                fontSize="xs"
                lineHeight="short"
              >
                {tag}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}
