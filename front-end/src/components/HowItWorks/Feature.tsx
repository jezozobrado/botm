import { Stack, Image, Text } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  heading: string;
  body: string;
}

const Feature = ({ imageSrc, heading, body }: Props) => {
  return (
    <Stack textAlign="center" gap={1} width={{ base: "90vw", md: "400px" }}>
      <Image src={imageSrc} />
      <Text variant="text-primary">{heading} </Text>
      <Text>{body}</Text>
    </Stack>
  );
};

export default Feature;
