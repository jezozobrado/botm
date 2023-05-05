import RegForm from "./RegForm";
import { Box, Button, Stack, Text } from "@chakra-ui/react";

const SeeBooks = () => {
  return (
    <Box textAlign="center" bg="brand.200" color="white">
      <Stack
        width={{ base: "90vw", sm: "400px" }}
        marginX="auto"
        paddingBottom="100px"
        gap={2}
      >
        <Text fontSize="25px" fontWeight="bold" letterSpacing={1}>
          See the May Books
        </Text>
        <Text>
          Each month, we curate an exceptional few new books for our members to
          choose from.
        </Text>
        <RegForm submitText="See the books" />
      </Stack>
    </Box>
  );
};

export default SeeBooks;
