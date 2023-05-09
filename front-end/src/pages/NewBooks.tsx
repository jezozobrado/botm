import { Spinner } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import useNewBooks from "../hooks/useNewBooks";
import Header from "../components/Header";

const NewBooks = () => {
  const { data, isLoading } = useNewBooks();

  if (!data) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Header
        heading="May Books"
        subheading="New month. New reads. Add your favorite(s) to your box now."
      />

      {data?.map((book) => (
        <BookCard
          key={book._id}
          image={book.image}
          mainGenre={book.mainGenre}
          abstract={book.description}
          title={book.title}
          badges={book.badges}
          slug={book.slug}
        />
      ))}
    </>
  );
};

export default NewBooks;
