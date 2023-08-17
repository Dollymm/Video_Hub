import React from 'react'
import {Button, Container,Heading,VStack,Text} from '@chakra-ui/react'
import{Link} from 'react-router-dom'

function LogIn() {
  return <Container maxW={"container.lg"} h={'100vh'} p={'16'}>

  <form>
    <VStack alignItems={'stretch'} spacing={"8"}
     w={"96"} m={'auto'}
my={'16'}    >
<Heading>Welcome Back</Heading>
<input placeholder='Email' type='email' 
required focusBorderColor={'purple.500'}/>

<input placeholder='password' 
type='password' 
required 
focusBorderColor={'purple.500'}/>

<Button variant={"link"} alignSelf={"flex-end"}>
    <Link to={'forgetpassword'}>Forget Password</Link>
   </Button> 

   <Button colorScheme={'purple'} type='submit'>LogIn</Button>
   <Text textAlign={'right'}>New user?
   <Button variant={"link"} alignSelf={"flex-end"} colorScheme='purple'>
    <Link to={'signup'}>Sign Up</Link>
   </Button> </Text>


    </VStack>
  </form>



  </Container>
   
  
}

export default LogIn