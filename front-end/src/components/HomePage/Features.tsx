import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import mom from "../../assets/mom-smiling.webp";
import pileOfBooks from "../../assets/pile-of-books.webp";
import blueBox from "../../assets/blue-box.webp";
import girlReading from "../../assets/girl-reading.webp";
import Feature from "./Feature";

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
      <Feature
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
    </>
  );
};

export default Features;

//   <HStack margin="auto" marginY="50px" gap="40px" width="85vw">
//     <Image src={pileOfBooks} width="600px"></Image>
//     <Stack gap={2}>
//       <Text fontSize="11px" fontWeight="bold">
//         STEP 1
//       </Text>
//       <Heading fontWeight="medium">Pick your book.</Heading>
//       <Text>
//         We find the best new reads—with an emphasis on early releases, fresh
//         perspectives, and debut authors.
//       </Text>
//       <Button
//         variant="link"
//         justifyContent="start"
//         color="brand.100"
//         fontWeight="normal"
//       >
//         See the books
//       </Button>
//     </Stack>
//   </HStack>

//   <HStack
//     margin="auto"
//     marginY="50px"
//     gap="40px"
//     width="85vw"
//     flexDirection="row-reverse"
//   >
//     <Image src={blueBox} width="600px"></Image>
//     <Stack gap={2}>
//       <Text fontSize="11px" fontWeight="bold">
//         STEP 2
//       </Text>
//       <Heading fontWeight="medium">Get your box.</Heading>
//       <Text>
//         Keep your eye out for that bright blue box. Trust us, you’re going
//         to want to cancel all your plans.
//       </Text>
//     </Stack>
//   </HStack>

//   <HStack margin="auto" marginY="50px" gap="40px" width="85vw">
//     <Image src={girlReading} width="600px"></Image>
//     <Stack gap={2}>
//       <Text fontSize="11px" fontWeight="bold">
//         STEP 3
//       </Text>
//       <Heading fontWeight="medium">Skip whenever. </Heading>
//       <Text>
//         Behind on your reading list? Skip any month or roll your credits
//         over, no questions asked.
//       </Text>
//     </Stack>
//   </HStack>
