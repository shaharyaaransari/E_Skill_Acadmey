import {Box, Button, Heading, Progress,Spinner,Stack,Text} from "@chakra-ui/react"
import Navbar from "./Navbar"
import axios from "axios"
import { useState, useEffect } from "react"
import { Footer } from "./Footer"
function Geography(){
    const[data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [query,setQuery]=useState("")
    const [loading,setLoading]=useState(false)
    const fetchData=(page,query)=>{
        let url=`https://cute-puce-jackrabbit-robe.cyclic.app/Sceince?_limit=3&_page=${page}`
        if(query){
            url=`https://cute-puce-jackrabbit-robe.cyclic.app/Sceince?_limit=4&_page=${page}&q=${query}`
        }
        setLoading(true)
        axios.get(url)
        .then((res)=>{
            //console.log(res.data.English)
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }
  // console.log(query)
    useEffect(()=>{
  fetchData(page,query)
    },[page,query])
    return(
        <>
         <Navbar setQuery={setQuery} query={query}/>
         <Heading as="h5" mt={4}color="teal.200">Lessons</Heading>
         {loading ? <Spinner
         mt={5}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:data?.map((item)=>{
            return <Box key={item.id} w="500px"  m="auto" bg="teal.300" mt={3} borderRadius={2} h="50px">
       <Text mb={2}>{item.name}</Text>
             <Progress value={item.value}colorScheme='teal' size='sm' w="480px" m="auto" />
            </Box>
         })}
         <Stack spacing={4} direction='row' align='center' m="auto" w="380px" p={4} >
         <Button   bg={'blue.400'}color={'white'}  _hover={{   bg: 'blue.500',}}
         onClick={()=>setPage(page-1)} isDisabled={page===1} >PREVIOUS</Button>
        <Button isDisabled  bg={'blue.400'}color={'white'} _hover={{bg: 'blue.500',}}>{page}</Button>
        <Button  bg={'blue.400'}color={'white'}  _hover={{bg: 'blue.500', }}
        onClick={()=>setPage(page+1)}  isDisabled={page===2}>NEXT</Button>
         </Stack>
        
       <Box>
      
       </Box>
       <Footer/>
        </>
    )
}
export default Geography