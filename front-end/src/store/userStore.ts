import { create } from "zustand";
import User from "../entities/User";
import { persist } from "zustand/middleware";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((store) => ({ user: user })),
}));
// const useUserStore = create(
//   persist<UserStore>(
//     (set) => ({
//       user: null,
//       setUser: (user) => set((store) => ({ user: user })),
//     }),
//     {
//       name: "user",
//     }
//   )
// );

export default useUserStore;
