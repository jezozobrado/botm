import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import BookList from "../components/BookList";
import useBooks, { queryParams } from "../hooks/useBooks";
import Header from "../components/Header";
import BookListHeader from "../components/BookListHeader";

const AllBooks = () => {
  const { data, isLoading } = useBooks();

  if (!data) return null;

  return (
    <>
      {isLoading && <Spinner />}

      <Header
        heading="Our top books in one spot."
        subheading="Choose from our past and present favorites."
      />

      <Stack width="850px" margin="auto" marginY="50px">
        <BookListHeader
          books={data.filter((book) => book.defaultCategory === "May-2021")}
        />
        <BookList
          isLoading={isLoading}
          books={data.filter((book) => book.defaultCategory === "May-2021")}
        />
      </Stack>
      <Stack width="850px" margin="auto" marginY="50px">
        <BookListHeader
          books={data.filter((book) => book.defaultCategory === "June-2021")}
        />
        <BookList
          isLoading={isLoading}
          books={data.filter((book) => book.defaultCategory === "June-2021")}
        />
      </Stack>
    </>
  );
};

export default AllBooks;
