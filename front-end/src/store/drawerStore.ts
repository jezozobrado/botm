import { create } from "zustand";

interface DrawerStore {
  isOpen: boolean;
  setIsOpen: () => void;
  resetIsOpen: () => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set(() => ({ isOpen: true })),
  resetIsOpen: () => set(() => ({ isOpen: false })),
}));

export default useDrawerStore;
