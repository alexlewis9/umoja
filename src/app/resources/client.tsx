"use client";
import ResourceGrid from "../../components/ResourceGrid/ResourceGrid";  
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ResourceModal from "../../components/ResourceModal/ResourceModal";
import ResourceDetailCard from "../../components/ResourceDetailCard/ResourceDetailCard";
import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import type { ResourceItem } from "./page";

type ResourceClientProps = {
  resourceContent?: ResourceItem[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ResourceClient({ resourceContent }: ResourceClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <ResourceGrid
          resources={resourceContent || []}
          onResourceOpen={(resource) => setSelectedResource(resource)}
          columns={{ base: 1, sm: 2, md: 3 }}
          maxHeight="400px"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderCard={(resource: ResourceItem) => (
            <ResourceCard
              resource={resource}
            />
          )}
        />
        <ResourceModal
            isOpen={!!selectedResource}
            resource={selectedResource}
            onClose={() => setSelectedResource(null)}
            getResourceTitle={(resource) => resource.title}
            renderDetailCard={(resource, onClose) => (
                <ResourceDetailCard
                  resource={resource}
                  onClose={onClose}
                />
            )}
        />
      </Box>
    </Container>
  );
}