import {
  Badge,
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
import { Book } from "../entities/Book";
import AddToBoxButton from "./AddToBoxButton";
import useUserStore from "../store/userStore";

interface Props {
  book: Book;
}
const BookDetailCard = ({ book }: Props) => {
  const user = useUserStore((s) => s.user);
  const badgeMap: { [key: string]: string } = {
    Debut: "green",
    "Repeat Author": "brand.200",
    "BOTY Finalist": "pink",
  };

  return (
    <Link to={"/all-books/" + book.slug}>
      <SimpleGrid columns={1} margin="auto" marginY={8}>
        <Card
          margin="auto"
          variant="filled"
          width={{ base: "80vw", md: "600px" }}
          height="fit-content"
          paddingY="30px"
          borderRadius={0}
        >
          <Container margin="auto" centerContent>
            <Image src={book.image} width="180px" />
          </Container>
        </Card>
        <Card
          margin="auto"
          width={{ base: "80vw", md: "600px" }}
          textAlign="center"
          height={{ base: "fit-content", md: "fit-content" }}
          borderRadius={0}
          padding={{ base: "1px", md: "20px" }}
        >
          <CardBody>
            <Stack>
              <Text variant="text-tertiary">{book.mainGenre}</Text>

              <Text variant="text-primary" textTransform="capitalize">
                {book.title}
              </Text>

              <HStack justifyContent="center">
                {book?.badges?.map((badge, index) => (
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

              <Text textAlign="center">by {book.author}</Text>
              {user && (
                <Container margin="auto">
                  <AddToBoxButton book={book} />
                </Container>
              )}
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Link>
  );
};

export default BookDetailCard;
