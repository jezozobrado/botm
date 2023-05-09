import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

const useBook = (slug: string) => {
  const apiClient = new APIClient<Book[]>("books");
  return useQuery({
    queryKey: ["book", slug],
    queryFn: () => apiClient.getBook(slug),
  });
};

export default useBook;
