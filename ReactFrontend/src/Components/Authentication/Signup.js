import { FormControl,FormLabel,Input,InputGroup,InputRightElement,VStack,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import {useHistory} from 'react-router-dom'

const Signup = () => {
  const [show,setShow] = useState(false)
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const [pic,setPic] = useState()
  const [picLoading, setPicLoading] = useState(false);
  const history = useHistory()
  const toast = useToast()

  const handleClick=()=>{
    setShow(!show);
  }

  const postDetails=(pics)=>{
    setPicLoading(true);
    if(pics === undefined){
      toast({
        title: 'Please Select an Image',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position : "bottom"
      });
      return;
    }
    if(pics.type==="image/jpeg" || pics.type==="image/png"){
      const data = new FormData()
      data.append("file",pics);
      data.append('upload_preset',"chatApp")
      data.append('cloud_name',"sreeparna")
      fetch(`https://api.cloudinary.com/v1_1/sreeparna`,{
        method:"post",body: data,mode: 'cors', // Add this line to enable CORS
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000', // Set the allowed origin
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Set the allowed methods
          // Add other necessary headers if required
        },
      }).then((res)=>res.json())
      .then(data =>{
        setPic(data.url.toString());
        console.log(data.url.toString());
        setPicLoading(false);
      }
      ).catch((err)=>{
        console.log(err);
        setPicLoading(false);
      })
    }else{
      toast({
        title: 'Please Select an Image',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position : "bottom"
      });
      setPicLoading(false);
      return;
    }
  }

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/chatApp/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  }
  return (
    <VStack spacing='5px' >
      <FormControl id='first-name' isRequired>
        <FormLabel >Name</FormLabel>
          <Input placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      </FormControl>
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
      <FormControl id='password' isRequired>
      <FormLabel > Confirm Password</FormLabel>
        <InputGroup size='md'>
          <Input type={show?"text":"password"} placeholder='Enter your password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <InputRightElement width ="4 rem">
            <Button h='1.75rem' size="sm" onClick={handleClick}>
              {show?"Hide":"Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id="pic">
      <FormLabel> Upload your Picture</FormLabel>
      <Input type='file' p = {1.5} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])}/>
    </FormControl>
    <Button colorScheme='blue' width='100%' style={{marginTop:15}} onClick={submitHandler} isLoading={picLoading}>
      Sign Up   
    </Button>
    </VStack>
  )
}

export default Signup
