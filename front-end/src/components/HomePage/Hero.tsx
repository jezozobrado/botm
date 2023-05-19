import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import RegFormModal from "../RegFormModal";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Flex
      width={{ base: "auto", md: "800px" }}
      flexDirection="column"
      textAlign="center"
      gap={5}
      paddingX="20px"
      marginX="auto"
    >
      <Header
        heading={"Books are cool again."}
        subheading={
          "Choose from a curated selection of the best new reads every month and get them delivered."
        }
      />

      <HStack justifyContent="center">
        <RegFormModal buttonText={"Join now"} btnVariant={"btn-primary"} />
        <Button width="120px" variant="btn-secondary">
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
          onClick={() => navigate("/login")}
        >
          Sign in.
        </Button>
      </Text>
    </Flex>
  );
};

export default Hero;
