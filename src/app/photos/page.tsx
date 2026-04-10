import { Container } from "@chakra-ui/react";
import path from "path";
import PhotoGallery, {
  type PhotoGalleryProps,
} from "../../components/PhotoGallery/PhotoGallery";
import { loadYaml } from "@/lib/loadYaml";

export default async function PhotosPage() {
  const photosPath = path.join(process.cwd(), "src/content/photos.yaml");
  const content = (await loadYaml(photosPath)) as PhotoGalleryProps;

  return (
    <Container
      maxW="container.xl"
      py={{ base: 12, md: 20 }}
      textAlign="center"
      mx="auto"
      w="full"
    >
      <PhotoGallery
        header={content.header}
        items={content.items ?? []}
      />
    </Container>
  );
}
