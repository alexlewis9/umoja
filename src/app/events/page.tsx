import { Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "@/lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type EventItem = {
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  imageSrc?: string;
};

type EventsContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  events?: EventItem[];
};

export default async function EventsPage() {
  const eventsPath = path.join(process.cwd(), "src/content/events.yaml");
  const content = (await loadYaml(eventsPath)) as EventsContent;

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
