import { Flex, FormControl, FormLabel, Input, Checkbox, Stack, Link, Text, Button, Box } from "@chakra-ui/react"
import { useReducer } from "react"
const initailState = {
    name: "",
    email: "",
    password: ""
}
const reducer = (state, action) => {
    switch (action.type) {
        case "name": {
            return {
                ...state,
                name: action.payload
            }
        }
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
function CreateAccount() {
    const [state, dispatch] = useReducer(reducer, initailState)
    const { name, email, password } = state
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }
    return (
        <>
            <Flex   //minH={'100vh'}
                align={'center'}
                justify={'center'}>
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
                                <FormControl id="fullname">
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type="text" value={name} onChange={(e) => dispatch({ type: "name", payload: e.target.value })} />
                                </FormControl>
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
                                        submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>

                    </Box>
                </Stack>
            </Flex>

        </>
    )

}
export default CreateAccount;