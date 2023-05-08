import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Book } from "../entities/Book";

interface Props {
  book: Book;
}

const BookListItem = ({ book }: Props) => {
  return (
    <Card variant="unstyled">
      <Image src={book.image} width="140px" margin="auto" />
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
  );
};

export default BookListItem;
