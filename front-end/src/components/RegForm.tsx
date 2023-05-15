import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import APIClient from "../services/apiClient";
import User from "../entities/User";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store";

interface Props {
  submitText: string;
}

const schema = Joi.object({
  firstName: Joi.string().min(5).max(50).required(),
  lastName: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(5).max(50).required(),
  // .email({ tlds: { allow: false } }),
  password: Joi.string().min(5).max(50).required(),
});

const RegForm = ({ submitText }: Props) => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(schema),
  });

  const { setUser } = useUserStore();
  const toast = useToast();

  const apiClient = new APIClient<User>("users");
  const addUser = useMutation({
    mutationFn: (user: User) => apiClient.addUser(user),
    onSuccess: (data) => {
      setUser(data);
      toast({
        title: "Successful registration.",
        description: "Browse this month's books.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
    onError: (error) => console.log(error),
  });

  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          addUser.mutate(data);
          navigate("/the-best-new-books");
        })}
      >
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
          {errors.firstName?.message && (
            <Text>{errors.firstName?.message}</Text>
          )}
          {errors.lastName?.message && <Text>{errors.lastName?.message}</Text>}
          {errors.email?.message && <Text>{errors.email?.message}</Text>}
          {errors.password?.message && <Text>{errors.password?.message}</Text>}
        </Stack>
      </form>
    </>
  );
};

export default RegForm;
