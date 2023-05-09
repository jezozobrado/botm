import { HStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Book } from "../entities/Book";

interface Props {
  books: Book[];
}

const BookListHeader = ({ books }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Text>{books[0]?.defaultCategory.replace("-", " ")}</Text>
      <Link
        as={RouterLink}
        to={
          "/all-books/" +
          books[0].defaultCategory.toLowerCase().replace(" ", "-")
        }
        color="brand.100"
      >
        View all
      </Link>
    </HStack>
  );
};

export default BookListHeader;
