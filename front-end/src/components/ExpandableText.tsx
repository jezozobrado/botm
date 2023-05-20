import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import parse from "html-react-parser";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children?.length <= limit) return <Text>{parse(children)}</Text>;

  const shortText = children.slice(0, limit) + "...";
  return (
    <Stack gap={5}>
      <Text>{isExpanded ? parse(children) : parse(shortText)} </Text>
      <Button
        justifyContent="left"
        color="brand.100"
        fontWeight="normal"
        variant="link"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read less" : "Read more"}
      </Button>
    </Stack>
  );
};

export default ExpandableText;
