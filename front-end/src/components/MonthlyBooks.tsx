import {
  Button,
  Divider,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Book } from "../entities/Book";
import BookList from "./BookList";
import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";

interface Props {
  books: Book[];
  isLoading: boolean;
  onSelectOrder: (orderOption: string) => void;
  order: string;
}

const MonthlyBooks = ({ books, isLoading, onSelectOrder, order }: Props) => {
  const orderOptions = [
    "BOTM",
    "A to Z by author",
    "A to Z by title",
    "Recently added",
  ];
  return (
    <Stack width="850px" margin="auto" marginY="50px">
      <HStack justifyContent="space-between">
        <Text>Books to browse</Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BsFilterLeft size="25px" />}
            variant="unstyled"
          >
            {order === "BOTM" ? "" : order}
          </MenuButton>
          <MenuList>
            {orderOptions.map((orderOption, index) => (
              <MenuItem key={index} onClick={() => onSelectOrder(orderOption)}>
                {orderOption}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
      <Divider />
      <BookList books={books} isLoading={isLoading} />;
    </Stack>
  );
};

export default MonthlyBooks;
