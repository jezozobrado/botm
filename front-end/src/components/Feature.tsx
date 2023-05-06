import { Stack, Heading, Button, Text, Image } from "@chakra-ui/react";

interface Props {
  picture: string;
  heading: string;
  body: string;
  isButtonHidden: boolean;
  isProcedure: boolean;
  buttonType?: string;
  stepNumber?: string;
  buttonText?: string;
}

const Feature = ({
  picture,
  heading,
  body,
  isButtonHidden,
  buttonText,
  isProcedure,
  stepNumber,
  buttonType,
}: Props) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
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
      </Stack>
    </Stack>
  );
};

export default Feature;
