import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      console.log(values);

  axios({
    method: 'POST',
    url: 'http://localhost:8000/login',
    data: values,
    withCredentials: true
  })
  
    .then(function (res) {
       if (res.status === 200) {
        
        // Navigate to the dashboard only if login was successful
        navigate('/dashboard');

      } else if(res.status === 400) {
        console.log("Incorrect credentials")
      }
      
    })  
    .catch(function (res) {
       console.log(res)
  });
  }
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
          <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}