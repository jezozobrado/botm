import { Badge, Spinner } from "@chakra-ui/react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { data, isLoading } = useCart();

  return (
    <>
      {isLoading && <Spinner />}
      <Badge borderRadius="50%" bg="brand.100" color="white">
        {data?.books.reduce((acc, cur) => acc + 1, 0)}
      </Badge>
    </>
  );
};

export default Cart;
