import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  heading: string;
  subheading: string;
}

const Header = ({ heading, subheading }: Props) => {
  return (
    <Stack marginTop={10} width="800px " marginX="auto">
      <Heading
        fontSize={{ base: "60px", md: "110px" }}
        fontWeight="medium"
        textAlign="center"
      >
        {heading}
      </Heading>
      <Text textAlign="center">{subheading}</Text>
    </Stack>
  );
};

export default Header;
