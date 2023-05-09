import { Search2Icon } from '@chakra-ui/icons';
import {
    Box, IconButton, Image, Input, Text, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Flex, Spacer,
     Button
} from '@chakra-ui/react'
import {  BiLayer, BiUser } from "react-icons/bi";

import { Link } from "react-router-dom"
//import Login from './login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import image from "../image/E-Skill.png"

function Navbar({setQuery,query}) {
    const {names}=useContext(AuthContext)

    //console.log(names)
    return (
        <>
            <Box bg='white' w='100%' p={2} color='black' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"    >

                <Flex >
                    <Box w="30%">

                        <Link to="/"> <Image w="35%"

                            src={image}
                            ml={10} /></Link>
                    </Box>
                    <Box mt={5}>
                        <InputGroup mr={14} >
                            <InputLeftElement
                                variant='outline'
                                border="none"
                                children={<IconButton
                                    size='sm'
                                    icon={<Search2Icon
                                        border="none"
                                    />}
                                />}
                            />
                            <Input type='text' placeholder='Search ' value={query} onChange={(e)=>setQuery(e.target.value)}
                              />
                             
                        </InputGroup>
                      
                    </Box>
                    <Spacer />
                     <Box mt={5} >
                        <Text color="teal.500" >Hi {names}!</Text>
                        <Text color="teal.500" >Good To see You Back!</Text>

                     </Box>
                    <Spacer />
                    <Box m={1} _hover={{
                        background: "white",
                        color: "teal.500",
                    }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<BiLayer />}
                                variant='outline'
                                border="none"
                                m={2}
                            />
                            <span>Subjects</span>
                            <MenuList>
                                <MenuItem >
                                    <Link to="/Math" >Math</Link>
                                </MenuItem>
                                <MenuItem >
                                   Socail studies
                                </MenuItem>
                                <MenuItem >
                                <Link to="/Science" >Science</Link>
                                </MenuItem>
                                <MenuItem >
                                <Link to="/History" >History</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>



                    </Box>

                    <Box _hover={{
                        background: "white",
                        color: "teal.500",
                    }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<BiUser />}
                                variant='outline'
                                border="none"
                                m={2} />
                              <Link to="/"><Button >Login</Button></Link>

                                                  </Menu>
                    </Box>
                    <Box mr={10} _hover={{
                        background: "white",
                        color: "teal.500",
                    }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                
                                variant='outline'
                                border="none"
                                m={2} />
                            <Link to="/leader"> <span>Leaderboard</span></Link>
                        </Menu>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}


export default Navbar;