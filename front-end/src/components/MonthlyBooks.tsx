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
}

const MonthlyBooks = ({ books, isLoading }: Props) => {
  const [order, setOrder] = useState("");

  const sortOptions = [
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
            {sortOptions.map((sortOption, index) => (
              <MenuItem key={index} onClick={() => setOrder(sortOption)}>
                {sortOption}
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
