import { SimpleGrid } from "@chakra-ui/react";
import useBooks, { QueryParams } from "../hooks/useBooks";
import BookListItem from "./BookListItem";

interface Props {
  queryParams?: QueryParams;
}

const BookGrid = ({ queryParams }: Props) => {
  const { data } = useBooks(queryParams);
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
