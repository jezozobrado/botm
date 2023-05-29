import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Hide,
  Icon,
  Popover,
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
import { BsBoxSeam } from "react-icons/bs";
import CartDrawer from "./CartDrawer";

const NavBar = () => {
  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gifts", displayName: "Gifts" },
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
        {user && (
          <Grid templateColumns={"50px 1fr 50px"} py={3} alignItems={"center"}>
            <GridItem>
              <Button
                paddingRight={0}
                bg="none"
                _hover={{ bg: "none" }}
                onClick={() => setIsOpen()}
              >
                <RxHamburgerMenu size="30px" />
              </Button>
              <NavDrawer />
            </GridItem>
            <GridItem>
              <Box
                margin="auto"
                width="230px"
                transform={{ base: "scale(0.8)", sm: "scale(1)" }}
              >
                <Link to="/">
                  <Logo />
                </Link>
              </Box>
            </GridItem>

            <Show below="md">
              <GridItem>
                <CartDrawer />
              </GridItem>
            </Show>

            <Hide below="md">
              <GridItem>
                <PopOver />
              </GridItem>
            </Hide>
          </Grid>
        )}
        {/* {user && (
          <HStack
            borderBottom="solid RGBA(0, 0, 0, 0.1) 1px"
            py={3}
            // position="fixed"
            w="100%"
            backgroundColor="white"
            zIndex={1}
            // justifyContent="space-between"
          >
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              onClick={() => setIsOpen()}
            >
              <RxHamburgerMenu size="30px" />
            </Button>
            <NavDrawer />
            <Box transform="scale(0.8)">
              <Link to="/">
                <Logo />
              </Link>
            </Box>
            <HStack>
              <Box
                margin={0}
                padding={0}
                position="relative"
                left="56px"
                bottom="10px"
                zIndex={1}
              >
                <Cart />
              </Box>

              <PopOver />
            </HStack>
          </HStack>
        )} */}

        {!user && (
          <HStack
            borderBottom="solid RGBA(0, 0, 0, 0.1) 1px"
            py={3}
            position="fixed"
            w="100%"
            backgroundColor="white"
            zIndex={1}
            // justifyContent="space-between"
          >
            <Button
              paddingLeft={"16px"}
              paddingRight={"0px"}
              bg="none"
              _hover={{ bg: "none" }}
              onClick={() => setIsOpen()}
            >
              <RxHamburgerMenu size="30px" />
            </Button>
            <NavDrawer />
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="center"
              paddingRight={"70px"}
            >
              <Link to="/">
                <Logo />
              </Link>
            </Box>
          </HStack>
        )}
      </Show>
      <Divider />
    </>
  );
};

export default NavBar;
