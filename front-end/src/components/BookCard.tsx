import {
  SimpleGrid,
  Card,
  Container,
  CardBody,
  Stack,
  Badge,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  image: string;
  mainGenre: string;
  abstract: string;
  title: string;
}
const BookCard = ({ image, mainGenre, title, abstract }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        margin="auto"
        width="fit-content"
        marginY={8}
      >
        <Card
          variant="filled"
          width={{ base: "90vw", md: "430px" }}
          height={{ base: "340px", md: "100%" }}
          borderRadius={0}
          justifyContent="center"
          margin="auto"
        >
          <Container margin="auto" centerContent>
            <Image src={image} width="180px" />
          </Container>
        </Card>
        <Card
          width={{ base: "90vw", md: "430px" }}
          textAlign={{ base: "center", md: "left" }}
          height={{ base: "fit-content", md: "fit-content" }}
          borderRadius={0}
          padding={{ base: "1px", md: "20px" }}
        >
          <CardBody>
            <Stack>
              <Text
                textTransform="uppercase"
                fontSize="12px"
                letterSpacing={2}
                fontWeight="bold"
                color="gray.400"
              >
                {mainGenre}
              </Text>
              <Text fontSize="28px" fontWeight="bold">
                {title}
              </Text>
              <Badge
                width="fit-content"
                color="white"
                bg="brand.200"
                alignSelf={{ base: "center", md: "normal" }}
                fontSize="11px"
                fontWeight="normal"
              >
                REPEAT AUTHOR
              </Badge>
              <Text paddingBottom={{ base: "0", md: "20px" }} textAlign="left">
                {abstract}
              </Text>
              <Button
                variant="btn-primary"
                width={{ base: "85vw ", md: "fit-content" }}
                alignSelf={{ base: "center", md: "normal" }}
                paddingX={{ md: "40px" }}
                paddingY="23px"
              >
                Make my BOTM
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default BookCard;
