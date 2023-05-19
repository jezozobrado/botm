import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import User from "../entities/User";
import APIClient from "../services/apiClient";

const useAuth = () => {
  const apiClient = new APIClient<User>("/auth");

  return useMutation({
    mutationFn: (user: User) => apiClient.authUser(user),
    onError: (err: AxiosError) => console.error("ulul", err),
  });
};

export default useAuth;
