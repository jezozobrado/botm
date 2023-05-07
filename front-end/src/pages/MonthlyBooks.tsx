import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import halfMoon from "../assets/half-moon.webp";

const MonthlyBooks = () => {
  return (
    <>
      <Heading fontSize={{ base: "60px", md: "110px" }} fontWeight="medium">
        May Books
      </Heading>
      <SimpleGrid templateColumns="repeat(2, 1fr)" width="860px" margin="auto">
        <Card variant="filled" width="430px" height="340px" borderRadius={0}>
          <Container margin="auto" centerContent>
            <Image src={halfMoon} width="180px" />
          </Container>
        </Card>
        <Card
          width="430px"
          justifyContent="center"
          margin="auto"
          height="340px"
          borderRadius={0}
          padding={5}
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
              <Badge width="fit-content" color="white" bg="brand.200">
                REPEAT AUTHOR
              </Badge>
              <Text>
                A husband drowning in debt and a wife grappling with infertility
                have their relationship tested during a winter storm.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="btn-primary" width="fit-content">
              Make my BOTM
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default MonthlyBooks;
