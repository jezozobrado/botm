import {
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Hide,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Show,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import User from "../entities/User";
import useUserStore from "../store/userStore";
import Cart from "./Cart";
import PopOver from "./PopOver";
import useDrawerStore from "../store/drawerStore";
import NavDrawer from "./Drawer";
import RegForm from "./RegForm";
import RegFormModal from "./RegFormModal";

const NavBar = () => {
  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
    { url: "/relationship-status", displayName: "Relationship status" },
  ];

  const { isOpen: isOpenSignUp, onOpen, onClose } = useDisclosure();

  const { user, setUser } = useUserStore();

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

            {!user && <RegFormModal buttonText={"Sign up"} />}
          </HStack>
        </HStack>
      </Show>

      <Show below="xl">
        <Grid
          templateColumns={{ base: "40px 1fr auto", md: "40px 1fr auto" }}
          marginX="20px"
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
              <RxHamburgerMenu size="40px" />
            </Button>
            <NavDrawer />
          </GridItem>
          <GridItem margin="auto">
            <Link to="/">
              <Logo />
            </Link>
          </GridItem>
          {user && (
            <GridItem>
              <HStack>
                {/* {user && <Text>{`Hello ${user?.firstName}`}</Text>} */}
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
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                )}
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
          )}
        </Grid>
      </Show>
      <Divider />
    </>
  );
};

export default NavBar;
