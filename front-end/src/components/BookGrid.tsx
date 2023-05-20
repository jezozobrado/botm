import {
  Button,
  HStack,
  Icon,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useBooks, { QueryParams } from "../hooks/useBooks";
import BookListItem from "./BookListItem";

interface Props {
  queryParams?: QueryParams;
}

const BookGrid = ({ queryParams }: Props) => {
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading } = useBooks({
    ...queryParams,
    pageSize: pageSize,
    pageNumber: pageNumber,
  });
  if (!data) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Stack
        width={{ base: "100%", lg: "860px" }}
        margin="auto"
        marginY="50px"
        gap={10}
      >
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} rowGap={5}>
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
    </>
  );
};

export default BookGrid;
