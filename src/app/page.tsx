import { Anta } from "next/font/google";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const stats = [
  { value: "50+", label: "Attendees" },
  { value: "8-12", label: "Grades" },
  { value: "Free", label: "Event" },
];

const tags = ["Fun", "Networking", "Summer", "Free"];

export default function EventsPage() {
  return (
    <Box bg="#FFFFFF" minH="100vh">
      <Container
        maxW="1280px"
        px={{ base: 6, md: 10 }}
        pt={{ base: 10, md: 14 }}
        pb={{ base: 16, md: 24 }}
      >
        <VStack gap={3} mb={{ base: 10, md: 12 }}>
          <Heading
            as="h1"
            className={anta.className}
            color="#000000"
            fontWeight="400"
            fontSize={{ base: "34px", md: "56px" }}
            lineHeight="1"
            textAlign="center"
          >
            Events
          </Heading>

          <Text
            className={anta.className}
            color="#9E9E9E"
            fontSize={{ base: "18px", md: "26px" }}
            textAlign="center"
          >
            Join us for exciting events!
          </Text>
        </VStack>

        <Box
          maxW="760px"
          mx="auto"
          borderRadius="18px"
          overflow="hidden"
          bgGradient="linear(to-r, #000000, #7A2E00)"
          px={{ base: 6, md: 10 }}
          py={{ base: 5, md: 6 }}
          mb={{ base: 10, md: 12 }}
        >
          <SimpleGrid columns={3} gap={6}>
            {stats.map((stat) => (
              <VStack key={stat.label} gap={0} color="white">
                <Text
                  className={anta.className}
                  fontSize={{ base: "28px", md: "44px" }}
                  lineHeight="1"
                >
                  {stat.value}
                </Text>
                <Text
                  className={anta.className}
                  fontSize={{ base: "14px", md: "20px" }}
                  lineHeight="1.1"
                  textAlign="center"
                >
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        <VStack maxW="1040px" mx="auto" w="full" align="stretch" gap={6}>
          <HStack gap={4} justify="center" flexWrap="wrap">
            <Button
              className={anta.className}
              bg="#000000"
              color="#FFFFFF"
              borderRadius="999px"
              px={8}
              h="44px"
              fontSize="16px"
              fontWeight="400"
              _hover={{ bg: "#111111" }}
            >
              All Events
            </Button>

            <Button
              className={anta.className}
              variant="outline"
              borderColor="#8E8E8E"
              color="#000000"
              borderRadius="999px"
              px={8}
              h="44px"
              fontSize="16px"
              fontWeight="400"
              bg="#FFFFFF"
              _hover={{ bg: "#F6F6F6" }}
            >
              Upcoming
            </Button>

            <Button
              className={anta.className}
              variant="outline"
              borderColor="#8E8E8E"
              color="#000000"
              borderRadius="999px"
              px={8}
              h="44px"
              fontSize="16px"
              fontWeight="400"
              bg="#FFFFFF"
              _hover={{ bg: "#F6F6F6" }}
            >
              Past
            </Button>
          </HStack>

          <Box
            w="100%"
            border="1px solid #B8B8B8"
            borderRadius="14px"
            bg="#FFFFFF"
            boxShadow="0 2px 8px rgba(0,0,0,0.12)"
            px={{ base: 4, md: 5 }}
            py={{ base: 4, md: 5 }}
          >
            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "180px 1fr" }}
              gap={{ base: 5, md: 6 }}
              alignItems="center"
            >
              <Box
                w={{ base: "140px", md: "160px" }}
                h={{ base: "140px", md: "160px" }}
                mx="auto"
                border="8px solid #000000"
                borderRadius="14px"
                bg="#EAEAEA"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "54px", md: "64px" }}
              >
                📅
              </Box>

              <VStack align="stretch" gap={4}>
                <VStack gap={1}>
                  <Text
                    fontWeight="700"
                    color="#111111"
                    fontSize={{ base: "24px", md: "34px" }}
                    textAlign="center"
                  >
                    Event Name
                  </Text>
                  <Text
                    fontWeight="700"
                    color="#111111"
                    fontSize={{ base: "18px", md: "24px" }}
                    textAlign="center"
                  >
                    Date
                  </Text>
                  <Text
                    fontWeight="700"
                    color="#111111"
                    fontSize={{ base: "18px", md: "24px" }}
                    textAlign="center"
                  >
                    Location
                  </Text>
                </VStack>

                <Text
                  color="#1F1F1F"
                  fontSize={{ base: "14px", md: "18px" }}
                  lineHeight="1.5"
                  textAlign="center"
                  maxW="780px"
                  mx="auto"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </Text>

                <Box textAlign="center">
                  <Button
                    className={anta.className}
                    bg="#6E0F0F"
                    color="#FFFFFF"
                    borderRadius="999px"
                    px={7}
                    h="42px"
                    fontSize="16px"
                    fontWeight="400"
                    _hover={{ bg: "#5A0C0C" }}
                  >
                    Register here
                  </Button>
                </Box>

                <HStack justify="flex-end" gap={2} flexWrap="wrap">
                  {tags.map((tag) => (
                    <Box
                      key={tag}
                      bg="#000000"
                      color="#FFFFFF"
                      borderRadius="6px"
                      px={2.5}
                      py={1}
                      fontSize="12px"
                      lineHeight="1"
                    >
                      {tag}
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}