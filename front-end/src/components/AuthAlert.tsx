import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

interface Props {
  status: "info" | "success" | "warning" | "loading" | "error";
  errorMessage?: string;
}
const AuthAlert = ({ status, errorMessage }: Props) => {
  return (
    <Alert status={status} width="480px" justifyContent="center" margin="auto">
      <AlertIcon />
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
};

export default AuthAlert;
