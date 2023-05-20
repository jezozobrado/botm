import { Box, Container, Image } from "@chakra-ui/react";

interface Props {
  image: string;
}
const Poster1 = ({ image }: Props) => {
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
          src={image}
          maxW={{ base: "100vw", lg: "90vw" }}
          paddingX={{ md: "30px" }}
        />
      </Container>
    </Box>
  );
};

export default Poster1;
