import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/BookDetailCard";
import { Divider, HStack, Heading, Stack, Text } from "@chakra-ui/react";

const BookDetailPage = () => {
  const { slug } = useParams();
  const { data } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () =>
      axios
        .get("http://localhost:4000/api/books/" + slug)
        .then((res) => res.data),
  });

  if (!data) return null;
  return (
    <>
      <Stack divider={<Divider />} width="40vw" gap={5}>
        {data.map((book) => (
          <BookDetailCard
            image={book.image}
            mainGenre={book.mainGenre}
            abstract={book.description}
            title={book.title}
            badges={book.badges}
            slug={book.slug}
            author={book.author}
          />
        ))}
        <Stack>
          <Text fontSize="25px" fontWeight="bold">
            Quick Take
          </Text>
          <Text>{data[0].description}</Text>
        </Stack>
        <Stack>
          <Text fontSize="25px" fontWeight="bold">
            Synopsis
          </Text>
          <Text>{data[0].description}</Text>
        </Stack>
      </Stack>
    </>
  );
};

export default BookDetailPage;
