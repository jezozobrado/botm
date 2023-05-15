import { create } from "zustand";
import { Book } from "../entities/Book";

interface BookStore {
  book: Book | null;
  searchText?: string;
  setSearchText: (searchText?: string) => void;
}

const useBookStore = create<BookStore>((set) => ({
  book: null,
  searchText: "",
  setSearchText: (searchText) => set((store) => ({ searchText: searchText })),
}));

export default useBookStore;
