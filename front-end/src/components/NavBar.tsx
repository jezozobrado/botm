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
import logo from "../assets/logo.svg";
import reactt from "../assets/react.svg";
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
        <Logo />
        <HStack gap={5}>
          <Link>May books</Link>
          <Link>All books</Link>
          <Link>How it works</Link>
          <Link>Gifts</Link>
          <Link>Relationship status</Link>
        </HStack>
        <Spacer width="100px" />

        <HStack>
          <Button leftIcon={<BiUserCircle size="22px" />} variant="outline">
            Login
          </Button>
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
