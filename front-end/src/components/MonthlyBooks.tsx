import {
  Box,
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
import { Book } from "../entities/Book";
import BookList from "./BookList";
import { useState } from "react";

interface Props {
  defaultCategory: string;
}
const MonthlyBooks = ({ defaultCategory }: Props) => {
  const [ordering, setOrdering] = useState("");
  const orderOptions = [
    "BOTM",
    "A to Z by author",
    "A to Z by title",
    "Recently added",
  ];

  return (
    <>
      <Stack width="850px" margin="auto" marginY="50px">
        <HStack justifyContent="space-between">
          <Text>Books to browse</Text>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsFilterLeft size="25px" />}
                variant="unstyled"
              >
                {ordering === "BOTM" ? "" : ordering}
              </MenuButton>
              <MenuList>
                {orderOptions.map((orderOption, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => setOrdering(orderOption)}
                  >
                    {orderOption}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </HStack>
        <Divider />
        <BookList ordering={ordering} defaultCategory={defaultCategory} />;
      </Stack>
    </>
  );
};

export default MonthlyBooks;
