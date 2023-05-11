import {
  Button,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import useBooks, { QueryParams } from "../hooks/useBooks";
import BookListItem from "./BookListItem";
import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface Props {
  queryParams?: QueryParams;
}

const BookGrid = ({ queryParams }: Props) => {
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useBooks({
    ...queryParams,
    pageSize: pageSize,
    pageNumber: pageNumber,
  });
  if (!data) return null;

  return (
    <Stack width="950px" margin="auto" marginY="50px" gap={10}>
      <SimpleGrid width="950px" columns={5} rowGap={5}>
        {data.books.map((book) => (
          <BookListItem key={book._id} book={book} />
        ))}
      </SimpleGrid>
      <HStack justifyContent="center">
        <Button
          isDisabled={!data.hasPreviousPage}
          onClick={() => setPageNumber(pageNumber - 1)}
          variant="link"
        >
          <Icon as={GrFormPrevious} boxSize={5} />
        </Button>
        <Text>{`Page ${pageNumber}`}</Text>
        <Button
          isDisabled={!data.hasNextPage}
          onClick={() => setPageNumber(pageNumber + 1)}
          variant="link"
        >
          <Icon as={GrFormNext} boxSize={5} />
        </Button>
      </HStack>
    </Stack>
  );
};

export default BookGrid;
