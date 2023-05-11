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
  const { data } = useBooks({
    defaultCategory: defaultCategory,
    ordering: orderMap[ordering],
  });

  if (!data) return null;
  return (
    <>
      <HStack
        width="850px"
        margin="auto"
        justifyContent="center"
        gap={7}
        marginY="50px"
      >
        {data.books.map((book, index) => (
          <BookListItem key={index} book={book} />
        ))}
      </HStack>
    </>
  );
};

export default BookList;
