import { Container, Heading } from "@chakra-ui/react";
import blueBox from "../../assets/blue-box.webp";
import girlReading from "../../assets/girl-reading.webp";
import mom from "../../assets/mom-smiling.webp";
import pileOfBooks from "../../assets/pile-of-books.webp";
import vbt from "../../assets/vbt.jpg";
import Feature from "../Feature";
import FeatureReversed from "../FeatureReversed";

const Features = () => {
  return (
    <>
      <Feature
        picture={mom}
        heading="Get mom the gift she wants."
        body="This Mother’s Day, give great new books she can choose for herself."
        isButtonHidden={false}
        buttonText="Gift BOTM"
        isProcedure={false}
        buttonType="btn-primary"
      />
      <Container centerContent>
        <Heading textAlign="center" fontWeight="medium">
          We pick a few. You pick a fave.
        </Heading>
      </Container>
      <Feature
        picture={pileOfBooks}
        heading="Pick your book."
        body="We find the best new reads—with an emphasis on early releases, fresh perspectives, and debut authors."
        isButtonHidden={false}
        buttonText="See the books"
        isProcedure={true}
        stepNumber="STEP 1"
        buttonType="btn-link"
      />
      <FeatureReversed
        picture={blueBox}
        heading="Get your box."
        body="Keep your eye out for that bright blue box. Trust us, you’re going to want to cancel all your plans."
        isButtonHidden={true}
        isProcedure={true}
        stepNumber="STEP 2"
      />
      <Feature
        picture={girlReading}
        heading="Skip whenever."
        body="Behind on your reading list? Skip any month or roll your credits over, no questions asked."
        isButtonHidden={true}
        isProcedure={true}
        stepNumber="STEP 3"
      />
      <FeatureReversed
        picture={vbt}
        heading="Meet your new favorite podcast."
        body="Lend us your ears for a look inside the minds of BOTM writers! Virtual Book Tour is a treasure trove of anecdotes, wisdom, and entertainment."
        isButtonHidden={true}
        isProcedure={false}
        showMusic={true}
      />
    </>
  );
};

export default Features;
