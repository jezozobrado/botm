import { Stack, HStack, Button, Text } from "@chakra-ui/react";
import RegFormModal from "./RegFormModal";
import useDrawerStore from "../store/drawerStore";
import { useNavigate } from "react-router-dom";

const DrawerWithoutUser = () => {
  const resetIsOpen = useDrawerStore((s) => s.resetIsOpen);

  const navigate = useNavigate();

  return (
    <Stack w="100%">
      <RegFormModal buttonText={"Sign up"} btnVariant={"btn-primary-block"} />
      <HStack justifyContent="center" fontSize="16px" mt="20px">
        <Text>Already a member?</Text>
        <Button
          fontSize="16px"
          variant="btn-link"
          onClick={() => {
            navigate("/login");
            resetIsOpen();
          }}
        >
          Login.
        </Button>
      </HStack>
    </Stack>
  );
};

export default DrawerWithoutUser;
