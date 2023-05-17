import { create } from "zustand";
import { Book } from "../entities/Book";
import { persist, createJSONStorage } from "zustand/middleware";
import useUserStore from "./userStore";

interface CartStore {
  cart: Book[];
  current: number;
  setCart: (books: Book[]) => void;
  editCart: () => void;
  resetCart: () => void;
  setCurrent: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  current: 0,
  setCart: (books) => set((store) => ({ cart: [...books] })),
  editCart: () => set((store) => ({ cart: store.cart.slice(-1) })),
  resetCart: () => set((store) => ({ cart: [] })),
  setCurrent: () => set((store) => ({ current: store.current + 1 })),
}));

// const useCartStore = create(
//   persist<CartStore>(
//     (set) => ({
//       cart: [],
//       current: 0,
//       setCart: (books) => set((store) => ({ cart: [...books] })),
//       editCart: () => set((store) => ({ cart: store.cart.slice(-1) })),
//       resetCart: () => set((store) => ({ cart: [] })),
//       setCurrent: () => set((store) => ({ current: store.current + 1 })),
//     }),
//     {
//       name: "cart",
//     }
//   )
// );

export default useCartStore;
