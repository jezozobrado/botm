import { Book } from "../entities/Book";
import { Button, HStack, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import APIClient from "../services/apiClient";
import { CartResponse } from "../hooks/useCart";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "../store/userStore";
import useCartStore from "../store/cartStore";

interface Props {
  book?: Book;
}

export interface Params {
  user?: string;
  book?: string;
}

const CartItem = ({ book }: Props) => {
  const apiClient = new APIClient<CartResponse>("/carts");
  const user = useUserStore((s) => s.user);
  const setCurrent = useCartStore((s) => s.setCurrent);

  const removeItem = useMutation({
    mutationFn: (params: Params) => apiClient.removeCartItem(params),
    onSuccess: (data) => console.log("data", data),
    onError: (err) => console.error("error", err),
  });

  return (
    <>
      <HStack my={2}>
        <Image src={book?.image} width="80px" />
        <Stack gap={0}>
          <Text fontWeight="bold">{book?.title}</Text>
          <Text>{`by ${book?.author}`}</Text>
          {!removeItem.isLoading ? (
            <Button
              variant="btn-link"
              onClick={() => {
                removeItem
                  .mutateAsync({ user: user?._id, book: book?._id })
                  .then(() => setCurrent())
                  .catch((err) => console.error(err));
              }}
            >
              Remove
            </Button>
          ) : (
            <Spinner />
          )}
        </Stack>
      </HStack>
    </>
  );
};
export default CartItem;
