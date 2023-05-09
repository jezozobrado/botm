import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

export interface queryParams {
  mainGenre?: string;
  defaultCategory?: string;
}
const useBooks = (queryParams?: queryParams) => {
  const apiClient = new APIClient<Book[]>("/books");
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () =>
      queryParams
        ? apiClient.getAllBooks({
            params: {
              mainGenre: queryParams?.mainGenre || "",
              defaultCategory: queryParams?.defaultCategory || "",
            },
          })
        : apiClient.getAllBooks(),
  });
};

export default useBooks;
