import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";
import Poster1 from "../components/HomePage/Poster1";
import RegEnd from "../components/HomePage/RegEnd";

import SeeBooks from "../components/HomePage/RegStart";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Poster1 />
      <SeeBooks />
      <Features />
      <RegEnd />
    </>
  );
};

export default HomePage;
