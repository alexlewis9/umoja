"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Anta } from "next/font/google";
import { Box, Container, Flex, HStack, Image, Link } from "@chakra-ui/react";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const navItems = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Registration", href: "/registration" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
  { label: "Photos", href: "/photos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box as="header" bg="black" w="full">
      <Container maxW="7xl" px={{ base: 4, md: 6, xl: 8 }}>
        <Flex
          minH="28"
          align="center"
          justify="space-between"
          gap={{ base: 4, md: 6, xl: 8 }}
        >
          <Link
            as={NextLink}
            href="/"
            display="flex"
            alignItems="center"
            flexShrink={0}
            _hover={{ textDecoration: "none" }}
          >
            <Image
              src="/umoja-logo.jpg"
              alt="UMOJA logo"
              h={{ base: "16", md: "20", xl: "24" }}
              w="auto"
              objectFit="contain"
            />
          </Link>

          <HStack
            as="nav"
            gap={{ md: 6, lg: 8, xl: 10 }}
            flexWrap="nowrap"
            ml="auto"
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  as={NextLink}
                  href={item.href}
                  className={anta.className}
                  color="white"
                  fontSize={{ md: "md", xl: "lg" }}
                  fontWeight="400"
                  lineHeight="1"
                  whiteSpace="nowrap"
                  textDecoration="none"
                  pb="1"
                  borderBottomWidth={isActive ? "2px" : "0px"}
                  borderColor="white"
                  opacity={isActive ? 1 : 0.8}
                  _hover={{
                    textDecoration: "none",
                    opacity: 1,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}