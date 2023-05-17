import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useCartStore from "../store/cartStore";
import useUserStore from "../store/userStore";
import { Book } from "../entities/Book";

export interface CartResponse {
  books: Book[];
  customer: string;
}

const useCart = () => {
  const apiClient = new APIClient<CartResponse>("/carts");

  const user = useUserStore((s) => s.user);
  const current = useCartStore((s) => s.current);

  return useQuery({
    queryKey: ["cart", current, user],
    queryFn: () => apiClient.getCartItems(user?._id),
    onSuccess: (data) => data,
    onError: (err) => console.error(err),
    staleTime: 24 * 60 * 1000 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export default useCart;
