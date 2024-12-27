import { UserType } from '@/types';
import { createPersistStore, createStore } from './middleware';
import { Store } from './types';

interface AuthState {
  isAuthenticated: boolean;
  user: null | UserType;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

interface AuthActions {
  setUser: (user: UserType) => void;
  logout: () => void;
}

export const useAuthStore = createStore<AuthState, AuthActions>('auth-store', (set, get) => ({
  ...initialState,
  setUser: (user: UserType) =>
    set(
      () => ({
        user,
      }),
      false,
      'setUser'
    ),
  logout: () => set({ isAuthenticated: false }, false, 'logout'),
}));

export type AuthStore = Store<AuthState, AuthActions>;
