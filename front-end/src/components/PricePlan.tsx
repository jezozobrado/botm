import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

interface PricePlanProps {
  headerText: string;
  bodyText: string;
  footerText: string;
}

interface Props {
  props: PricePlanProps;
}
const PricePlan = ({ props }: Props) => {
  return (
    <Card variant="elevated" width="250px" borderRadius={10} overflow="hidden">
      <CardHeader bg="brand.100" height="fit-content" p="0">
        <Text textAlign="center" variant="text-tertiary-white" py="10px">
          {props.headerText}
        </Text>
      </CardHeader>
      <CardBody bg="white">
        <Heading textAlign="center" variant="heading-small" mb="10px">
          {props.bodyText}
        </Heading>
        <Text variant="text-tertiary" textAlign="center" mb="15px">
          {props.footerText}
        </Text>
        <Button variant="btn-primary" width="100%">
          Choose plan
        </Button>
      </CardBody>
    </Card>
  );
};

export default PricePlan;
