import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

export interface queryParams {
  mainGenre?: string;
  defaultCategory?: string;
  ordering: string;
}

const useBooks = (queryParams?: queryParams) => {
  const apiClient = new APIClient<Book[]>("/books");
  return useQuery<Book[]>({
    queryKey: ["books", queryParams],
    queryFn: () =>
      queryParams
        ? apiClient.getAllBooks({
            params: {
              mainGenre: queryParams?.mainGenre || "",
              defaultCategory: queryParams?.defaultCategory || "",
              ordering: queryParams?.ordering || "",
            },
          })
        : apiClient.getAllBooks(),
  });
};

export default useBooks;
