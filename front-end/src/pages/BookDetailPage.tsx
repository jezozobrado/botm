import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/BookDetailCard";
import {
  Divider,
  Stack,
  Text,
  Image,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import emotional from "../assets/informers/emotional.svg";
import loveTriangle from "../assets/informers/love-triangle.svg";
import marriageIssues from "../assets/informers/marriage-issues.svg";
import suburbanDrama from "../assets/informers/suburban-drama.svg";

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

  const informerMap: { [key: string]: string } = {
    emotional: emotional,
    "suburban drama": suburbanDrama,
    "marriage issues": marriageIssues,
    "love triangle": loveTriangle,
  };

  return (
    <>
      <Image src={emotional}></Image>
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
            Good to know
          </Text>
          <SimpleGrid columns={2}>
            {data[0].informers.map((informer, index) => (
              <HStack>
                <Image key={index} src={informerMap[informer]} boxSize="45px" />
                <Text>
                  {informer.charAt(0).toUpperCase() +
                    informer.slice(1).toLowerCase()}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
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
