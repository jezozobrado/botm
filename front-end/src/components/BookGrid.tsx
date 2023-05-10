import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import BookListItem from "./BookListItem";
import useBooks from "../hooks/useBooks";

const BookGrid = () => {
  const { data, isLoading } = useBooks();
  if (!data) return null;

  return (
    <>
      {isLoading ? (
        <Text>POtangina mo</Text>
      ) : (
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
      )}
    </>
  );
};

export default BookGrid;
