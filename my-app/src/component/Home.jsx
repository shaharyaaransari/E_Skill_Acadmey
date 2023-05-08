import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { Heading, Progress,Text,Box, Center, SimpleGrid } from "@chakra-ui/react"
import { Footer } from "./Footer"
function Home(){
    const{obj}=useContext(AuthContext)
   
    return(
        <>
        <Navbar obj={obj}/>
        <Box>
        <Heading as="h5" mt={5}>Start where you left off</Heading>
        <Box w="500px"  m="auto" bg="teal.100" mt={3} borderRadius={2} h="50px">
            <Text mb={2}>proportion</Text>
             <Progress value={70}colorScheme='teal' size='md' /> 
        </Box>
        <Box w="500px"  m="auto" bg="yellow.300" mt={3} borderRadius={2} h="50px">
            <Text mb={2}>Craft And Industries</Text>
             <Progress value={55}colorScheme='yellow' size='md' />
        </Box >
        <Heading as="h5" mt={5}>Your Subject</Heading>
        <Box mt={5}>
        <Box >
        < SimpleGrid columns={2} spacing={10}  m="auto"  width="70%">
            {/* Math */}
            <Box >  
                <img src="https://thumbs.dreamstime.com/b/math-symbols-21856242.jpg"  alt="" />
               <Link to="/Math"> <Center> <Text color="teal.600" m="auto" >Math</Text></Center></Link> 
            </Box>
            <Box>
                <img src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg" width="95%"  alt=""  />
                
                <Link to="/Sceince"> <Center><Text color="teal.600" mb={3} >Sceince</Text></Center></Link> 
            </Box>
        </SimpleGrid>
        < SimpleGrid columns={2} spacing={5} mt={3} m="auto"   width="70%">
            {/* Math */}
            <Box> 
                <img src="https://thumbs.dreamstime.com/b/history-doodles-lettering-white-background-137829155.jpg"  alt="" />
                <Link to="/History"> <Center> <Text color="teal.600" mb={3} >History</Text></Center></Link> 
                
            </Box>
            <Box>
                <img src="https://thumbs.dreamstime.com/b/set-geography-symbols-equipments-web-banners-vintage-outline-sketch-web-banners-doodle-style-education-concept-back-to-136641038.jpg"   alt=""  />
                
                <Link to="/Geography"> <Center> <Text color="teal.600" mb={3} >Geography</Text></Center></Link>
            </Box>
        </SimpleGrid>
    </Box>
        </Box>
        </Box>
        <Footer/>
        </>
    )
}

export default Home