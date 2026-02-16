import { Box, Text, Flex, Image, Input, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box as="footer" width="100%">
            <Box bg="#60220e" w="100%" pt={5} pb={{ base: 5, md: 1 }} px={4} color="white">
                <Flex justifyContent="space-between" alignItems={{ base: "center", md: "flex-start" }} flexDirection={{ base: "column", md: "row" }} padding={2} paddingLeft={5} paddingRight={5}gap={10} margin={"0 auto"}>
                    <Flex flexDirection="column" alignItems="left" textAlign="center" gap={4} >
                        <Link href="/">
                            <Image height="50px" width="auto" src="/umoja-logo.svg" alt="logo" />
                        </Link>
                        <Text fontSize="15px" maxW="270px" textAlign={"justify"}>
                            We look to empower individuals and groups, increase voice and recognition, and bridge community gaps.
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="center" textAlign={"center"} gap={6} flex="1">
                        <Flex flexDirection="column" gap={2} fontSize="16px">
                            <Link display="block" href="/">Home</Link>
                            <Link display="block" href="/about">About</Link>
                            <Link display="block" href="/events">Events</Link>
                            <Link display="block" href="/resources">Resources</Link>
                            <Link display="block" href="/faqs">FAQs</Link>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" gap={4}>
                            <Link href="mailto:info@durham1.ca">
                                <Image height="43px" width="43px" src="/mail-icon.svg" alt="email" />
                            </Link>
                            <Link href="https://www.instagram.com/durhamone/">
                                <Image height="55px" width="55px" src="/instagram-icon.svg" alt="instagram" />
                            </Link>
                            <Link href="tel:+12892003413">
                                <Image height="40px" width="40px" src="/phone-icon.svg" alt="phone" />
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" alignItems={{ base: "center", md: "flex-end" }} gap={4}>
                        <Text fontWeight="bold" fontSize="24px" textAlign={"center"} pr={{ base: 0, md: 5 }}>
                            Join Our Newsletter
                        </Text>
                        <Flex bg="white" borderRadius="full" p="1" align="center">
                            <Input  
                                placeholder="Enter your email" 
                                color="black" 
                                px={4}
                                borderRadius={"full"}
                            />
                            <Button bg="#963b15" color="white" borderRadius="full" px={4} _hover={{ bg: "#ce410a"}}>
                                Subscribe
                            </Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Box>
            <Box bg="#000000" w="100%" p="5" color="white" textAlign="center">
                <Text>Copyright &copy; 2026 Umoja. All rights reserved.</Text>
            </Box>
        </Box>
    );

}