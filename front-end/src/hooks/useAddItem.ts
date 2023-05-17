import { useMutation } from "@tanstack/react-query";
import APIClient, { CartRequest } from "../services/apiClient";
import { CartResponse } from "./useCart";
import { useState } from "react";
import useCartStore from "../store/cartStore";

const useAddItem = () => {
  const apiClient = new APIClient<CartResponse>("/carts");
  return useMutation({
    mutationFn: (cart: CartRequest) => apiClient.addToCart(cart),
    onSuccess: (data) => {},
    onError: (err) => {
      console.error(err);
    },
  });
};

export default useAddItem;
