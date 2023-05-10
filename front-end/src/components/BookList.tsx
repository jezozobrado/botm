import { HStack, Spinner } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookListItem from "./BookListItem";

interface Props {
  ordering: string | "BOTM";
  defaultCategory?: string;
}

const orderMap: { [key: string]: string } = {
  "Recently added": "_id",
  "A to Z by author": "author",
  "A to Z by title": "title",
  BOTM: "",
};

const BookList = ({ ordering, defaultCategory }: Props) => {
  const { data: books, isFetching } = useBooks({
    defaultCategory: defaultCategory,
    ordering: orderMap[ordering],
  });

  if (!books) return null;
  return (
    <>
      {isFetching && <Spinner />}

      <HStack
        width="850px"
        margin="auto"
        justifyContent="center"
        gap={7}
        marginY="50px"
      >
        {books.map((book, index) => (
          <BookListItem key={index} book={book} />
        ))}
      </HStack>
    </>
  );
};

export default BookList;
