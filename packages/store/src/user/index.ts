import { create } from "zustand";

export type User = {
  name: string;
};

type UserState = {
  user: User;
};

type UserAction = {
  setUser: (user: User) => void;
};

interface UserStore extends UserState, UserAction {}

const initialUser: User = {
  name: "",
};

export const useUserStore = create<UserStore>((set) => ({
  user: initialUser,
  setUser: (user) => set({ user }),
}));
