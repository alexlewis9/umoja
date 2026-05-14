import {
    Box,
    Container,
    Flex,
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
            { href: "/photos", label: "Photos" },
        ],
    },
    {
        heading: "Support",
        links: [
            { href: "/resources", label: "Resources" },
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
            bg="footerBg"
            color="footerText"
            borderTop="1px solid"
            borderColor="footerBorder"
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
                            bg="footerLogoBg"
                            p={{ base: 4, md: 5 }}
                            borderRadius="2xl"
                            boxShadow="footerLogo"
                            border="1px solid"
                            borderColor="footerLogoBorder"
                            width="fit-content"
                        >
                            <Image
                                src="/umoja_logo_new.jpg"
                                alt="Umoja Academy logo"
                                width={{ base: "170px", md: "215px" }}
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
                                    color="footerHeading"
                                >
                                    {group.heading}
                                </Text>
                                {group.links.map((link) => (
                                    <Link
                                        asChild
                                        key={link.href}
                                        fontSize="17px"
                                        color="footerLink"
                                        transition="color 0.2s ease"
                                        _hover={{ color: "footerLinkHover" }}
                                    >
                                        <NextLink href={link.href}>
                                            {link.label}
                                        </NextLink>
                                    </Link>
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
                            color="footerHeading"
                        >
                            Connect
                        </Text>
                        <Flex justifyContent="center" alignItems="center" gap={3} wrap="wrap">
                            <Link
                                href="mailto:info@durham1.ca"
                                p={3}
                                borderRadius="full"
                                bg="footerIconBg"
                                border="1px solid"
                                borderColor="footerIconBorder"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "footerIconBgHover", transform: "translateY(-1px)", borderColor: "footerIconBorderHover" }}
                            >
                                <Image height="26px" width="26px" src="/mail-icon.svg" alt="email" />
                            </Link>
                            <Link
                                href="tel:+12892003413"
                                p={3}
                                borderRadius="full"
                                bg="footerIconBg"
                                border="1px solid"
                                borderColor="footerIconBorder"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "footerIconBgHover", transform: "translateY(-1px)", borderColor: "footerIconBorderHover" }}
                            >
                                <Image height="26px" width="26px" src="/phone-icon.svg" alt="phone" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/durhamone/"
                                p={3}
                                borderRadius="full"
                                bg="footerIconBg"
                                border="1px solid"
                                borderColor="footerIconBorder"
                                transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                _hover={{ bg: "footerIconBgHover", transform: "translateY(-1px)", borderColor: "footerIconBorderHover" }}
                            >
                                <Image height="26px" width="26px" src="/instagram-icon.svg" alt="instagram" />
                            </Link>
                        </Flex>
                        <Text fontSize="15px" color="footerTextMuted" lineHeight="1.85" maxW="280px">
                            Umoja has a goal to empower athletes and families through
                            basketball, mentorship, and a stronger sense of community.
                        </Text>
                    </VStack>
                </Flex>
            </Container>

            <Box
                bg="footerCopyrightBg"
                borderTop="1px solid"
                borderColor="footerBorder"
                px={6}
                py={5}
                textAlign="center"
                color="footerCopyrightText"
            >
                <Text fontSize="14px">Copyright &copy; 2026 Umoja. All rights reserved.</Text>
            </Box>
        </Box>
    );

}
