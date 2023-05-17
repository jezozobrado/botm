import {
  Button,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import User from "../entities/User";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import jwtDecode from "jwt-decode";
import useCart from "../hooks/useCart";

const schema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(50)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(5).max(50).required(),
});

const Login = () => {
  const setUser = useUserStore((s) => s.setUser);
  const apiClient = new APIClient<User>("/auth");

  const authUser = useMutation({
    mutationFn: (user: User) => apiClient.authUser(user),
    onSuccess: (data) => {
      const token = localStorage.getItem("x-auth-token");

      if (token) {
        const decoded = jwtDecode(token) as User;
        setUser(decoded);
      }
    },
    onError: (err: AxiosError) => console.error("ulul", err),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(schema),
  });

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    authUser.mutate(data);
    navigate("/the-best-new-books");
  };

  const errorMessage = authUser?.error?.response?.data as string;

  return (
    <>
      <Heading variant="heading-small" marginTop="100px" marginBottom="30px">
        Hey, you
      </Heading>
      {errors?.email && (
        <Text color="red" textAlign="center">
          {errors.email.message}
        </Text>
      )}
      {authUser.error instanceof AxiosError && (
        <Text color="red" textAlign="center">
          {errorMessage}
        </Text>
      )}
      {errors?.password && (
        <Text color="red" textAlign="center">
          {errors.password.message}
        </Text>
      )}
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Stack
          width={{ base: "90%", md: "500px " }}
          margin="auto"
          marginTop={5}
        >
          <Input
            {...register("email")}
            placeholder="Email address"
            variant="outline"
            type="email"
          />
          <InputGroup>
            <Input
              {...register("password")}
              placeholder="Password"
              variant="outline"
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
          <Button fontWeight="normal" type="submit" variant="btn-primary">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
