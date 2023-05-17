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
  Text,
  Image,
  Badge,
  Stack,
  Box,
  AspectRatio,
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

  const isMoreThanThree = useCartStore((s) => s.isMoreThanThree);

  const setIsMoreThanThree = useCartStore((s) => s.setIsMoreThanThree);
  useEffect(() => onToggle, [current]);

  return (
    <>
      <Popover
        trigger="hover"
        onClose={() => {
          isMoreThanThree && setIsMoreThanThree();
        }}
      >
        <PopoverTrigger>
          <Button variant="outline">
            <Icon as={AiOutlineShoppingCart} boxSize="22px" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width="400px">
            <PopoverArrow />
            <PopoverHeader>
              {data?.books.length! < 3
                ? "You can choose up to 3 books."
                : isMoreThanThree
                ? "Your box cannot exceed 3 books."
                : "Your box is full."}
              {/* {isMoreThanThree && (
                <Badge
                  color="white"
                  bgColor="red.500"
                  whiteSpace="normal"
                  fontSize="15px"
                >
                  Cart can't exceed 3 books! Please remove one of the books.
                </Badge>
              )} */}
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {data?.books.length! > 0 ? (
                <>
                  {data?.books.map((c, i) => (
                    <CartItem key={i} book={c} />
                  ))}
                </>
              ) : (
                <HStack my={2}>
                  <AspectRatio width="80px" ratio={2 / 3}>
                    <Box border="solid RGBA(0, 0, 0, 0.1) 1px" />
                  </AspectRatio>

                  <Stack gap={0}>
                    <Text fontWeight="bold">
                      Add your favorites to your box now!
                    </Text>
                    <Link to="/all-books">
                      <Button variant="btn-link">See the books</Button>
                    </Link>
                  </Stack>
                </HStack>
              )}
            </PopoverBody>
            {!!data?.books.length && (
              <PopoverFooter>
                <HStack>
                  <Button variant="btn-primary">Check out</Button>
                  <Link to="/all-books">
                    <Button variant="btn-secondary">Choose add-ons</Button>
                  </Link>
                </HStack>
              </PopoverFooter>
            )}
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default PopOver;
