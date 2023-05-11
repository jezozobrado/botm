import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  heading: string;
  subheading: string;
}

const Header = ({ heading, subheading }: Props) => {
  return (
    <Stack marginTop={10} width={{ base: "90%", md: "750px " }} margin="auto">
      <Heading variant={{ base: "heading-small", md: "heading-primary" }}>
        {heading}
      </Heading>
      <Text
        width={{ base: "90%", md: "600px" }}
        textAlign="center"
        alignSelf="center"
      >
        {subheading}
      </Text>
    </Stack>
  );
};

export default Header;
