import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import BookGrid from "../components/BookGrid";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AllBooks = () => {
  const { register, handleSubmit, reset } = useForm();
  const [searchText, setSearchText] = useState();
  console.log(searchText);

  return (
    <>
      <form
        onChange={handleSubmit((data) => {
          setSearchText(data.searchText);
          // reset();
          // onSubmit={handleSubmit((data) => {
          //   setSearchText(data.searchText);
          //   reset();
        })}
      >
        <InputGroup width="950px" margin="auto" marginTop="50px">
          <InputLeftElement
            children={<BiSearch color="gray.300" />}
            pointerEvents="none"
          />
          <Input
            {...register("searchText")}
            type="text"
            placeholder="Search by title, author or genre"
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={() => {
                reset();
                setSearchText(undefined);
              }}
            >
              <Icon as={TiDelete} boxSize={5} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
      <Header
        heading="Our top books in one spot."
        subheading="Choose from our past and present favorites."
      />

      <BookGrid queryParams={{ searchText: searchText }} />
    </>
  );
};

export default AllBooks;
