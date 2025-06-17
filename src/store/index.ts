import { Nullable } from "@/types";
import { User } from "@/types/auth";
import { isDevelopment } from "@/utils";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  user: Nullable<User>;
  setUser: (user: Nullable<User>) => void;
  updateUser: (user: Partial<User>) => void;
};

export const useStore = create<Store>()(
  devtools<Store>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (user) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...user } : null,
        }));
      },
    }),
    { name: "DefaultStore", enabled: isDevelopment() },
  ),
);

type UIStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useUIStore = create<UIStore>()(
  devtools<UIStore>(
    (set) => ({
      loading: false,
      setLoading: (loading) => set({ loading }),
    }),
    { name: "UIStore", enabled: isDevelopment() },
  ),
);
