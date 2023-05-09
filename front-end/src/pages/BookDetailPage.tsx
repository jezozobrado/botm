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
import ExpandableText from "../components/ExpandableText";
import useBook from "../hooks/useBook";
import { BiChevronRight } from "react-icons/bi";

const BookDetailPage = () => {
  const { slug } = useParams();
  const { data } = useBook(slug!);
  if (!data) return null;

  const informerMap: { [key: string]: string } = {
    emotional: emotional,
    "suburban drama": suburbanDrama,
    "marriage issues": marriageIssues,
    "love triangle": loveTriangle,
  };

  return (
    <>
      <Breadcrumb
        width="600px"
        margin="auto"
        marginTop="20px"
        separator={<BiChevronRight color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/all-books">
            <Text variant="text-tertiary" color="brand.100">
              All Books
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Text variant="text-tertiary">{data[0].title}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack divider={<Divider />} width="600px" gap={10} margin="auto">
        {data.map((book) => (
          <BookDetailCard
            key={book._id}
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
          <Text variant="text-primary">Quick Take</Text>
          <Text>{data[0].abstractText}</Text>
        </Stack>
        <Stack>
          <Text variant="text-primary">Good to know</Text>
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
          <Text variant="text-primary">Synopsis</Text>
          <ExpandableText>{data[0].description}</ExpandableText>
        </Stack>
      </Stack>
    </>
  );
};

export default BookDetailPage;
