import { Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import ResourceClient from "./client";
import PageHeader from "@/components/PageHeader/PageHeader";

type ResourceItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ResourcesContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  resources?: ResourceItem[];
};

export default async function ResourcesPage() {
  const resourcesPath = path.join(process.cwd(), "src/content/resources.yaml");
  const content = (await loadYaml(resourcesPath)) as ResourcesContent;

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <PageHeader
        title={content.header?.title}
        subtitle={content.header?.subtitle}
      />
      <ResourceClient resourceContent={content.resources} />
    </Container>
  );
}
