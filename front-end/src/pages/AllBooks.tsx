import { Heading, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import BookList from "../components/BookList";
import useBooks, { queryParams } from "../hooks/useBooks";
import Header from "../components/Header";
import BookListHeader from "../components/BookListHeader";
import BookListItem from "../components/BookListItem";

const AllBooks = () => {
  const { data, isLoading } = useBooks();

  if (!data) return null;

  return (
    <>
      <Header
        heading="Our top books in one spot."
        subheading="Choose from our past and present favorites."
      />

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

      {/* <Stack width="850px" margin="auto" marginY="50px"></Stack> */}
    </>
  );
};

export default AllBooks;
