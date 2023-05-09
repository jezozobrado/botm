import BookList from "../components/BookList";
import { Book } from "../entities/Book";

interface Props {
  books: Book[];
}

const MonthlyBooks = ({ books }: Props) => {
  return <BookList books={[]} />;
};

export default MonthlyBooks;
