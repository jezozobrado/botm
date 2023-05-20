import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import { AxiosError } from "axios";
import Joi from "joi";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import User from "../entities/User";
import useAuth from "../hooks/useAuth";
import useUserStore from "../store/userStore";
import AuthAlert from "../components/AuthAlert";
import RegFormModal from "../components/RegFormModal";

const schema = Joi.object({
  email: Joi.string()
    .max(50)
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email field cannot be empty.",
      "string.max": "Email field cannot be more than 50 letters.",
    }),
  password: Joi.string().min(5).max(50).required().messages({
    "string.empty": "Password field cannot be empty.",
    "string.min": "Password field cannot be less than 5 characters.",
    "string.max": "Password field cannot be more than 50 letters.",
  }),
});

const Login = () => {
  const authUser = useAuth();

  const setUser = useUserStore((s) => s.setUser);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data: User) => {
    authUser.mutateAsync(data).then((data) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        const decoded = jwtDecode(token) as User;
        setUser(decoded);
        navigate("/the-best-new-books");
      }
    });
  };

  const errorMessage = authUser?.error?.response?.data as string;

  return (
    <>
      <Header
        heading={"Books rock."}
        subheading={"If you were a book, you'd be a classic ;)"}
      />

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Stack
          width={{ base: "90%", md: "480px " }}
          margin="auto"
          marginTop={5}
          gap={1}
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
            {authUser.isLoading ? <Spinner /> : "Login"}
          </Button>
        </Stack>
      </form>
      <HStack justifyContent="center" mt={2}>
        <Text textAlign="center">New around here?</Text>
        <Link>
          <RegFormModal buttonText={"Join now."} btnVariant={"btn-link"} />
        </Link>
      </HStack>
      <Stack alignItems="center">
        {errors?.email && (
          <AuthAlert status={"error"} errorMessage={errors?.email?.message} />
        )}

        {errors?.password && (
          <AuthAlert
            status={"error"}
            errorMessage={errors?.password?.message}
          />
        )}

        {authUser.error instanceof AxiosError && (
          <AuthAlert status={"error"} errorMessage={errorMessage} />
        )}
      </Stack>
    </>
  );
};

export default Login;
