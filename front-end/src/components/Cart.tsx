import { Badge, Spinner } from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useCartStore from "../store/cartStore";
import useUserStore from "../store/userStore";

const Cart = () => {
  const { user } = useUserStore();

  const current = useCartStore((s) => s.current);
  const removeClick = useCartStore((s) => s.removeClick);
  const { data, isLoading } = useCart([current, removeClick]);

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
