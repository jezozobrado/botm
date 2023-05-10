import { SimpleGrid } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookListItem from "./BookListItem";

const BookGrid = () => {
  const { data, isLoading } = useBooks();
  if (!data) return null;

  return (
    <>
      <SimpleGrid
        width="950px"
        margin="auto"
        columns={5}
        rowGap={5}
        marginY="50px"
      >
        {data.map((book) => (
          <BookListItem key={book._id} book={book} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
