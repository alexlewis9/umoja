import FAQTable from "../../components/FAQTable/FAQTable";
import { Box, Container } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "../../lib/loadYaml";
import PageHeader from "@/components/PageHeader/PageHeader";

type FAQContent = {
  header?: {
    title?: string;
    subtitle?: string;
  };
  faqItems?: {
    question: string;
    answer: string;
  }[];
};

export default async function FAQs() {
  const faqPath = path.join(process.cwd(), "src/content/faq.yaml");
  const faqContent = (await loadYaml(faqPath)) as FAQContent;

  return (
    <Container maxW="container.lg" mx="auto" w="full" py={{ base: 16, md: 20 }}>
      <Box as="main" maxW="4xl" mx="auto" w="full">
        <PageHeader
          title={faqContent?.header?.title}
          subtitle={faqContent?.header?.subtitle}
        />
        {faqContent?.faqItems && <FAQTable faqData={faqContent.faqItems} />}
      </Box>
    </Container>
  );
}
