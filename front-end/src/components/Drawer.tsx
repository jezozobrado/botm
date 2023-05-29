import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import useDrawerStore from "../store/drawerStore";
import useUserStore from "../store/userStore";
import DrawerWithoutUser from "./DrawerWithoutUser";

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
            <Stack gap={5} fontSize="19px">
              {navItems.map(({ url, displayName }, index) => (
                <NavLink
                  onClick={() => {
                    resetIsOpen();
                    navigate("/");
                  }}
                  key={index}
                  to={url}
                  style={({ isActive }: { isActive: boolean }) => ({
                    color: isActive ? "#11afe2" : "",
                  })}
                >
                  {displayName}
                </NavLink>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter width="100%">
            {user ? (
              <Button
                variant="btn-primary-block"
                onClick={() => {
                  localStorage.removeItem("x-auth-token");
                  setUser(null);
                  resetIsOpen();
                  navigate("/");
                }}
              >
                Logout
              </Button>
            ) : (
              <DrawerWithoutUser />
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
