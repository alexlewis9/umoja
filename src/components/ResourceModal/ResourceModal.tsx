"use client";

import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
import ResourceDetailCard from "@/components/ResourceDetailCard/ResourceDetailCard";

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  detailDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ResourceModalProps = {
  resources: ResourceItem[];
};

export default function ResourceModal({ resources }: ResourceModalProps) {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedResource(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Box
        w="full"
        borderRadius="2xl"
        bgGradient="to-br"
        gradientFrom="orange.900"
        gradientTo="orange.800"
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 8 }}
        maxH="80vh"
        overflowY="auto"
      >
        <Wrap
          columnGap={{ base: 8, md: 12 }}
          rowGap={{ base: 8, md: 12 }}
          justify="center"
          align="stretch"
          maxW={{ base: "full", lg: "container.lg" }}
          mx="auto"
        >
          {resources.map((resource) => (
            <WrapItem key={resource.id}>
              <ResourceCard
                title={resource.title}
                description={resource.description}
                imageSrc={resource.imageSrc}
                imageAlt={resource.imageAlt}
                onClick={() => setSelectedResource(resource)}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {selectedResource && (
        <Box
          position="fixed"
          inset={0}
          zIndex="overlay"
          bg="blackAlpha.600"
          px={{ base: 3, md: 8 }}
          py={{ base: 6, md: 10 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          overflowY="auto"
          onClick={() => setSelectedResource(null)}
        >
          <Box onClick={(event) => event.stopPropagation()} w="full" maxW="container.xl">
            <ResourceDetailCard
              title={selectedResource.title}
              description={selectedResource.detailDescription ?? selectedResource.description}
              imageSrc={selectedResource.imageSrc}
              imageAlt={selectedResource.imageAlt}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
