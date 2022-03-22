import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <>
        <Head>
        <title>Thriftstore-Welcome!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex minH={"100vh"} backgroundColor={"#F8F8FB"}>
        <Flex
          align="center"
          flex={1.3}
          backgroundColor="white"
          borderRightRadius="80px"
          justify="center"
          display={{ base: "none", lg: "flex" }}
          px="114px"
        >
          <Flex direction="column" align="center">
            <Stack>
              <Heading fontSize="35px" color="custom-blue">
                Thrift Store
              </Heading>
              <Text maxWidth="560px" fontSize="lg" color="sub">
                Temukan barang-barang preloved terbaik untuk menemani outfit-mu hari ini!
              </Text>
            </Stack>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          shrink={0}
          align="center"
          px={{ base: "0", md: "115px" }}
          justify="center"
        >
          <Flex
            direction="column"
            align="center"
            w={{ base: "90%", sm: "410px" }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default AuthLayout