import { Text } from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";

interface FAQRowProps {
    question: string;
    answer: string;
}
export default function FAQRow({ question, answer }: FAQRowProps) {
    return (
        <Accordion.Root collapsible variant="plain" width={"90%"} margin="auto">
            <Accordion.Item value="item-1">
                <Accordion.ItemTrigger bg="rgb(242,242,240, 0.4)" borderRadius="2px 2px 0px 0px" p={4} boxShadow="md" borderBottom={"2px solid #642402"} fontWeight={"bold"} color={"#642402"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>{question}</Text>
                    <Accordion.ItemIndicator color={"#642402"} />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="linear-gradient(90deg, #431b07 41%, #823207 100%)" borderRadius="0px 0px 2px 2px" p={4} boxShadow="lg" color="white">
                    <Text>{answer}</Text>
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    );
}