import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

const useNewBooks = () => {
  const apiClient = new APIClient<Book[]>("/books");
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: apiClient.getNewBooks,
  });
};

export default useNewBooks;
