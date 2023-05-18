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
  Text,
} from "@chakra-ui/react";
import useDrawerStore from "../store/drawerStore";
import { NavLink } from "react-router-dom";

const NavDrawer = () => {
  const isOpen = useDrawerStore((s) => s.isOpen);
  const resetIsOpen = useDrawerStore((s) => s.resetIsOpen);

  const navItems: { url: string; displayName: string }[] = [
    { url: "/the-best-new-books", displayName: "May Books" },
    { url: "/all-books", displayName: "All Books" },
    { url: "/how-it-works", displayName: "How it works" },
    { url: "/gift", displayName: "Gifts" },
    { url: "/relationship-status", displayName: "Relationship status" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={resetIsOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

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
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
