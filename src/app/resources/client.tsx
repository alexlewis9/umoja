"use client";
import ResourceGrid from "../../components/ResourceGrid/ResourceGrid";  
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ResourceModal from "../../components/ResourceModal/ResourceModal";
import ResourceDetailCard from "../../components/ResourceDetailCard/ResourceDetailCard";
import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ResourceClient({ resourceContent }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedResource, setSelectedResource] = useState<any | null>(null);
  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <ResourceGrid
          resources={resourceContent || []}
          onResourceOpen={(resource) => setSelectedResource(resource)}
          columns={{ base: 1, sm: 2, md: 3 }}
          maxHeight="400px"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderCard={(resource: any) => (
            <ResourceCard
              title={resource.title}
              description={resource.description}
              imageSrc={resource.imageSrc}
              imageAlt={resource.imageAlt}
            />
          )}
        />
        <ResourceModal
            isOpen={!!selectedResource}
            resource={selectedResource}
            onClose={() => setSelectedResource(null)}
            getResourceTitle={(resource) => resource.title}
            renderDetailCard={(resource) => (
                <ResourceDetailCard
                  title={resource.title}
                  description={resource.description}
                  imageSrc={resource.imageSrc}
                  imageAlt={resource.imageAlt}
                />
            )}
        />
      </Box>
    </Container>
  );
}