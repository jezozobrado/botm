import { useMutation } from "@tanstack/react-query";
import APIClient, { CartRequest } from "../services/apiClient";
import { CartResponse } from "./useCart";

const useAddItem = () => {
  const apiClient = new APIClient<CartResponse>("/carts");
  return useMutation({
    mutationFn: (cart: CartRequest) => apiClient.addToCart(cart),
    onError: (err) => {
      console.error(err);
    },
  });
};

export default useAddItem;
