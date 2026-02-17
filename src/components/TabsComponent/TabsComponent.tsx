import { Tabs, TabsList } from '@chakra-ui/react'

interface TabsProps {
    tabLabels: string[];
    tabsContent: string[];
}

export default function TabsComponent( { tabLabels, tabsContent }: TabsProps ) {
    return (
        <Tabs.Root variant="plain" p={3}>
            <TabsList gap="4" justifyContent={"center"} border="none" mt={8} mb={4} flexWrap={"wrap"}>
                {tabLabels.map((label, index) => (
                    <Tabs.Trigger 
                        key={index}
                        value={label}
                        borderRadius={"full"}
                        px={6}
                        py={2}
                        height={"auto"}
                        width={"120px"}
                        border="2px black solid"
                        justifyContent={"center"}
                        _selected={{
                            bg: '#000000',
                            color: 'white'
                        }}>
                        {label}
                    </Tabs.Trigger>
                ))}
            </TabsList>
            {tabsContent.map((content, index) => (
                <Tabs.Content key={index} value={tabLabels[index]}>
                    {content}
                </Tabs.Content>
            ))}
        </Tabs.Root>

    );
}