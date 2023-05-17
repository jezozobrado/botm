import {
  Popover,
  PopoverTrigger,
  Button,
  Icon,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useUserStore from "../store/userStore";
import { useQuery } from "@tanstack/react-query";
import APIClient, { CartRequest } from "../services/apiClient";
import CartItem from "./CartItem";
import useCartStore from "../store/cartStore";
import { CartResponse } from "./Cart";

const apiClient = new APIClient<CartResponse>("/carts");

const PopOver = () => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const { user } = useUserStore();
  const { cart, setCart } = useCartStore();

  const { data } = useQuery({
    queryKey: ["cart", cart],
    queryFn: () => apiClient.getCartItems(user?._id),
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (err) => console.error(err),
    staleTime: 24 * 60 * 1000 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Popover closeDelay={0}>
        <PopoverTrigger>
          <Button variant="outline">
            <Icon as={AiOutlineShoppingCart} boxSize="22px" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            width="400px"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <PopoverArrow />
            <PopoverHeader>You can choose up to 3 books!</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {data?.books.map((c, i) => (
                <CartItem key={i} book={c} />
              ))}
            </PopoverBody>
            <PopoverFooter>
              <HStack>
                <Button variant="btn-primary">Check out</Button>
                <Link to="/all-books">
                  <Button variant="btn-secondary">Choose add-ons</Button>
                </Link>
              </HStack>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default PopOver;
