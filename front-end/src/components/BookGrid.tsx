import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import useBooks, { QueryParams } from "../hooks/useBooks";
import BookListItem from "./BookListItem";
import { useState } from "react";

interface Props {
  queryParams?: QueryParams;
}

const BookGrid = ({ queryParams }: Props) => {
  const [limit, setLimit] = useState(20);
  const { data } = useBooks({ ...queryParams, limit: limit });
  if (!data) return null;

  return (
    <Stack width="950px" margin="auto" marginY="50px" gap={10}>
      <SimpleGrid width="950px" columns={5} rowGap={5}>
        {data.map((book) => (
          <BookListItem key={book._id} book={book} />
        ))}
      </SimpleGrid>
      <Button
        width="300px"
        alignSelf="center"
        variant="btn-primary"
        onClick={() => setLimit(limit + 20)}
      >
        Show more
      </Button>
    </Stack>
  );
};

export default BookGrid;
