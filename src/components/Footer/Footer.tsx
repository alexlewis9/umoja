import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

const linkGroups = [
    {
        heading: "Explore",
        links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/events", label: "Events" },
            { href: "/registration", label: "Registration" },
        ],
    },
    {
        heading: "Support",
        links: [
            { href: "/resources", label: "Resources" },
            { href: "/photos", label: "Photos" },
            { href: "/faqs", label: "FAQs" },
            { href: "/contact", label: "Contact" },
        ],
    },
];

export default function Footer() {
    return (
        <Box
            as="footer"
            width="100%"
            bg="#6d220f"
            color="white"
            borderTop="1px solid"
            borderColor="rgba(255,255,255,0.08)"
        >
            <Container maxW="1200px" px={{ base: 6, md: 8 }} py={{ base: 10, md: 12 }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    align={{ base: "stretch", lg: "flex-start" }}
                    justify="space-between"
                    gap={{ base: 10, lg: 12 }}
                >
                    <VStack
                        align={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        gap={6}
                        flex={{ lg: "0 0 320px" }}
                        maxW={{ base: "100%", lg: "320px" }}
                    >
                        <Box
                            bg="#120905"
                            p={{ base: 4, md: 5 }}
                            borderRadius="2xl"
                            boxShadow="0 18px 40px rgba(0,0,0,0.22)"
                            border="1px solid rgba(255,255,255,0.06)"
                            width="fit-content"
                        >
                            <Image
                                src="/umoja_logo_new.jpg"
                                alt="Umoja Academy logo"
                                width={{ base: "220px", md: "270px" }}
                                height="auto"
                                objectFit="contain"
                                borderRadius="md"
                            />
                        </Box>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, sm: 2 }}
                        gap={{ base: 8, md: 12 }}
                        flex={{ lg: "1 1 0" }}
                        minW={{ lg: "0" }}
                        pt={{ lg: 1 }}
                    >
                        {linkGroups.map((group) => (
                            <VStack
                                key={group.heading}
                                align={{ base: "center", md: "flex-start" }}
                                textAlign={{ base: "center", md: "left" }}
                                gap={4}
                            >
                                <Text
                                    fontSize="12px"
                                    fontWeight="700"
                                    textTransform="uppercase"
                                    letterSpacing="0.18em"
                                    color="#f0c5ae"
                                >
                                    {group.heading}
                                </Text>
                                {group.links.map((link) => (
                                    <NextLink key={link.href} href={link.href}>
                                        <Text
                                            fontSize="17px"
                                            color="rgba(255,255,255,0.88)"
                                            transition="color 0.2s ease"
                                            _hover={{ color: "#f4b699" }}
                                        >
                                            {link.label}
                                        </Text>
                                    </NextLink>
                                ))}
                            </VStack>
                        ))}
                    </SimpleGrid>

                    <VStack
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        gap={5}
                        flex={{ lg: "0 0 180px" }}
                        minW={{ lg: "180px" }}
                        pt={{ lg: 1 }}
                    >
                        <Text
                            fontSize="12px"
                            fontWeight="700"
                            textTransform="uppercase"
                            letterSpacing="0.18em"
                            color="#f0c5ae"
                        >
                            Connect
                        </Text>
                        <Flex justifyContent="center" alignItems="center" gap={3} wrap="wrap">
                            <Link
                                href="mailto:info@durham1.ca"
                                p={3}
                                borderRadius="full"
                                bg="rgba(255,255,255,0.08)"
                                border="1px solid rgba(255,255,255,0.06)"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "rgba(255,255,255,0.14)", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.16)" }}
                            >
                                <Image height="26px" width="26px" src="/mail-icon.svg" alt="email" />
                            </Link>
                            <Link
                                href="tel:+12892003413"
                                p={3}
                                borderRadius="full"
                                bg="rgba(255,255,255,0.08)"
                                border="1px solid rgba(255,255,255,0.06)"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "rgba(255,255,255,0.14)", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.16)" }}
                            >
                                <Image height="26px" width="26px" src="/phone-icon.svg" alt="phone" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/durhamone/"
                                p={3}
                                borderRadius="full"
                                bg="rgba(255,255,255,0.08)"
                                border="1px solid rgba(255,255,255,0.06)"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "rgba(255,255,255,0.14)", transform: "translateY(-1px)", borderColor: "rgba(255,255,255,0.16)" }}
                            >
                                <Image height="26px" width="26px" src="/instagram-icon.svg" alt="instagram" />
                            </Link>
                        </Flex>
                        <Text fontSize="15px" color="rgba(255,255,255,0.74)" lineHeight="1.85" maxW="280px">
                            Umoja has a goal to empower athletes and families through
                            basketball, mentorship, and a stronger sense of community.
                        </Text>
                    </VStack>
                </Flex>
            </Container>

            <Box
                bg="#000000"
                borderTop="1px solid"
                borderColor="rgba(255,255,255,0.08)"
                px={6}
                py={5}
                textAlign="center"
                color="rgba(255,255,255,0.62)"
            >
                <Text fontSize="14px">Copyright &copy; 2026 Umoja. All rights reserved.</Text>
            </Box>
        </Box>
    );

}

export function FooterTestPage() {
    return (
        <Box minH="100vh" bg="#f7f1ec">
            <Container maxW="container.lg" py={{ base: 12, md: 20 }}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h1" size="2xl" color="#60220e">
                        Footer Test Page
                    </Heading>
                    <Text fontSize="lg" color="#4a3a31" maxW="3xl">
                        Use this route to review the footer layout, spacing, icons, and
                        responsive behavior without depending on the rest of the site.
                    </Text>
                    <Box
                        minH={{ base: "40vh", md: "50vh" }}
                        borderRadius="2xl"
                        border="1px solid"
                        borderColor="#d8c2b7"
                        bg="white"
                        px={{ base: 6, md: 10 }}
                        py={{ base: 8, md: 12 }}
                    >
                        <Text fontSize="md" color="#6b4d41" maxW="2xl">
                            Scroll to the footer below to validate how it sits at the bottom
                            of a typical page and how it behaves across breakpoints.
                        </Text>
                    </Box>
                </VStack>
            </Container>
            <Footer />
        </Box>
    );
}
