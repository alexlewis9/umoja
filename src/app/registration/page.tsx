import { Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type RegistrationContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  form?: {
    embedUrl?: string;
  };
};

export default async function RegistrationPage() {
  const registrationPath = path.join(
    process.cwd(),
    "src/content/registration.yaml",
  );
  const content = (await loadYaml(registrationPath)) as RegistrationContent;

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
    </Container>
  );
}
