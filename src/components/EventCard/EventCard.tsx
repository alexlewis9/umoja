import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
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
      border="2px solid"
      borderColor="#2b3fa8"
      borderRadius="14px"
      bg="#ececec"
      p={{ base: 2, md: 3 }}
      boxShadow="0 1px 3px rgba(0,0,0,0.2)"
    >
      <Box
        border="1px solid"
        borderColor="blackAlpha.400"
        borderRadius="12px"
        bg="#e9e9e9"
        p={{ base: 3, md: 4 }}
        boxShadow="inset 0 0 0 1px rgba(255,255,255,0.35)"
        position="relative"
      >
        <HStack align="stretch" gap={{ base: 3, md: 5 }}>
          <Box
            minW={{ base: "120px", md: "220px" }}
            w={{ base: "120px", md: "220px" }}
            h={{ base: "140px", md: "220px" }}
            borderRadius="14px"
            bg="#d3d3d3"
            border="10px solid black"
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
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="6px"
              />
            ) : (
              <Box
                w={{ base: "58px", md: "92px" }}
                h={{ base: "58px", md: "92px" }}
                border="6px solid"
                borderColor="blackAlpha.300"
                borderRadius="4px"
                position="relative"
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateRows="repeat(3, 1fr)"
                gap={{ base: "3px", md: "5px" }}
                p={{ base: "4px", md: "6px" }}
              >
                <Box
                  position="absolute"
                  top={{ base: "-14px", md: "-18px" }}
                  left={{ base: "10px", md: "14px" }}
                  w={{ base: "8px", md: "10px" }}
                  h={{ base: "12px", md: "16px" }}
                  bg="blackAlpha.300"
                  borderRadius="2px"
                />
                <Box
                  position="absolute"
                  top={{ base: "-14px", md: "-18px" }}
                  right={{ base: "10px", md: "14px" }}
                  w={{ base: "8px", md: "10px" }}
                  h={{ base: "12px", md: "16px" }}
                  bg="blackAlpha.300"
                  borderRadius="2px"
                />

                {Array.from({ length: 9 }).map((_, index) => (
                  <Box key={index} bg="blackAlpha.200" borderRadius="1px" />
                ))}
              </Box>
            )}
          </Box>

          <Stack flex="1" justify="space-between" minH={{ base: "140px", md: "220px" }}>
            <Stack align="center" gap={1} textAlign="center" pt={{ base: 0, md: 2 }}>
              <Heading as="h3" color="black" fontWeight="800" fontSize={{ base: "2xl", md: "4xl" }}>
                {title}
              </Heading>
              <Text color="black" fontWeight="700" fontSize={{ base: "xl", md: "3xl" }} lineHeight="1.1">
                {date}
                {time ? ` | ${time}` : ""}
              </Text>
              <Text color="black" fontWeight="600" fontSize={{ base: "lg", md: "2xl" }} lineHeight="1.1">
                {location}
              </Text>
            </Stack>

            <Text
              textAlign="center"
              color="blackAlpha.900"
              px={{ base: 0, md: 3 }}
              fontSize={{ base: "sm", md: "2xl" }}
              lineHeight="1.5"
            >
              {description}
            </Text>

            <Box display="flex" justifyContent="center" pb={{ base: 1, md: 2 }}>
              <Link href={registerHref} _hover={{ textDecoration: "none" }}>
                <Button
                  size={{ base: "md", md: "lg" }}
                  minW={{ base: "190px", md: "240px" }}
                  px={{ base: 10, md: 12 }}
                  borderRadius="full"
                  bg="#5e0b0b"
                  color="white"
                  fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="600"
                  textDecoration="underline"
                  _hover={{ bg: "#4a0808" }}
                >
                  {registerLabel}
                </Button>
              </Link>
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
                bg="black"
                color="white"
                px={2}
                py={1}
                borderRadius="4px"
                fontSize={{ base: "10px", md: "xs" }}
                lineHeight="1"
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
