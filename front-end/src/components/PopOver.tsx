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
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import useCartStore from "../store/cartStore";
import { useEffect } from "react";

const PopOver = () => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const { data } = useCart();
  const current = useCartStore((s) => s.current);

  useEffect(() => onToggle, [current]);

  return (
    <>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Button variant="outline">
            <Icon as={AiOutlineShoppingCart} boxSize="22px" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width="400px">
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
