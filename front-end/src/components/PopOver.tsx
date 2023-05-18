import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useCartStore from "../store/cartStore";
import CartItem from "./CartItem";
import _ from "lodash";
import useUserStore from "../store/userStore";

const PopOver = () => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const current = useCartStore((s) => s.current);
  const removeClick = useCartStore((s) => s.removeClick);
  const isMoreThanThree = useCartStore((s) => s.isMoreThanThree);
  const setIsMoreThanThree = useCartStore((s) => s.setIsMoreThanThree);

  const { data } = useCart([current, removeClick]);

  useEffect(() => onOpen, [current]);

  return (
    <>
      <Popover
        trigger="hover"
        isOpen={isOpen}
        onClose={() => {
          isMoreThanThree && setIsMoreThanThree(false);
        }}
      >
        <PopoverTrigger>
          <Button
            variant="outline"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onFocus={onOpen}
            onBlur={onClose}
          >
            <Icon as={AiOutlineShoppingCart} boxSize="22px" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            width="400px"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onFocus={onOpen}
            onBlur={onClose}
            _after={{
              content: "''",
              position: "absolute",
              w: "100%",
              h: "8px",
              top: "-8px",
              left: 0,
            }}
          >
            <PopoverArrow />
            <PopoverHeader>
              {data?.books.length! < 3 ? (
                "You can choose up to 3 books."
              ) : isMoreThanThree ? (
                <Text color="red">Your box cannot exceed 3 books.</Text>
              ) : (
                "Your box is full."
              )}
            </PopoverHeader>
            <PopoverCloseButton onClick={onClose} />
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
                <HStack justifyContent="space-around">
                  {data?.books.length > 0 && (
                    <Button variant="btn-primary" width="100%">
                      Check out
                    </Button>
                  )}
                  {_.inRange(data?.books.length, 0, 3) && (
                    <Link to="/all-books">
                      <Button variant="btn-secondary" width="100%">
                        Choose add-ons
                      </Button>
                    </Link>
                  )}
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
