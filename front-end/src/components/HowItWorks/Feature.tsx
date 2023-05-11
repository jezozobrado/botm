import { Stack, Image, Text } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  heading: string;
  body: string;
}

const Feature = ({ imageSrc, heading, body }: Props) => {
  return (
    <Stack textAlign="center" gap={1} width="400px" flexShrink="0">
      <Image src={imageSrc} />
      <Text variant="text-primary">{heading} </Text>
      <Text>{body}</Text>
    </Stack>
  );
};

export default Feature;
