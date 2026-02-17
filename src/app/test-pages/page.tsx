import { Box, Container, Heading } from "@chakra-ui/react";
import ResourceDetailCard from "../../components/ResourceModal/ResourceModal";

const longDescription =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.";

export default function TestPages() {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
      <Heading size="lg" mb={6}>
        Resource Modal Test
      </Heading>

      <Box>
        <ResourceDetailCard title="Long Title" description={longDescription} />
      </Box>
    </Container>
  );
}
