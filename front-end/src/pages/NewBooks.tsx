import { Spinner, Text } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import useBooks from "../hooks/useBooks";

const NewBooks = () => {
  const { data, isLoading } = useBooks({
    defaultCategory: "May-2021",
  });

  if (!data) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Header
        heading="May Books"
        subheading="New month. New reads. Add your favorite(s) to your box now."
      />

      {data?.books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </>
  );
};

export default NewBooks;
