import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

const useBook = (slug: string) => {
  const apiClient = new APIClient<Book[]>("books");
  return useQuery({
    queryKey: ["book", slug],
    queryFn: () => apiClient.getBook(slug),
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useBook;
