import FAQTable from "../../components/FAQTable/FAQTable";
import { Box, Container, Heading } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "../../lib/loadYaml";

type FAQContent = {
    title?: string;
    description?: string;
    faqItems?: {
        question: string;
        answer: string;
    }[];
};

export default async function FAQs() {
    const faqPath = path.join(process.cwd(), "src/content/faq.yaml");
    const faqContent = (await loadYaml(faqPath)) as FAQContent;

    return (
        <Container maxW="container.lg" py={{ base: 16, md: 20 }}>
            <Box as="main">
                <Heading as="h1" size="3xl" mb={4} textAlign={"center"}>
                    {faqContent?.title}
                </Heading>
                <Heading as="h2" size="lg" mb={8} textAlign={"center"} color="gray.600" fontStyle="italic">
                    {faqContent?.description}
                </Heading>
                {faqContent?.faqItems && <FAQTable faqData={faqContent.faqItems} />}
            </Box>
        </Container>
    );
}