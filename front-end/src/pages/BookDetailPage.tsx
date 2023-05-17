import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import emotional from "../assets/informers/emotional.svg";
import loveTriangle from "../assets/informers/love-triangle.svg";
import marriageIssues from "../assets/informers/marriage-issues.svg";
import suburbanDrama from "../assets/informers/suburban-drama.svg";
import BookDetailCard from "../components/BookDetailCard";
import ExpandableText from "../components/ExpandableText";
import Header from "../components/Header";
import MonthlyBooks from "../components/MonthlyBooks";
import useBook from "../hooks/useBook";

const BookDetailPage = () => {
  const { slug } = useParams();

  if (slug?.includes("202")) {
    const defaultCategory = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
      <>
        <Header
          heading={defaultCategory.replace("-", " ")}
          subheading={"Girls only want books."}
        />
        <MonthlyBooks defaultCategory={defaultCategory} />;
      </>
    );
  }

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
        marginTop="100px"
        separator={<BiChevronRight color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/all-books">
            <Text variant="text-tertiary" color="brand.100">
              All Books
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to={`/all-books/${data[0].defaultCategory.toLowerCase()}`}
          >
            <Text variant="text-tertiary" color="brand.100">
              {data[0].defaultCategory.replace("-", " ")}
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Text variant="text-tertiary">{data[0].title}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack
        divider={<Divider />}
        width={{ base: "90%", md: "600px" }}
        gap={10}
        margin="auto"
      >
        {data.map((book) => (
          <BookDetailCard key={book._id} book={book} />
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
