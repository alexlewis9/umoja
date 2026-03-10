"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import type { ReactNode } from "react";

export type ResourceModalProps<TResource> = {
  isOpen: boolean;
  resource: TResource | null;
  onClose: () => void;
  renderDetailCard?: (resource: TResource) => ReactNode;
  getResourceTitle?: (resource: TResource) => string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
};

export default function ResourceModal<TResource>({
  isOpen,
  resource,
  onClose,
  renderDetailCard,
  getResourceTitle,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ResourceModalProps<TResource>) {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !resource) {
    return null;
  }

  const title = getResourceTitle?.(resource) ?? "Resource Details";

  return (
    <Box
      position="fixed"
      inset={0}
      bg="blackAlpha.600"
      zIndex="overlay"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={{ base: 4, md: 8 }}
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <Box
        w="full"
        maxW="3xl"
        bg="bg.surface"
        borderRadius="xl"
        boxShadow="xl"
        borderWidth="1px"
        borderColor="border"
        overflow="hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 4, md: 6 }}
          py={{ base: 3, md: 4 }}
          borderBottomWidth="1px"
          borderColor="border"
        >
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            aria-label="Close resource modal"
          >
            Close
          </Button>
        </Box>

        <Box p={{ base: 4, md: 6 }}>
          {renderDetailCard ? (
            renderDetailCard(resource)
          ) : (
            <Box
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
              p={{ base: 4, md: 5 }}
              bg="bg.muted"
            >
              <Heading as="h3" size="sm" mb={2}>
                ResourceDetailCard Placeholder
              </Heading>
              <Text fontSize="sm" color="fg.muted">
                Replace this with the real ResourceDetailCard component once it
                is implemented.
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
