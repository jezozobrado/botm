import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";
import Poster1 from "../components/HomePage/Poster1";
import RegEnd from "../components/HomePage/RegEnd";
import SeeBooks from "../components/HomePage/RegStart";
import bed from "../assets/girl-lying-bed.webp";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Poster1 image={bed} />
      <SeeBooks />
      <Features />
      <RegEnd />
    </>
  );
};

export default HomePage;
