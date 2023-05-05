import { Flex, Heading, HStack, Button, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      width={{ base: "auto", md: "800px" }}
      flexDirection="column"
      textAlign="center"
      gap={5}
      marginTop="60px"
      paddingX="20px"
      marginX="auto"
    >
      <Heading fontSize={{ base: "60px", md: "110px" }} fontWeight="medium">
        Books are cool again.
      </Heading>
      <Text width={{ base: "auto", md: "620px" }} margin="auto">
        Choose from a curated selection of the best new reads every month and
        get them delivered.
      </Text>
      <HStack justifyContent="center">
        <Button
          fontSize="18px"
          width="150px"
          height="45px"
          variant="btn-primary"
        >
          Join now
        </Button>
        <Button
          fontSize="18px"
          width="150px"
          height="45px"
          variant="btn-secondary"
        >
          Give a gift
        </Button>
      </HStack>
      <Text>
        Already a member?
        <Button
          variant="link"
          color="brand.100"
          fontSize="18px"
          paddingLeft={2}
        >
          Sign in.
        </Button>
      </Text>
    </Flex>
  );
};

export default Hero;
