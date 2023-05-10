import BookGrid from "../components/BookGrid";
import Header from "../components/Header";

const AllBooks = () => {
  return (
    <>
      <Header
        heading="Our top books in one spot."
        subheading="Choose from our past and present favorites."
      />

      <BookGrid />
    </>
  );
};

export default AllBooks;
