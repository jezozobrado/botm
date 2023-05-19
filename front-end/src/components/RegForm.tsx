import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import User from "../entities/User";
import useAddUser from "../hooks/useAddUser";
import AuthAlert from "./AuthAlert";
import axios, { AxiosError } from "axios";

interface Props {
  submitText: string;
  onSubmit?: (errors: FieldErrors) => void;
}

const schema = Joi.object({
  firstName: Joi.string().min(5).max(50).required(),
  lastName: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(5).max(50).required(),
  password: Joi.string().min(5).max(50).required(),
});

const RegForm = ({ submitText, onSubmit }: Props) => {
  const [show, setShow] = useState(false);
  const addUser = useAddUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(schema),
  });

  const axiosError = addUser.error as AxiosError;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          addUser.mutate(data);
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
            onClick={() => onSubmit?.(errors)}
          >
            {submitText}
          </Button>
          {errors.firstName?.message && (
            <AuthAlert
              status={"error"}
              errorMessage={errors.firstName?.message}
              modal={true}
            />
          )}

          {errors.lastName?.message && (
            <AuthAlert
              status={"error"}
              errorMessage={errors.lastName?.message}
              modal={true}
            />
          )}

          {errors.email?.message && (
            <AuthAlert
              status={"error"}
              errorMessage={errors.email?.message}
              modal={true}
            />
          )}
          {errors.password?.message && (
            <AuthAlert
              status={"error"}
              errorMessage={errors.password?.message}
              modal={true}
            />
          )}
          {axiosError && (
            <AuthAlert
              status={"error"}
              errorMessage={axiosError?.response?.data as string}
              modal={true}
            />
          )}
        </Stack>
      </form>
    </>
  );
};

export default RegForm;
