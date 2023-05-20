import { HStack, Button } from "@chakra-ui/react";
import Header from "../components/Header";

const Gift = () => {
  return (
    <>
      <Header
        heading={"The perfect gift for fun-havers."}
        subheading={"Let them choose their next reads, on you."}
      />

      <HStack justifyContent="center" mt="20px">
        <Button variant="btn-primary">Give a gift</Button>
        <Button variant="btn-secondary">Redeem a gift</Button>
      </HStack>
    </>
  );
};

export default Gift;
