import { Link as RouterLink } from "react-router-dom";
import { Book } from "../entities/Book";
import BookListItem from "./BookListItem";
import { Divider, HStack, Spinner, Stack, Text, Link } from "@chakra-ui/react";
import BookListHeader from "./BookListHeader";

interface Props {
  books: Book[];
  isLoading: boolean;
}

const BookList = ({ books, isLoading }: Props) => {
  return (
    <>
      {isLoading && <Spinner />}
      <Stack width="850px" margin="auto" marginY="50px">
        <BookListHeader books={books} />
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
