import FAQRow from "../FAQRow/FAQRow";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQTableProps {
    faqData: FAQItem[];
} 

export default function FAQTable({ faqData }: FAQTableProps) {
    return (
        faqData.map((item) => (
            <FAQRow key={item.question} question={item.question} answer={item.answer} />
        ))
    );
};