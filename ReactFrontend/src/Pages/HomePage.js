import React from 'react'
import {Box, Container,Text,Tabs,TabPanels,TabList,TabPanel,Tab} from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/Signup'

function HomePage() {
  return (
    <Container maxW='xl' centerContent>
      <Box d='flex' justifyContent='center' p={3} bg={"white"} w="100%" m = "40px 0 15px 0" borderRadius="15px" borderWidth='1px'>
        <Text fontSize='4xl' fontFamily='Work sans' color='black' style={{display:"flex",justifyContent:"center"}}>Chit-Chat</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius='lg' color='black' borderWidth='1px'>
        <Tabs variant='soft-rounded' >
          <TabList>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage
