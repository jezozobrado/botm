import { HStack, Stack, Button, Text, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import PricePlan from "../components/PricePlan";

const Gift = () => {
  return (
    <>
      <Header
        heading={"The perfect gift for fun-havers."}
        subheading={"Let them choose their next reads, on you."}
      />

      <HStack justifyContent="center" my="20px">
        <Button variant="btn-primary">Give a gift</Button>
        <Button variant="btn-secondary">Redeem a gift</Button>
      </HStack>

      <Box bg="brand.200" py="40px">
        <Text textAlign="center" color="white" variant="text-primary" mb="20px">
          Choose your plan.
        </Text>

        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
        >
          <PricePlan
            props={{
              headerText: "3 months",
              bodyText: "59.99",
              footerText: " ",
            }}
          />
          <PricePlan
            props={{
              headerText: "6 months",
              bodyText: "99.99",
              footerText: "   ",
            }}
          />
          <PricePlan
            props={{
              headerText: "12 months",
              bodyText: "199.99",
              footerText: "",
            }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Gift;
