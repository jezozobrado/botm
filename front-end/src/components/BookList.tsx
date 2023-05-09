import { Link } from "react-router-dom";
import { Book } from "../entities/Book";
import BookListItem from "./BookListItem";
import { Divider, HStack, Spinner, Stack, Text } from "@chakra-ui/react";

interface Props {
  books: Book[];
  isLoading: boolean;
}

const BookList = ({ books, isLoading }: Props) => {
  return (
    <>
      {isLoading && <Spinner />}
      <Stack width="850px" margin="auto" marginY="50px">
        <HStack justifyContent="space-between">
          <Text>{books[0].defaultCategory.replace("-", " ")}</Text>
          <Link>View all</Link>
        </HStack>
        <Divider />
        <HStack justifyContent="center" gap={7} marginY="50px">
          {books.map((book, index) => (
            <BookListItem key={index} book={book} />
          ))}
        </HStack>
      </Stack>
    </>
  );
};

export default BookList;
