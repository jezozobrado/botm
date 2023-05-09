import { Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BookCard from "../components/BookCard";
import { Book } from "../entities/Book";
import useNewBooks from "../hooks/useNewBooks";

const NewBooks = () => {
  const { data } = useNewBooks();
  console.log(data);
  if (!data) return null;
  // const { data } = useQuery<Book[]>({
  //   queryKey: ["books"],
  //   queryFn: () =>
  //     axios.get("http://localhost:4000/api/books").then((res) => res.data),
  // });

  return (
    <>
      <Heading
        fontSize={{ base: "60px", md: "110px" }}
        fontWeight="medium"
        textAlign="center"
        marginTop="50px"
      >
        May Books
      </Heading>
      <Text textAlign="center">
        New month. New reads. Add your favorite(s) to your box now.
      </Text>
      {data?.map((book) => (
        <BookCard
          key={book._id}
          image={book.image}
          mainGenre={book.mainGenre}
          abstract={book.description}
          title={book.title}
          badges={book.badges}
          slug={book.slug}
        />
      ))}
    </>
  );
};

export default NewBooks;
// <SimpleGrid columns={{ base: 1, md: 2 }} margin="auto" width="fit-content">
//   <Card
//     variant="filled"
//     width={{ base: "90vw", md: "430px" }}
//     height="340px"
//     borderRadius={0}
//     justifyContent="center"
//     margin="auto"
//   >
//     <Container margin="auto" centerContent>
//       <Image src={halfMoon} width="180px" />
//     </Container>
//   </Card>
//   <Card
//     width={{ base: "90vw", md: "430px" }}
//     textAlign={{ base: "center", md: "left" }}
//     height={{ base: "fit-content", md: "340px" }}
//     borderRadius={0}
//     padding={{ base: "1px", md: "20px" }}
//   >
//     <CardBody>
//       <Stack>
//         <Text
//           textTransform="uppercase"
//           fontSize="12px"
//           letterSpacing={2}
//           fontWeight="bold"
//           color="gray.400"
//         >
//           Literary Fiction
//         </Text>
//         <Text fontSize="28px" fontWeight="bold">
//           The Half Moon
//         </Text>
//         <Badge
//           width="fit-content"
//           color="white"
//           bg="brand.200"
//           alignSelf={{ base: "center", md: "normal" }}
//           fontSize="11px"
//           fontWeight="normal"
//         >
//           REPEAT AUTHOR
//         </Badge>
//         <Text paddingBottom={{ base: "0", md: "20px" }} textAlign="left">
//           A husband drowning in debt and a wife grappling with infertility
//           have their relationship tested during a winter storm.
//         </Text>
//         <Button
//           variant="btn-primary"
//           width={{ base: "85vw ", md: "fit-content" }}
//           alignSelf={{ base: "center", md: "normal" }}
//           paddingX={{ md: "40px" }}
//           paddingY="23px"
//         >
//           Make my BOTM
//         </Button>
//       </Stack>
//     </CardBody>
//     {/* <CardFooter>
//         <Button variant="btn-primary" width="fit-content">
//           Make my BOTM
//         </Button>
//       </CardFooter> */}
//   </Card>
// </SimpleGrid>;
