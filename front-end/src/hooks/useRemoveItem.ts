import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CartResponse } from "./useCart";
import { Params } from "../components/CartItem";

const useRemoveItem = () => {
  const apiClient = new APIClient<CartResponse>("/carts");
  return useMutation({
    mutationFn: (params: Params) => apiClient.removeCartItem(params),
    onError: (err) => console.error("error", err),
  });
};

export default useRemoveItem;
