import { Stack, Box, Text } from "@chakra-ui/react";

import RegForm from "../RegForm";

const RegEnd = () => {
  return (
    <Box textAlign="center" bg="brand.200" color="white">
      <Stack
        width={{ base: "90vw", sm: "400px" }}
        marginX="auto"
        paddingY="70px"
        gap={2}
      >
        <Text variant="text-primary">You'll like it, we promise.</Text>
        <Text>(Besides, it's free to sign up.)</Text>
        <RegForm submitText="Sign up for free" />
      </Stack>
    </Box>
  );
};

export default RegEnd;
