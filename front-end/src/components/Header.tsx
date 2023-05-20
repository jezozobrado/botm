import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  heading: string;
  subheading: string;
  withSearchBar?: boolean;
}

const Header = ({ heading, subheading, withSearchBar = false }: Props) => {
  return (
    <Stack
      pt={withSearchBar ? "0px" : "100px"}
      width={{ base: "90%", md: "750px " }}
      margin="auto"
    >
      <Heading
        variant={{
          base: "heading-small",
          md: "heading-primary",
          lg: "heading-primary",
        }}
      >
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
