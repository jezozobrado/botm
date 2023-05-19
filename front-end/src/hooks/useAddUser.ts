import { useMutation } from "@tanstack/react-query";
import User from "../entities/User";
import APIClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const useAddUser = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const apiClient = new APIClient<User>("users");

  return useMutation({
    mutationFn: (user: User) => apiClient.addUser(user),
    onSuccess: (data) => {
      setUser(data);
      navigate("/the-best-new-books");
    },
    onError: (error) => console.log(error),
  });
};

export default useAddUser;
