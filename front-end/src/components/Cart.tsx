import { Badge } from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const current = useCartStore((s) => s.current);
  const removeClick = useCartStore((s) => s.removeClick);
  const { data } = useCart([current, removeClick]);

  return (
    <>
      <Badge
        // padding={0}
        // marginLeft={"-20px"}
        borderRadius="50%"
        bg="brand.100"
        color="white"
        width="17px"
        height="17px"
        textAlign="center"
      >
        {data?.books.reduce((acc, cur) => acc + 1, 0)}
      </Badge>
    </>
  );
};

export default Cart;
