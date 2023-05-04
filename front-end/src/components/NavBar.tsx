import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <HStack
        justifyContent="space-between"
        marginEnd="180px"
        marginStart="100px"
        marginY={3}
        alignItems="center"
      >
        <Link to="/">
          <Logo />
        </Link>
        <HStack gap={5}>
          <Link to="/the-best-new-books">May books</Link>
          <Link to="/all-books">All books</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/gift">Gifts</Link>
          <Link to="/relationship-status">Relationship status</Link>
        </HStack>
        <Spacer width="100px" />

        <HStack>
          <Link to="/login">
            <Button leftIcon={<BiUserCircle size="22px" />} variant="outline">
              Login
            </Button>
          </Link>
          <Button variant="solid" width="120px" colorScheme="blue">
            Sign up
          </Button>
        </HStack>
      </HStack>
      <Divider />
    </>
  );
};

export default NavBar;
