import { create } from 'zustand';

interface State {
  user: string;
  setUser: (user: string) => void;
  logOut: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: '',
  setUser: (user) => set({ user }),
  logOut: () => set({ user: '' })
}));