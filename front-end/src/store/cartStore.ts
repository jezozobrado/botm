import { create } from "zustand";
import { Book } from "../entities/Book";

interface CartStore {
  cart: Book[];
  current: number;
  isMoreThanThree: boolean;
  setCart: (books: Book[]) => void;
  setCurrent: () => void;
  setIsMoreThanThree: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  current: 0,
  isMoreThanThree: false,
  setCart: (books) => set((store) => ({ cart: [...books] })),
  setCurrent: () => set((store) => ({ current: store.current + 1 })),
  setIsMoreThanThree: () =>
    set((store) => ({ isMoreThanThree: !store.isMoreThanThree })),
}));

export default useCartStore;
