import { useQuery } from "@tanstack/react-query";
import APIClient, { CartRequest } from "../services/apiClient";
import useUserStore from "../store/userStore";
import { Badge, Spinner, Stack, Text } from "@chakra-ui/react";
import { Book } from "../entities/Book";
import useCartStore from "../store/cartStore";
import { useEffect, useMemo, useState } from "react";
import useCart from "../hooks/useCart";

export interface CartResponse {
  books: Book[];
  customer: string;
}

const apiClient = new APIClient<CartResponse>("/carts");

const Cart = () => {
  const { data, status, isSuccess, refetch } = useCart();
  // if (isSuccess) console.log(data, status);
  const cart = useCartStore((s) => s.cart);

  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (data) setCount(data.books.reduce((acc, cur) => acc + 1, 0));
  }, [data]);

  // const { data, isLoading, isSuccess, status } = useCart();
  // console.log("status", status, data);

  // if (!data)
  //   return (
  //     <Badge borderRadius="50%" bg="brand.100" color="white">
  //       0
  //     </Badge>
  //   );

  return (
    <>
      {/* <Stack>
        {cart.map((book) => (
          <Text key={book._id}>{book.title}</Text>
        ))}
      </Stack> */}
      <Badge borderRadius="50%" bg="brand.100" color="white">
        {/* {status === "success" && data?.books.length} */}
        {/* {data?.books.reduce((acc, cur) => acc + 1, 0)} */}
        {count}
      </Badge>
    </>
  );
};

export default Cart;
