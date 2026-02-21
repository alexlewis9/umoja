import { Tabs, TabsList } from '@chakra-ui/react'

interface TabItem {
    label: string;
    content: string;
}
interface TabsProps {
    tabItems: [TabItem, ... TabItem[]];
} 

export default function TabsComponent( { tabItems }: TabsProps ) {
    return (
        <Tabs.Root defaultValue={tabItems[0].label} variant={"plain"} p={4}>
            <TabsList gap="4" justifyContent={"center"} border="none" mt={8} mb={4} flexWrap={"wrap"}>
                {tabItems.map((item, index) => (
                    <Tabs.Trigger 
                        key={index}
                        value={item.label}
                        borderRadius={"full"}
                        px={6}
                        py={2}
                        height={"auto"}
                        width={{ base: "100%", md: "120px" }}
                        border="2px black solid"
                        justifyContent={"center"}
                        _selected={{
                            bg: '#000000',
                            color: 'white'
                        }}>
                        {item.label}
                    </Tabs.Trigger>
                ))}
            </TabsList>
            {tabItems.map((item, index) => (
                <Tabs.Content key={index} value={item.label}>
                    {item.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>

    );
}