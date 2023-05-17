import { Badge } from "@chakra-ui/react";
import { Book } from "../entities/Book";
import useCart from "../hooks/useCart";

export interface CartResponse {
  books: Book[];
  customer: string;
}

const Cart = () => {
  const { data, isLoading } = useCart();

  return (
    <>
      <Badge borderRadius="50%" bg="brand.100" color="white">
        {data?.books.reduce((acc, cur) => acc + 1, 0)}
      </Badge>
    </>
  );
};

export default Cart;
