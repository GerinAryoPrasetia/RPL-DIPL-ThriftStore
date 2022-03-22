import React from "react";
import AuthLayout from "../layout/AuthLayout";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Register = () => {
  const handleSubmit = () => {};
  return (
    <AuthLayout>
      <Heading fontSize="2xl" mb="16px">
        Daftar
      </Heading>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box width="full" maxW="370px" position="relative" mx="auto">
          <Stack spacing={4} w="full">
            <FormControl id="email" isRequired>
              <FormLabel fontFamily={"nunito"}>Email</FormLabel>
              <Input
                type="email"
                backgroundColor="white"
                borderRadius="12px"
                px="20px"
                py="13px"
                name="email"
                // value={email}
                // onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel fontSize="lg" fontFamily={"nunito"}>
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={"password"}
                  backgroundColor="white"
                  borderRadius="12px"
                  px="20px"
                  py="13px"
                  name="password"
                  //   value={password}
                  //   onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  {/* <Button
                    variant={"ghost"}
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button> */}
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <Box mt={"14px"} w="full" textAlign={"end"}>
            <NextLink href="/forgot-password" passHref>
              <Link color={"primary"}>Lupa Password?</Link>
            </NextLink>
          </Box>
          <Button
            bg="primary"
            _hover={{ bg: "red.700" }}
            isFullWidth
            color="white"
            borderRadius="12px"
            mt="40px"
            type="submit"
          >
            {/* {loading ? <Spinner /> : "LOGIN"} */}
          </Button>
        </Box>
      </form>
      <Box fontSize="18px" color="sub" mt="24px">
        Sudah Punya Akun?{" "}
        <NextLink href="/sign-up" passHref>
          <Link fontWeight={"bold"} color={"primary"}>
            Masuk
          </Link>
        </NextLink>
      </Box>
    </AuthLayout>
  );
};

export default Register;
