import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

const useBooks = () => {
  const apiClient = new APIClient<Book[]>("/books");
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: apiClient.getAllBooks,
  });
};

export default useBooks;
