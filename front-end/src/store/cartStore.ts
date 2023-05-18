import { create } from "zustand";
import { Book } from "../entities/Book";

interface CartStore {
  cart: Book[];
  current: number;
  removeClick: number;
  isMoreThanThree: boolean;
  disabled: boolean;
  setCart: (books: Book[]) => void;
  setCurrent: () => void;
  setIsMoreThanThree: () => void;
  setRemoveClick: () => void;
  setIsDisabled: (bool: boolean) => Promise<void>;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  current: 0,
  removeClick: 0,
  isMoreThanThree: false,
  disabled: false,
  setCart: (books) => set((store) => ({ cart: [...books] }), true),
  setCurrent: () => set((store) => ({ current: store.current + 1 })),
  setIsMoreThanThree: () =>
    set((store) => ({ isMoreThanThree: !store.isMoreThanThree })),
  setRemoveClick: () =>
    set((store) => ({ removeClick: store.removeClick + 1 })),
  // setIsDisabled: (bool) => set((store) => ({ disabled: bool })),
  setIsDisabled: async (bool) => await set((store) => ({ disabled: bool })),
}));

export default useCartStore;
