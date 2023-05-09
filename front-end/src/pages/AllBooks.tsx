import { Heading, Spinner, Text } from "@chakra-ui/react";
import BookList from "../components/BookList";
import useBooks from "../hooks/useBooks";
import Header from "../components/Header";

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

      <BookList
        isLoading={isLoading}
        books={data.filter((book) => book.defaultCategory === "May-2021")}
      />
      <BookList
        isLoading={isLoading}
        books={data.filter((book) => book.defaultCategory === "June-2021")}
      />

      <BookList
        isLoading={isLoading}
        books={data.filter((book) => book.defaultCategory === "July-2021")}
      />
      <BookList
        isLoading={isLoading}
        books={data.filter((book) => book.defaultCategory === "August-2021")}
      />
    </>
  );
};

export default AllBooks;
