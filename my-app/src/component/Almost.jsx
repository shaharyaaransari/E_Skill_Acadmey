import { Box, Button, Heading, Select, Text } from "@chakra-ui/react"
function Almost() {
    return (
        <>
            <Heading color="teal.500">Almost there!</Heading>
            <Box >
                <Text color="gray.600">Choose a language to study in</Text>

                <Box >
                    <Select width="300px" m="auto" p={2}>
                        <option value="">--Select Language--</option>
                        <option value='English'>English</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Urdu'>Urdu</option>
                    </Select>
                </Box>
                <Text color="gray.600">Which class are you in</Text>
                <Box> <Button m={2} pl={7}
                    border='1px solid ' bg="white"
                    _hover={{
                        bg: 'teal.100',
                    }}>Grade 7</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                        _hover={{
                            bg: 'teal.100',
                        }}>Grade 8</Button>
                </Box>
                <Box><Button m={2} pl={7} border='1px solid ' bg="white"
                    _hover={{
                        bg: 'teal.100',
                    }}> Grade 9</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                        _hover={{
                            bg: 'teal.100',
                        }}>Grade 10</Button>
                </Box>

                <Text color="gray.600">which Board does your school belong</Text>

            </Box>
        </>
    )
}
export default Almost