import { List, ListItem } from "@chakra-ui/react";
import { Book } from "../entities/Book";
import BookList from "./BookList";

interface Props {
  books: Book[];
  isLoading: boolean;
}

const MonthlyBooks = ({ books, isLoading }: Props) => {
  return (
    <>
      <BookList books={books} isLoading={isLoading} />;
    </>
  );
};

export default MonthlyBooks;
