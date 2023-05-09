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

interface Props {
  books: Book[];
  isLoading: boolean;
}

const MonthlyBooks = ({ books, isLoading }: Props) => {
  return (
    <Stack width="850px" margin="auto" marginY="50px">
      <HStack justifyContent="space-between">
        <Text>Books to browse</Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BsFilterLeft size="30px" />}
            variant="unstyled"
          />
          <MenuList>
            <MenuItem>BOTM</MenuItem>
            <MenuItem>A to Z by author</MenuItem>
            <MenuItem>A to Z by title</MenuItem>
            <MenuItem>Recently added</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Divider />
      <BookList books={books} isLoading={isLoading} />;
    </Stack>
  );
};

export default MonthlyBooks;
