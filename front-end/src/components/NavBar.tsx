import {
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Hide,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import User from "../entities/User";
import useCartStore from "../store/cartStore";
import useUserStore from "../store/userStore";
import Cart from "./Cart";
import PopOver from "./PopOver";

const NavBar = () => {
  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
    { url: "/relationship-status", displayName: "Relationship status" },
  ];

  const { user, setUser } = useUserStore();
  const { resetCart } = useCartStore();

  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      const decoded = jwtDecode(token) as User;
      setUser(decoded);
    }
  }, []);

  return (
    <>
      <Show above="xl">
        <HStack
          borderBottom="solid RGBA(0, 0, 0, 0.1) 1px"
          px="100px"
          py={3}
          position="fixed"
          w="100%"
          backgroundColor="white"
          zIndex={1}
        >
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
            {user && <Cart />}
            {user && <PopOver />}
            {user && (
              <Link to="/">
                <Button
                  leftIcon={<BiUserCircle size="22px" />}
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("x-auth-token");
                    setUser(null);
                    resetCart();
                    resetCart();
                    localStorage.removeItem("cart");
                    localStorage.removeItem("user");
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
            f
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
