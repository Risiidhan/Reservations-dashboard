import { Nullable } from "@/types";
import { User } from "@/types/auth";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  user: Nullable<User>;
  setUser: (user: Nullable<User>) => void;
  updateUser: (user: Partial<User>) => void;
};

export const useStore = create<Store>()(
  devtools((set) => ({
    user: { name: "", age: 0 },
    setUser: (user) => set({ user }),
    updateUser: (user) =>
      set((state) => ({
        user: state.user ? { ...state.user, ...user } : null,
      })),
  })),
);
