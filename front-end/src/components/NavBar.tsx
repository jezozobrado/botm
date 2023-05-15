import {
  Badge,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Hide,
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
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import useUserStore from "../store/userStore";
import jwtDecode from "jwt-decode";
import User from "../entities/User";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCartStore from "../store/cartStore";

const NavBar = () => {
  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
    { url: "/relationship-status", displayName: "Relationship status" },
  ];

  const { user, setUser } = useUserStore();
  const { cart, setCart } = useCartStore();

  const token = localStorage.getItem("x-auth-token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token) as User;
      setUser(decoded);
    }
  }, [token]);

  return (
    <>
      <Show above="xl">
        <HStack marginX="100px" marginY={3}>
          <Link to="/">
            <Logo />
          </Link>
          <HStack gap={5} fontSize="16px" paddingStart="20px">
            {navItems.map(({ url, displayName }, index) => (
              <NavLink
                key={index}
                to={url}
                style={({ isActive }: { isActive: boolean }) => ({
                  color: isActive ? "#11afe2" : "",
                })}
              >
                {displayName}
              </NavLink>
            ))}
          </HStack>
          <Spacer width="100px" />
          <HStack>
            {user && <Text>{`Hello ${user?.firstName}`}</Text>}
            {user && (
              <Badge borderRadius="50%" bg="brand.100" color="white">
                {cart.length}
              </Badge>
            )}
            {user && (
              <>
                <Popover>
                  <PopoverTrigger>
                    <Button variant="outline">
                      <Icon as={AiOutlineShoppingCart} boxSize="22px" />
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>
                        You can choose up to 3 books!
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        {cart.map((c) => (
                          <Text key={c._id}>{c.title}</Text>
                        ))}
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </>
            )}
            {user && (
              <Link to="/">
                <Button
                  leftIcon={<BiUserCircle size="22px" />}
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("x-auth-token");
                    setUser(null);
                  }}
                >
                  Logout
                </Button>
              </Link>
            )}
            {!user && (
              <Link to="/login">
                <Button
                  leftIcon={<BiUserCircle size="22px" />}
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
            )}
            {!user && (
              <Button width="120px" variant="btn-primary">
                Sign up
              </Button>
            )}
          </HStack>
        </HStack>
      </Show>

      <Show below="xl">
        <Grid
          templateColumns={{ base: "40px 1fr", md: "40px 1fr auto" }}
          marginX="20px"
          marginY={3}
        >
          <GridItem>
            <RxHamburgerMenu size="40px" />
          </GridItem>
          <GridItem margin="auto">
            <Link to="/">
              <Logo />
            </Link>
          </GridItem>
          <Hide below="md">
            <GridItem>
              <Button
                variant="solid"
                width="120px"
                bg="brand.100"
                color="white"
              >
                Sign up
              </Button>
            </GridItem>
          </Hide>
        </Grid>
      </Show>
      <Divider />
    </>
  );
};

export default NavBar;
