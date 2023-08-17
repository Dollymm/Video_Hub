import React from 'react';
import{Box, Button, HStack, Heading, Stack, VStack,Input} from '@chakra-ui/react'
import{AiOutlineSend} from "react-icons/ai"

function Footer() {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>
  <Stack direction={['column','row']}>
  <VStack>
    <Heading size={"md"} textTransform={'uppercase'} alignItems={['center','left']}>
        subscribe my channel
    </Heading>
    <HStack>
    <Input placeholder='Enter your Eamil'/>
        <Button 
        p={"0"}
        colorScheme='purple'
        variant={"ghost"}
        borderRadius={'0 20px 20px 0 '}>
            <AiOutlineSend size={'20'}/>
        </Button>
    </HStack>
  </VStack>

  </Stack>

  </Box>
}

export default Footer