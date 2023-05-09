import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import { Link, useParams } from "react-router-dom";
import BookDetailCard from "../components/BookDetailCard";
import {
  Divider,
  Stack,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import emotional from "../assets/informers/emotional.svg";
import loveTriangle from "../assets/informers/love-triangle.svg";
import marriageIssues from "../assets/informers/marriage-issues.svg";
import suburbanDrama from "../assets/informers/suburban-drama.svg";
import parse from "html-react-parser";
import ExpandableText from "../components/ExpandableText";

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
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/all-books">
            All Books
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{data[0].title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Stack divider={<Divider />} width="40vw" gap={10}>
        {data.map((book) => (
          <BookDetailCard
            image={book.image}
            mainGenre={book.mainGenre}
            abstractText={book.abstractText}
            title={book.title}
            badges={book.badges!}
            slug={book.slug}
            author={book.author}
          />
        ))}
        <Stack>
          <Text fontSize="25px" fontWeight="bold">
            Quick Take
          </Text>
          <Text>{data[0].abstractText}</Text>
        </Stack>

        <Stack>
          <Text fontSize="25px" fontWeight="bold">
            Good to know
          </Text>
          {data[0].informers && (
            <SimpleGrid columns={2} rowGap={4}>
              {data[0].informers.map((informer, index) => (
                <HStack>
                  <Image
                    key={index}
                    src={informerMap[informer]}
                    boxSize="45px"
                  />
                  <Text>
                    {informer.charAt(0).toUpperCase() +
                      informer.slice(1).toLowerCase()}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          )}
        </Stack>
        <Stack>
          <Text fontSize="25px" fontWeight="bold">
            Synopsis
          </Text>
          <ExpandableText>{data[0].synopsis}</ExpandableText>
        </Stack>
      </Stack>
    </>
  );
};

export default BookDetailPage;
