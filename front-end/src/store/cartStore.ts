import { create } from "zustand";
import { CartRequest } from "../services/apiClient";
import { Book } from "../entities/Book";

interface CartStore {
  cart: Book[];
  setCart: (book: Book) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  setCart: (book) => set((store) => ({ cart: [...store.cart, book] })),
}));

export default useCartStore;
