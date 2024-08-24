import { create } from "zustand";
import { persist } from "zustand/middleware";
import { merge } from "lodash";
import { User } from "@/interface";

interface SignStoreProps {
  user?: User;
  signIn: (user: User) => void;
  signOut: () => void;
}

const useSignStore = create(
  persist<SignStoreProps>(
    (set, get) => ({
      user: undefined,
      signIn: (user: User) => set({ user }),
      signOut: () => set({ user: undefined }),
    }),
    {
      name: "sign-storage",
      merge: (prev, cur) => {
        return merge({}, cur, prev);
      },
    }
  )
);

export default useSignStore;
