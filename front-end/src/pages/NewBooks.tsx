import { Spinner, Text } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import useBooks from "../hooks/useBooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";

const NewBooks = () => {
  // const [authenticated, setauthenticated] = useState<string>();
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("x-auth-token");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);

  // if (!authenticated) return <ErrorPage />;

  // const navigate = useNavigate();
  // useEffect(() => navigate(1), [1]);

  console.log("token is", localStorage.getItem("x-auth-token"));

  const { data, isLoading, error, isError } = useBooks({
    defaultCategory: "May-2021",
  });

  if (!data) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Header
        heading="May Books"
        subheading="New month. New reads. Add your favorite(s) to your box now."
      />

      {data?.books.map((book) => (
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
