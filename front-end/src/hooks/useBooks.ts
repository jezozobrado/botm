import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../entities/Book";

const useBooks = () => {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () =>
      axios.get("http://localhost:4000/api/books/").then((res) => res.data),
  });
};

export default useBooks;
