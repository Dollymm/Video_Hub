import React from 'react'
 import {Button, Container,Heading,VStack,Text, Avatar} from '@chakra-ui/react'
import{Link} from 'react-router-dom'

function SignUp() {
  return <Container maxW={"container.lg"} h={'100vh'} p={'16'}>

  <form>
    <VStack alignItems={'stretch'} spacing={"8"}
     w={"96"} m={'auto'}
my={'16'}    >
<Heading>Video HUb</Heading>
<Avatar alignSelf={'center'} boxSize={'32'}/>

<input placeholder='Name' type='text' 
required focusBorderColor={'purple.500'}/>

<input placeholder='Email' type='email' 
required focusBorderColor={'purple.500'}/>

<input placeholder='password' 
type='password' 
required 
focusBorderColor={'purple.500'}/>



   <Button colorScheme={'purple'} type='submit'>Sign UP</Button>
   <Text textAlign={'right'}>Already sign up?
   <Button variant={"link"} alignSelf={"flex-end"} colorScheme='purple'>
    <Link to={'signup'}>logIn</Link>
   </Button> </Text>


    </VStack>
  </form>



  </Container>
   
  
}


export default SignUp