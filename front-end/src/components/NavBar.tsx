import {
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Hide,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

const NavBar = () => {
  return (
    <>
      <Show above="xl">
        <HStack marginX="100px" marginY={3}>
          <Link to="/">
            <Logo />
          </Link>
          <HStack gap={5} fontSize="16px" paddingStart="20px">
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
            <Button width="120px" variant="btn-primary">
              Sign up
            </Button>
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
