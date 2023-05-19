import {
  Flex,
  Heading,
  HStack,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import RegFormModal from "../RegFormModal";

const Hero = () => {
  const navigate = useNavigate();
  const { isOpen: isOpenSignUp, onOpen, onClose } = useDisclosure();
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
        <RegFormModal buttonText={"Join now"} />
        <Button width="120px" variant="btn-secondary" onClick={onOpen}>
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
