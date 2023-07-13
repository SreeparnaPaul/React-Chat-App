import React from 'react'
import {Box, Container,Text} from '@chakra-ui/react'

function HomePage() {
  return (
    <Container maxW='xl' centerContent>
      <Box d='flex' justifyContent='center' p={3} bg={"white"} w="100%" m = "40px 0 15px 0" borderRadius="15px" borderWidth='1px'>
        <Text d='flex' justifyContent='center' fontSize='4xl' fontFamily='Work sans' color='black'>Chit-Chat</Text>
      </Box>
    </Container>
  )
}

export default HomePage
