import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from "../features/auth/services/authService";

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage', // nombre para localStorage
    }
  )
);