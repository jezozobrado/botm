import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  mainGenre: string;
  abstract: string;
  title: string;
  badges: string[];
  slug: string;
  author: string[];
}
const BookDetailCard = ({
  image,
  mainGenre,
  title,
  abstract,
  badges,
  slug,
  author,
}: Props) => {
  const badgeMap: { [key: string]: string } = {
    Debut: "green",
    "Repeat Author": "brand.200",
    "BOTY Finalist": "pink",
  };

  return (
    <Link to={"/all-books/" + slug}>
      <SimpleGrid columns={1} margin="auto" width="fit-content" marginY={8}>
        <Card
          variant="filled"
          width="40vw"
          height="fit-content"
          paddingY="30px"
          borderRadius={0}
        >
          <Container margin="auto" centerContent>
            <Image src={image} width="180px" />
          </Container>
        </Card>
        <Card
          width="40vw"
          textAlign="center"
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

              <Text
                fontSize="28px"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {title}
              </Text>

              <HStack justifyContent="center">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    width="fit-content"
                    bg={badgeMap[badge]}
                    color="white"
                    alignSelf={{ base: "center", md: "normal" }}
                    fontSize="11px"
                    fontWeight="normal"
                    paddingX="5px"
                    paddingY="2px"
                  >
                    {badge}
                  </Badge>
                ))}
              </HStack>

              <Text textAlign="center">by {author}</Text>
              <Button
                variant="btn-primary"
                width={{ base: "85vw ", md: "fit-content" }}
                alignSelf="center"
                paddingX={{ md: "40px" }}
                paddingY="23px"
              >
                Make my BOTM
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Link>
  );
};

export default BookDetailCard;