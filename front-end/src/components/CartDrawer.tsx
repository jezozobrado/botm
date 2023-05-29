import {
  AspectRatio,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsBoxSeam } from "react-icons/bs";
import useCart from "../hooks/useCart";
import useCartStore from "../store/cartStore";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import _ from "lodash";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const current = useCartStore((s) => s.current);
  const removeClick = useCartStore((s) => s.removeClick);
  const { data } = useCart([current, removeClick]);

  return (
    <>
      <Button
        width="22px"
        height="22px"
        padding={0}
        variant="outline"
        border="none"
        _hover={{ bg: "none" }}
        onClick={onOpen}
      >
        <Icon as={BsBoxSeam} boxSize="22px" />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your May Box</DrawerHeader>

          <DrawerBody>
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
          </DrawerBody>
          {!!data?.books.length && (
            <DrawerFooter>
              <HStack justifyContent="space-around">
                {data?.books?.length > 0 && (
                  <Button variant="btn-primary" width="100%">
                    Check out
                  </Button>
                )}
                {_.inRange(data?.books?.length, 0, 3) && (
                  <Link to="/all-books">
                    <Button variant="btn-secondary" width="100%">
                      Choose add-ons
                    </Button>
                  </Link>
                )}
              </HStack>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
