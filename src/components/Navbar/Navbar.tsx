"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Registration", href: "/registration" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
  { label: "Photos", href: "/photos" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => NAV_ITEMS, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      bg="blackAlpha.700"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.200"
    >
      <Flex
        maxW="container.lg"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <HStack gap={3}>
          <Text
            as={NextLink}
            href="/"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={800}
            color="white"
          >
            UMOJA
          </Text>
        </HStack>

        {/* Desktop links */}
        <HStack gap={2} display={{ base: "none", md: "flex" }}>
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Button
                key={item.href}
                as={NextLink}
                href={item.href}
                size="sm"
                variant="ghost"
                color={active ? "white" : "whiteAlpha.800"}
                bg={active ? "whiteAlpha.200" : "transparent"}
                _hover={{ bg: "whiteAlpha.200" }}
                borderRadius="full"
                fontWeight={700}
              >
                {item.label}
              </Button>
            );
          })}
        </HStack>

        {/* Mobile toggle */}
        <Button
          display={{ base: "inline-flex", md: "none" }}
          size="sm"
          variant="outline"
          borderColor="whiteAlpha.300"
          color="white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </Button>
      </Flex>

      {/* Mobile menu */}
      <Box display={{ base: open ? "block" : "none", md: "none" }} pb={4}>
        <Stack
          maxW="container.lg"
          mx="auto"
          px={{ base: 4, md: 6 }}
          gap={2}
        >
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Button
                key={item.href}
                as={NextLink}
                href={item.href}
                size="md"
                justifyContent="flex-start"
                variant="ghost"
                color={active ? "white" : "whiteAlpha.900"}
                bg={active ? "whiteAlpha.200" : "transparent"}
                _hover={{ bg: "whiteAlpha.200" }}
                borderRadius="lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}