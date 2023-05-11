import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Book } from "../entities/Book";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
}

const BookListItem = ({ book }: Props) => {
  return (
    <Link to={"/all-books/" + book.slug}>
      <Card variant="unstyled" width="140px" margin="auto">
        <Image src={book.image} />
        <CardBody marginTop={3}>
          <Text
            textAlign="center"
            textTransform="uppercase"
            fontSize="12px"
            whiteSpace="nowrap"
            fontWeight="semibold"
          >
            {book.mainGenre}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BookListItem;
