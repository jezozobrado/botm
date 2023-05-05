import { Box, Container, Image } from "@chakra-ui/react";
import poster from "../../assets/girl-lying-bed.webp";

const Poster1 = () => {
  return (
    <Box
      bg="linear-gradient(
        to bottom,
        white 50%,
        #204399 50%
          )"
    >
      <Container centerContent paddingY={{ base: "30px", md: "70px" }}>
        <Image
          src={poster}
          maxW={{ base: "100vw", lg: "90vw" }}
          paddingX={{ md: "30px" }}
        />
      </Container>
    </Box>
  );
};

export default Poster1;
