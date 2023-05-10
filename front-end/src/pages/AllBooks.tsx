import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import BookGrid from "../components/BookGrid";
import Header from "../components/Header";

const AllBooks = () => {
  return (
    <>
      <InputGroup width="950px" margin="auto" marginTop="50px">
        <InputLeftElement children={<BiSearch color="gray.300" />} />
        <Input type="text" placeholder="Search by title, author or genre" />
      </InputGroup>
      <Header
        heading="Our top books in one spot."
        subheading="Choose from our past and present favorites."
      />

      <BookGrid />
    </>
  );
};

export default AllBooks;
