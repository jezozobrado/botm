import { useQuery } from "@tanstack/react-query";
import { Book } from "../entities/Book";
import APIClient from "../services/apiClient";

export interface QueryParams {
  ordering?: string;
  mainGenre?: string;
  defaultCategory?: string;
  searchText?: string;
  limit?: number;
}

const useBooks = (queryParams?: QueryParams) => {
  console.log(queryParams);

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
              searchText: queryParams?.searchText || "",
              limit: queryParams?.limit,
            },
          })
        : apiClient.getAllBooks(),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useBooks;
