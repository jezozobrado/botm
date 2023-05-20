import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import useDrawerStore from "../store/drawerStore";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import RegFormModal from "./RegFormModal";

const NavDrawer = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);

  const isOpen = useDrawerStore((s) => s.isOpen);
  const resetIsOpen = useDrawerStore((s) => s.resetIsOpen);

  const navigate = useNavigate();

  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
  ];

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={resetIsOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Books are our jam.</DrawerHeader>

          <DrawerBody>
            <Stack gap={5} fontSize="16px" paddingStart="20px">
              {navItems.map(({ url, displayName }, index) => (
                <NavLink
                  onClick={resetIsOpen}
                  key={index}
                  to={url}
                  style={({ isActive }: { isActive: boolean }) => ({
                    color: isActive ? "#11afe2" : "",
                  })}
                >
                  {displayName}
                </NavLink>
              ))}
              {user && (
                <Link to="/">
                  <Button
                    variant="btn-link"
                    onClick={() => {
                      localStorage.removeItem("x-auth-token");
                      setUser(null);
                      resetIsOpen();
                    }}
                  >
                    Logout
                  </Button>
                </Link>
              )}
              <Button
                variant="btn-link"
                onClick={() => {
                  navigate("/login");
                  resetIsOpen();
                }}
              >
                Login
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
