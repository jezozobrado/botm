import { Stack, Heading, Button, Text, Image, HStack } from "@chakra-ui/react";
import spotify from "../assets/spotify.png";
import apple from "../assets/apple.png";

interface Props {
  picture: string;
  heading: string;
  body: string;
  isButtonHidden: boolean;
  isProcedure: boolean;
  buttonType?: string;
  stepNumber?: string;
  buttonText?: string;
  showMusic?: boolean;
}

const FeatureReversed = ({
  picture,
  heading,
  body,
  isButtonHidden,
  buttonText,
  isProcedure,
  stepNumber,
  buttonType,
  showMusic,
}: Props) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row-reverse" }}
      margin="auto"
      marginY={{ base: "40px", lg: "50px" }}
      gap={{ base: "20px", lg: "70px" }}
      width={{ base: "90vw", lg: "85vw" }}
    >
      <Image src={picture} width={{ base: "100%", lg: "600px" }}></Image>
      <Stack gap={2} justifyContent="center">
        {isProcedure && <Text fontSize="11px">{stepNumber}</Text>}
        <Heading fontWeight="medium">{heading}</Heading>

        <Text>{body}</Text>
        <Button variant={buttonType} hidden={isButtonHidden}>
          {buttonText}
        </Button>
        {showMusic && (
          <HStack justifyContent="space-evenly">
            <Image height="50px" src={spotify}></Image>
            <Image height="50px" src={apple}></Image>
          </HStack>
        )}
      </Stack>
    </Stack>
  );
};

export default FeatureReversed;
