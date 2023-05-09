import { Box, Heading, Button, Spacer, Flex, FormControl, FormLabel, Input, Checkbox, Stack, Link, Text, } from "@chakra-ui/react"
import { useReducer, useState, useEffect, useContext } from "react"

import CreateAccount from "./createAcount"
import { AuthContext } from "../context/AuthContextProvider"
import { Navigate } from "react-router-dom"

const initailState = {
    email: "",
    password: ""
}
const reducer = (state, action) => {
    switch (action.type) {
        case "password": {
            return {
                ...state,
                password: action.payload
            }
        }
        case "email": {
            return {
                ...state,
                email: action.payload
            }
        }
        default: {
            throw new Error(`Input action type is invalid`)
        }
    }
}
function Login() {
    const [show, setShow] = useState(false)
    const [createForm, setForm] = useState(false)
    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, initailState)
    const { isAuth, login ,setName} = useContext(AuthContext)
    //console.log(isAuth,login)
    const { email, password } = state
    const fetchData = () => {
        fetch(`https://cute-puce-jackrabbit-robe.cyclic.app/user`)
            .then((res) => res.json())
            .then((resp) => {
               // console.log(resp)
                setData(resp)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
      
      
        data.map((item) => {
           
         
            if (item.email === email && item.password === password) {
                setName(item.name)
             login()
            }
        })
    }
    
    if (isAuth) {

        return <Navigate to="/Home" />
    }
    return (
        <>
            <Box mt={4}>
                {show || createForm ? null : <Box> <Heading color={"teal.500"}>Practical</Heading>
                    <Heading as='h5' size='sm' color={"teal.500"}>PLAYGROUND</Heading></Box>}
                <Box style={{ border: "1px solid", width: "110px", borderRadius: "65px", margin: " 10px 702px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7x_1Yw2weUF6L1UI8hH5ElWUnaDcXVH_7g_egIUaaQ&usqp=CAU&ec=48600112" alt="girlface" style={{ width: "140px", padding: "10px 20px", borderRadius: "65px" }} />
                </Box>
                {show || createForm ? null : <Box>
                    <Heading as='h4' size='md' color="teal.500">Hello there!</Heading>
                    <Heading as='h6' size='sm' color="teal.500">Join us to learn through fun and real life example!</Heading>
                </Box>
                }
                {show ? <Box>
                    <Flex
                        //minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                    >
                        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                            <Stack align={'center'}>
                                <Text fontSize={'md'} color={'teal.500'}>
                                    Looking forward to learn together
                                </Text>
                            </Stack>
                            <Box
                                rounded={'lg'}

                                boxShadow={'lg'}
                                p={8}>
                                <form action="" onSubmit={handleSubmit}>
                                    <Stack spacing={4}>

                                        <FormControl id="email">
                                            <FormLabel>Email address</FormLabel>
                                            <Input type="email" value={email} onChange={(e) => dispatch({ type: "email", payload: e.target.value })} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" value={password} onChange={(e) => dispatch({ type: "password", payload: e.target.value })} />
                                        </FormControl>
                                        <Stack spacing={10}>
                                            <Stack
                                                direction={{ base: 'column', sm: 'row' }}
                                                align={'start'}
                                                justify={'space-between'}>
                                                <Checkbox>Remember me</Checkbox>
                                                <Link color={'blue.400'}>Forgot password?</Link>
                                            </Stack>
                                            <Button
                                                type="submit"
                                                bg={'blue.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}>
                                                Sign in
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </form>

                            </Box>
                        </Stack>
                    </Flex>
                </Box> : null}
                {createForm ? <CreateAccount fetchData={fetchData} show={show} setShow={setShow} setForm={setForm} createForm={createForm}/> : null}
                {createForm || show ? null : <Box>
                    <Button mt={3} bg="teal.500" color="white" onClick={() => setShow(!show)}>Get Started</Button>
                    <Spacer />
                    <Spacer />
                    <Button mt={3} border='1px solid ' bg="white" color="teal.500" onClick={() => setForm(!createForm)}>Create Account</Button>
                </Box>}

            </Box>
        </>
    )
}

export default Login