import { create } from "zustand";
import User from "./entities/User";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((store) => ({ user: user })),
}));

export default useUserStore;
