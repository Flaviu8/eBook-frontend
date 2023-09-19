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

export default function Signup() {
  



  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      console.log(values);

  axios({
    method: 'POST',
    url: 'http://localhost:8000/register',
    data: values
  })
    .then(function (res) {
       console.log(res)
       alert('Successfully signed up!');  
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
              <FormLabel htmlFor="first_name">First Name</FormLabel>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last_name">Last Name</FormLabel>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </FormControl>
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
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
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
            <FormControl>
              <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
              <Input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
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