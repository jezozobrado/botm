import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  submitText: string;
}

const RegForm = ({ submitText }: Props) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Stack color="black" gap={2}>
          <HStack>
            <Input
              {...register("firstName")}
              placeholder="First name"
              variant="input-primary"
            />
            <Input
              {...register("lastName")}
              placeholder="Last name"
              variant="input-primary"
              type="text"
            />
          </HStack>
          <Input
            {...register("email")}
            placeholder="Email address"
            variant="input-primary"
            type="email"
          />
          <InputGroup>
            <Input
              {...register("password")}
              placeholder="Password"
              variant="input-primary"
              type={show ? "password" : "text"}
            />
            <InputRightElement width={"3rem"}>
              <Button
                onClick={() => setShow(!show)}
                variant="unstyled"
                fontSize="11px"
                fontWeight="normal"
              >
                {show ? "show" : "hide"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text fontSize="13px" color="white">
            By clicking "{submitText}", you agree to Book of the Month’s Terms
            of use and Privacy policy.
          </Text>
          <Button
            fontWeight="normal"
            bg="whiteAlpha.300"
            _hover={{ color: "none" }}
            color="white"
            type="submit"
          >
            {submitText}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RegForm;