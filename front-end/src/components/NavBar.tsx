import {
  Box,
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
import useDrawerStore from "../store/drawerStore";
import useUserStore from "../store/userStore";
import Cart from "./Cart";
import NavDrawer from "./Drawer";
import PopOver from "./PopOver";
import RegFormModal from "./RegFormModal";

const NavBar = () => {
  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
    { url: "/relationship-status", displayName: "Relationship status" },
  ];

  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);

  const setIsOpen = useDrawerStore((s) => s.setIsOpen);
  const isOpen = useDrawerStore((s) => s.isOpen);

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
                  fontSize: "17px",
                })}
              >
                {displayName}
              </NavLink>
            ))}
          </HStack>
          <Spacer width="100px" />
          <HStack>
            {user && <Text me="-35px">{`${user?.firstName}'s box`}</Text>}
            {user && (
              <Box position="relative" left="56px" bottom="10px" zIndex={1}>
                <Cart />
              </Box>
            )}
            {user && <PopOver />}
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
                  variant="btn-secondary-black"
                >
                  Login
                </Button>
              </Link>
            )}

            {!user && (
              <RegFormModal buttonText={"Sign up"} btnVariant={"btn-primary"} />
            )}
          </HStack>
        </HStack>
      </Show>

      <Show below="xl">
        <HStack
          borderBottom="solid RGBA(0, 0, 0, 0.1) 1px"
          py={3}
          position="fixed"
          w="100%"
          backgroundColor="white"
          zIndex={1}
          justifyContent="space-between"
        >
          <Button
            bg="none"
            _hover={{ bg: "none" }}
            onClick={() => {
              setIsOpen();
              console.log(isOpen);
            }}
          >
            <RxHamburgerMenu size="30px" />
          </Button>
          <NavDrawer />
          <Link to="/">
            <Logo />
          </Link>
          {user && (
            <HStack>
              <Box position="relative" left="56px" bottom="10px" zIndex={1}>
                <Cart />
              </Box>

              <PopOver />
            </HStack>
          )}
          {!user && (
            <Hide below="xm">
              <Button
                variant="solid"
                width="120px"
                bg="brand.100"
                color="white"
              >
                Sign up
              </Button>
            </Hide>
          )}
        </HStack>
        {/* <Grid
          templateColumns={{ base: "40px 1fr 1fr", md: "40px 1fr auto" }}
          marginX={{ base: "", md: "20px" }}
          marginY={3}
        >
          <GridItem>
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              onClick={() => {
                setIsOpen();
                console.log(isOpen);
              }}
            >
              <RxHamburgerMenu size="30px" />
            </Button>
            <NavDrawer />
          </GridItem>
          <GridItem margin="auto">
            <Link to="/">
              <Logo />
            </Link>
          </GridItem>

          <GridItem>
            {user && (
              <HStack>
                <Box position="relative" left="56px" bottom="10px" zIndex={1}>
                  <Cart />
                </Box>

                <PopOver />
              </HStack>
            )}
            {!user && (
              <Hide below="xm">
                <Button
                  variant="solid"
                  width="120px"
                  bg="brand.100"
                  color="white"
                >
                  Sign up
                </Button>
              </Hide>
            )}
          </GridItem>
        </Grid> */}
      </Show>
      <Divider />
    </>
  );
};

export default NavBar;

/* {user && (
            <GridItem>
              <HStack>
                {user && (
                  <Box position="relative" left="56px" bottom="10px" zIndex={1}>
                    <Cart />
                  </Box>
                )}
                {user && <PopOver />}
              </HStack>
            </GridItem>
          )}
          {!user && (
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
          )} */
