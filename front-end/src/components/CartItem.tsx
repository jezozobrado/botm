import { Book } from "../entities/Book";
import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  book: Book;
}
const CartItem = ({ book }: Props) => (
  <>
    <HStack my={2}>
      <Image src={book.image} width="80px" />
      <Stack gap={0}>
        <Text fontWeight="bold">{book.title}</Text>
        <Text>{`by ${book.author}`}</Text>
        <Button variant="btn-link">Remove</Button>
      </Stack>
    </HStack>
  </>
);

export default CartItem;
