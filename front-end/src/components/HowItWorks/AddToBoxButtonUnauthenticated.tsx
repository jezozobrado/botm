import { Button } from "@chakra-ui/react";

const AddToBoxButtonUnauthenticated = () => {
  return (
    <Button
      variant="btn-link"
      width={{ base: "85vw ", md: "70%" }}
      alignSelf={{ base: "center", md: "normal" }}
      paddingX={{ md: "40px" }}
      paddingY="23px"
    ></Button>
  );
};

export default AddToBoxButtonUnauthenticated;
