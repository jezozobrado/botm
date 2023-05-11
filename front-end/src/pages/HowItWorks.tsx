import Header from "../components/Header";
import getABook from "../assets/get-a-book.webp";
import model from "../assets/model.webp";
import readingOnCouch from "../assets/reading-on-couch.webp";
import hide from "../assets/hide.webp";
import Feature from "../components/HowItWorks/Feature";
import { HStack } from "@chakra-ui/react";
import FeatureReversed from "../components/FeatureReversed";

const HowItWorks = () => {
  return (
    <>
      <Header
        heading={"Treat your shelf to a book subscription."}
        subheading={""}
      />

      <HStack
        width="80vw"
        margin="auto"
        gap={10}
        justifyContent="center"
        alignItems="start"
        marginTop="50px"
      >
        <Feature
          imageSrc={readingOnCouch}
          heading={"Read more."}
          body={"You’ll be surprised by your newfound motivation."}
        />
        <Feature
          imageSrc={getABook}
          heading={"Research less."}
          body={"Choose from stories vetted by cool people with great taste."}
        />
        <Feature
          imageSrc={model}
          heading={"Save moolah."}
          body={
            "Your first month’s book is just $9.99. After that, it’s $17.99/month."
          }
        />
      </HStack>
      <FeatureReversed
        picture={hide}
        heading={"Not a fast reader? Skip whenever."}
        body={
          "Choose a book or choose to skip, each and every month. And if you do skip, you won't be charged."
        }
        isButtonHidden={true}
        isProcedure={false}
      />
    </>
  );
};

export default HowItWorks;
