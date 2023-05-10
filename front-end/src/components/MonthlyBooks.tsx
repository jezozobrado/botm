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

interface Props {
  books: Book[];
  isFetching: boolean;
  onSelectOrder: (orderOption: string) => void;
  order: string;
}

const MonthlyBooks = ({ books, isFetching, onSelectOrder, order }: Props) => {
  const orderOptions = [
    "BOTM",
    "A to Z by author",
    "A to Z by title",
    "Recently added",
  ];

  {
    isFetching && <Text>Fetching data...</Text>;
  }
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
                {order === "BOTM" ? "" : order}
              </MenuButton>
              <MenuList>
                {orderOptions.map((orderOption, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => onSelectOrder(orderOption)}
                  >
                    {orderOption}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </HStack>
        <Divider />
        <BookList books={books} isLoading={isFetching} />;
      </Stack>
    </>
  );
};

export default MonthlyBooks;
