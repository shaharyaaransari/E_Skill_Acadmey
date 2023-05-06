import { Box, Button,  Center,  Heading, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react"
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
                <Box>
                <Button m={2} pl={7} border='1px solid ' bg="white"
                    _hover={{
                        bg: 'teal.100',
                    }}>ICSE</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                        _hover={{
                            bg: 'teal.100',
                        }}>CBSC</Button>
                </Box>
    <Box>
    <Text color="gray.600" mb={5}>which subjects do you want to study</Text> 
    <Box >
        < SimpleGrid columns={2} spacing={10}  m="auto"  width="70%">
            {/* Math */}
            <Box >  
                <img src="https://thumbs.dreamstime.com/b/math-symbols-21856242.jpg"  alt="" />
                <Center> <Text color="teal.600" m="auto">Math</Text></Center> 
            </Box>
            <Box>
                <img src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg" width="95%"  alt=""  />
                <Text color="teal.600" mb={3}>Sceince</Text>
            </Box>
        </SimpleGrid>
        < SimpleGrid columns={2} spacing={5} mt={3} m="auto"   width="70%">
            {/* Math */}
            <Box> 
                <img src="https://thumbs.dreamstime.com/b/history-doodles-lettering-white-background-137829155.jpg"  alt="" />
                <Text color="teal.600" mb={3}>History</Text>
            </Box>
            <Box>
                <img src="https://thumbs.dreamstime.com/b/set-geography-symbols-equipments-web-banners-vintage-outline-sketch-web-banners-doodle-style-education-concept-back-to-136641038.jpg"   alt=""  />
                <Text color="teal.600" mb={3}>Geography</Text>
            </Box>
        </SimpleGrid>
    </Box>
     <Button bg={'blue.400'} mb={3} color={'white'} _hover={{ bg: 'blue.500',}}>Done</Button>
                            
    </Box>
    
    
            </Box>
        </>
    )
}
export default Almost