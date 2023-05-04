import React from "react";
import NavBar from "./NavBar";
import { Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Flex
        margin="auto"
        width="800px"
        justifyContent="center
      "
        flexDirection="column"
        textAlign={"center"}
        gap={5}
      >
        <Heading fontSize="100px" fontWeight="medium" marginTop="60px">
          Books are cool &#13;&#13;&#13; again.
        </Heading>
        <Text fontSize="20px">
          Choose from a curated selection of the best new reads every month and
          get them delivered.
        </Text>
        <HStack justifyContent="center" fontSize="20px">
          <Button fontSize="18px">Join now</Button>
          <Button fontSize="18px" variant="outline">
            Give a gift
          </Button>
        </HStack>
        <Text fontSize="20px">
          Already a member?{" "}
          <Button fontSize="18px" variant="link">
            Sign in.
          </Button>
        </Text>
      </Flex>
    </>
  );
};

export default HomePage;
