import { Heading, Text } from "@chakra-ui/react";
import BookList from "../components/BookList";

import useBooks from "../hooks/useBooks";

const AllBooks = () => {
  const { data } = useBooks();
  console.log(data);

  if (!data) return null;

  return (
    <>
      <Heading
        fontSize={{ base: "60px", md: "110px" }}
        fontWeight="medium"
        margin="auto"
        textAlign="center"
        marginTop="50px"
        width="800px"
      >
        Our top books in one spot.
      </Heading>
      <Text textAlign="center">
        Choose from our past and present favorites.
      </Text>

      <BookList
        books={data.filter((book) => book.defaultCategory === "May-2021")}
      />
      <BookList
        books={data.filter((book) => book.defaultCategory === "June-2021")}
      />

      <BookList
        books={data.filter((book) => book.defaultCategory === "July-2021")}
      />
      <BookList
        books={data.filter((book) => book.defaultCategory === "August-2021")}
      />
    </>
  );
};

export default AllBooks;
