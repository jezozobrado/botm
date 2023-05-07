import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import halfMoon from "../assets/half-moon.webp";

const MonthlyBooks = () => {
  return (
    <>
      <Heading fontSize={{ base: "60px", md: "110px" }} fontWeight="medium">
        May Books
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        margin="auto"
        width="fit-content"
      >
        <Card
          variant="filled"
          width={{ base: "90vw", md: "430px" }}
          height="340px"
          borderRadius={0}
          justifyContent="center"
          margin="auto"
        >
          <Container margin="auto" centerContent>
            <Image src={halfMoon} width="180px" />
          </Container>
        </Card>
        <Card
          width={{ base: "90vw", md: "430px" }}
          textAlign={{ base: "center", md: "left" }}
          height={{ base: "fit-content", md: "340px" }}
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
                Literary Fiction
              </Text>
              <Text fontSize="28px" fontWeight="bold">
                The Half Moon
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
                A husband drowning in debt and a wife grappling with infertility
                have their relationship tested during a winter storm.
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
          {/* <CardFooter>
            <Button variant="btn-primary" width="fit-content">
              Make my BOTM
            </Button>
          </CardFooter> */}
        </Card>
      </SimpleGrid>
    </>
  );
};

export default MonthlyBooks;
