import { Tabs, TabsList, TabsContent} from '@chakra-ui/react'

export default function EventTabs(props: any) {
    return (
        <Tabs.Root defaultValue="All Events" variant="plain" p={3} {...props}>
            <TabsList gap="4" justifyContent={"center"} border="none" mt={8} mb={4} flexWrap={"wrap"}>
                <Tabs.Trigger 
                    value="All Events"
                    borderRadius={"full"}
                    px={6}
                    py={2}
                    height={"auto"}
                    width={"120px"}
                    outline="2px black solid"
                    justifyContent={"center"}
                    _selected={{
                        bg: '#000000',
                        color: 'white'
                    }}>
                    All Events
                </Tabs.Trigger>
                <Tabs.Trigger 
                    value="Upcoming"
                    borderRadius={"full"}
                    px={6}
                    py={2}
                    height={"auto"}
                    width={"120px"}
                    justifyContent={"center"}
                    outline="2px black solid"
                    _selected={{
                        bg: '#000000',
                        color: 'white'
                    }}>
                    Upcoming
                </Tabs.Trigger>
                <Tabs.Trigger 
                    value="Past"
                    borderRadius={"full"}
                    px={6}
                    py={2}
                    height={"auto"}
                    width={"120px"}
                    justifyContent={"center"}
                    outline="2px black solid"
                    _selected={{
                        bg: '#000000',
                        color: 'white'
                    }}>
                    Past
                </Tabs.Trigger>

            </TabsList>
            <Tabs.Content value="All Events">
                <h3>Displaying All Events ...</h3>
            </Tabs.Content>
            <Tabs.Content value="Upcoming">
                <h3>Displaying Upcoming Events ...</h3>
            </Tabs.Content>
            <Tabs.Content value="Past">
                <h3>Displaying Past Events ...</h3>
            </Tabs.Content>
        </Tabs.Root>

    );
}