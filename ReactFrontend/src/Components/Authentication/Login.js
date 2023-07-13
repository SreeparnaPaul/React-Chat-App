import { FormControl,FormLabel,Input,VStack ,Button,InputGroup,InputRightElement} from '@chakra-ui/react'
import React,{useState} from 'react'

const Login = () => {
  const [show,setShow] = useState(false)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleClick=()=>{
    setShow(!show);
  }

  const submitHandler=()=>{
    
  }
  return (
    <VStack spacing='5px' >
      <FormControl id='email' isRequired>
        <FormLabel >Email</FormLabel>
          <Input placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel >Password</FormLabel>
          <InputGroup size='md'>
            <Input type={show?"text":"password"} placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <InputRightElement width ="4 rem">
              <Button h='1.75rem' size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
      </FormControl>
    <Button colorScheme='blue' width='100%' style={{marginTop:15}} onClick={submitHandler}>
      Login
    </Button>
    <Button  variant='solid' colorScheme='red' width='100%' style={{marginTop:15}} onClick={()=>{
      setEmail("guest@example.com")
      setPassword("123456")
    }}>
      Get Guest User Credentials
    </Button>
    </VStack>
  )
}

export default Login
