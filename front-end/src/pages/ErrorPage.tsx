import Header from "../components/Header";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Header heading={"Something wrong occured."} subheading={""} />
    </>
  );
};

export default ErrorPage;
