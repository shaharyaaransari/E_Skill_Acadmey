import axios from "axios"
import Navbar from "./Navbar"
import {Box, Heading,Spinner,Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
function Leader(){
    const [loading,setLoading]=useState(false)
    const[data,setData]=useState([])
    const fetchData=()=>{
        let url=`https://cute-puce-jackrabbit-robe.cyclic.app/user`
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
  fetchData()
    },[])
   
    return(
        <>
        
       <Navbar/>
       <Box mt={4}>
        <Heading  as="h6"mb={4} color="teal.300">Leaderboard</Heading>
       
       <Box display="flex"  m="auto" width="240px"  gap={3} pb={3}>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPosYpffZF9slLdMTaDIpU05VB40ugfp8m_AFUBVKGg&usqp=CAU&ec=48600112" width="70px" alt="medal" border="1px solid" />
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymGn79hInMneKsAlh-hxb-QekKuT_2b0WVTaAEW067A&usqp=CAU&ec=48600112" width="70px" alt="medal"/>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2l1Fsc2MMsrWNXZL51yW0qO2YVIQHMHoAUYstyubbQ&usqp=CAU&ec=48600112" width="70px" alt="medal"  />
       </Box>
      
       {/* leadrboard */}
       {loading ? <Spinner
         mt={5}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>: data.map((item)=>{
return <Box width="70%" display="flex" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  m="auto" p={3}  justifyContent="space-between" key={item.id} mb={4}>
     
       <Box display="flex" justifyContent="space-evenly" width="300px" >
    { typeof item.img==="string"&& <img src={item.img} width="50px" style={{borderRadius:"50%"}} alt="medal" />}
    {typeof item.img==="number"&&  <Text mt={4} fontSize={"2em"} >{item.id}</Text>}
      <img src={item.avatar} width="60px" style={{borderRadius:"50%"}} alt="pic" />
      <Text mt={4}   fontSize={"2em"} >{item.name}</Text>
      </Box>
     <Box  ml="490px" width="100px">
    <Text  fontSize={"2em"} >{item.point}</Text>
</Box>
       </Box>
       })
}

       </Box>
        </>
    )
}
export default Leader