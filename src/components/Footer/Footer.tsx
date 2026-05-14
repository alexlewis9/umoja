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
import path from "path";
import { loadYaml } from "@/lib/loadYaml";

type FooterContent = {
    logo: {
        src: string;
        alt: string;
    };
    description: string;
    linkGroups: Array<{
        heading: string;
        links: Array<{
            href: string;
            label: string;
        }>;
    }>;
    contact: {
        heading: string;
        links: Array<{
            href: string;
            iconSrc: string;
            label: string;
        }>;
    };
    copyright: string;
};

export default async function Footer() {
    const footerPath = path.join(process.cwd(), "src/content/footer.yaml");
    const footer = (await loadYaml(footerPath)) as FooterContent;

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
                                src={footer.logo.src}
                                alt={footer.logo.alt}
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
                        {footer.linkGroups.map((group) => (
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
                            {footer.contact.heading}
                        </Text>
                        <Flex justifyContent="center" alignItems="center" gap={3} wrap="wrap">
                            {footer.contact.links.map((contactLink) => (
                                <Link
                                    key={contactLink.href}
                                    href={contactLink.href}
                                    p={3}
                                    borderRadius="full"
                                    bg="footerIconBg"
                                    border="1px solid"
                                    borderColor="footerIconBorder"
                                    transition="background 0.2s ease, transform 0.2s ease, border-color 0.2s ease"
                                    _hover={{ bg: "footerIconBgHover", transform: "translateY(-1px)", borderColor: "footerIconBorderHover" }}
                                >
                                    <Image height="26px" width="26px" src={contactLink.iconSrc} alt={contactLink.label} />
                                </Link>
                            ))}
                        </Flex>
                        <Text fontSize="15px" color="footerTextMuted" lineHeight="1.85" maxW="280px">
                            {footer.description}
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
                <Text fontSize="14px">{footer.copyright}</Text>
            </Box>
        </Box>
    );

}
