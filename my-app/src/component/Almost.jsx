import { Box, Button,  Center,  Heading, Select, SimpleGrid,  Text } from "@chakra-ui/react"
import { useContext, useState } from "react"

import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"
function Almost() {
    const[Languge,seTlanguage]=useState("")
    const [classes,setClass]=useState("")
    const[subject,setSubject]=useState("")
    const [board,setBoard]=useState('')
    const{obj,setobj}=useContext(AuthContext)
   const [home,setHome]=useState(false)
    const handleDone=()=>{
        setHome(true)
       
        setobj({Languge,classes,subject,board})
   
    }
    if(home){
        return <Navigate to="/"/>
    }
    const handleclass=(val)=>{
setClass(val)
    }
    const handleSubject=(val)=>{
        setSubject(val)
    }
    return (
        <>
            <Heading color="teal.500">Almost there!</Heading>
            <Box >
                <Text color="gray.600">Choose a language to study in</Text>

                <Box >
                    <Select width="300px" m="auto" p={2} value={Languge} onChange={(e)=>seTlanguage(e.target.value)}>
                        <option value="">--Select Language--</option>
                        <option value='English'>English</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Urdu'>Urdu</option>
                    </Select>
                </Box>
                <Text color="gray.600">Which class are you in</Text>
                <Box> <Button m={2} pl={7}
                   onClick={()=>handleclass(7)}
                    border='1px solid ' bg="white"
                    _hover={{
                        bg: 'teal.100',
                    }}>Grade 7</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                     onClick={()=>handleclass(8)}
                        _hover={{
                            bg: 'teal.100',
                        }}>Grade 8</Button>
                </Box>
                <Box><Button m={2} pl={7} border='1px solid ' bg="white"
                 onClick={()=>handleclass(9)}
                    _hover={{
                        bg: 'teal.100',
                    }}> Grade 9</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                     onClick={()=>handleclass(10)}
                        _hover={{
                            bg: 'teal.100',
                        }}>Grade 10</Button>
                </Box>

                <Text color="gray.600">which Board does your school belong</Text>
                <Box>
                <Button m={2} pl={7} border='1px solid ' bg="white"
                onClick={()=>setBoard("Isce")}
                    _hover={{
                        bg: 'teal.100',
                    }}>ICSE</Button>
                    <Button m={2} pl={7} border='1px solid ' bg="white"
                     onClick={()=>setBoard("cbsc")}
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
                <Center> <Text color="teal.600" m="auto" onClick={()=>handleSubject("Math")}>Math</Text></Center> 
            </Box>
            <Box>
                <img src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg" width="95%"  alt=""  />
                <Text color="teal.600" mb={3} onClick={()=>handleSubject("Sceince")}>Sceince</Text>
            </Box>
        </SimpleGrid>
        < SimpleGrid columns={2} spacing={5} mt={3} m="auto"   width="70%">
            {/* Math */}
            <Box> 
                <img src="https://thumbs.dreamstime.com/b/history-doodles-lettering-white-background-137829155.jpg"  alt="" />
                <Text color="teal.600" mb={3} onClick={()=>handleSubject("History")}>History</Text>
            </Box>
            <Box>
                <img src="https://thumbs.dreamstime.com/b/set-geography-symbols-equipments-web-banners-vintage-outline-sketch-web-banners-doodle-style-education-concept-back-to-136641038.jpg"   alt=""  />
                <Text color="teal.600" mb={3} onClick={()=>handleSubject("Geography")}>Geography</Text>
            </Box>
        </SimpleGrid>
    </Box>
     <Button bg={'blue.400'} mb={3} color={'white'} _hover={{ bg: 'blue.500',}} onClick={handleDone}>Done</Button>
                            
    </Box>
    
    
            </Box>
        </>
    )
}
export default Almost