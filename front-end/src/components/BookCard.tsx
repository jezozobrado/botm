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
  slug: string;
  badges?: string[];
}
const BookCard = ({
  image,
  mainGenre,
  title,
  abstract,
  badges,
  slug,
}: Props) => {
  const badgeMap: { [key: string]: string } = {
    Debut: "green",
    "Repeat Author": "brand.200",
    "BOTY Finalist": "pink",
  };

  return (
    <Link to={"/all-books/" + slug}>
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

              <Text variant="text-primary" textTransform="capitalize">
                {title}
              </Text>

              <HStack justifyContent={{ base: "center", md: "start" }}>
                {badges?.map((badge, index) => (
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
    </Link>
  );
};

export default BookCard;
