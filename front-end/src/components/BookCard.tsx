import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import APIClient, { CartRequest } from "../services/apiClient";
import { Book } from "../entities/Book";
import useUserStore from "../store/userStore";
import useCartStore from "../store/cartStore";
import useCart from "../hooks/useCart";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const badgeMap: { [key: string]: string } = {
    Debut: "green",
    "Repeat Author": "brand.200",
    "BOTY Finalist": "pink",
  };

  const { user } = useUserStore();
  const setCurrent = useCartStore((s) => s.setCurrent);
  const setCart = useCartStore((s) => s.setCart);
  const editCart = useCartStore((s) => s.editCart);

  const apiClient = new APIClient<CartRequest>("/carts");

  const addToCart = useMutation({
    mutationFn: (cart: CartRequest) => apiClient.addToCart(cart),
    onSuccess: (data) => {},
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      margin="auto"
      width="fit-content"
      marginY={8}
    >
      <Link to={"/all-books/" + book.slug}>
        <Card
          variant="filled"
          width={{ base: "90vw", md: "430px" }}
          height={{ base: "340px", md: "100%" }}
          borderRadius={0}
          justifyContent="center"
          margin="auto"
        >
          <Container margin="auto" centerContent>
            <Image src={book.image} width="180px" />
          </Container>
        </Card>
      </Link>
      <Card
        width={{ base: "90vw", md: "430px" }}
        textAlign={{ base: "center", md: "left" }}
        height={{ base: "fit-content", md: "fit-content" }}
        borderRadius={0}
        padding={{ base: "1px", md: "20px" }}
      >
        <CardBody>
          <Stack>
            <Text variant="text-tertiary">{book.mainGenre}</Text>
            <Link to={"/all-books/" + book.slug}>
              <Text variant="text-primary" textTransform="capitalize">
                {book.title}
              </Text>
            </Link>

            <HStack justifyContent={{ base: "center", md: "start" }}>
              {book.badges?.map((badge, index) => (
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
              {book.description}
            </Text>
            <Button
              variant="btn-primary"
              width={{ base: "85vw ", md: "fit-content" }}
              alignSelf={{ base: "center", md: "normal" }}
              paddingX={{ md: "40px" }}
              paddingY="23px"
              onClick={() => {
                console.log("Clicked start");
                addToCart
                  .mutateAsync({ book: book, customer: user?._id })
                  .then((res) => setCurrent());
                console.log(addToCart.status);

                // if (addToCart.status === "success");
                console.log("Clicked done");
              }}
            >
              {addToCart.isLoading ? <Spinner /> : "Make my BOTM"}
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default BookCard;
