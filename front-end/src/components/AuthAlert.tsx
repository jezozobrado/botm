import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

interface Props {
  status: "info" | "success" | "warning" | "loading" | "error";
  errorMessage?: string;
  modal?: boolean;
}
const AuthAlert = ({ status, errorMessage, modal = false }: Props) => {
  return (
    <Alert status={status} width={!modal ? "480px" : ""} variant="solid">
      <AlertIcon />
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
};

export default AuthAlert;
