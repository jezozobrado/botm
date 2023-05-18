import { create } from "zustand";

interface DrawerStore {
  isOpen: boolean;
  setIsOpen: () => void;
  resetIsOpen: () => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((store) => ({ isOpen: true })),
  resetIsOpen: () => set((store) => ({ isOpen: false })),
}));

export default useDrawerStore;
