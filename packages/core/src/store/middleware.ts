import { StateCreator, StoreApi, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Store } from './types';

type SetState<T> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
    action?: string | { type: string } | undefined
  ): void;
}['_'];

export const createBaseActions = <T extends object>(
  set: SetState<Store<T>>,
  get: StoreApi<Store<T>>['getState'],
  initialState: T
) => ({
  setLoading: (loading: boolean) => set((state) => ({ ...state, loading }), false, 'setLoading'),
  setError: (error: string | null) => set((state) => ({ ...state, error }), false, 'setError'),
  reset: () => set({ ...initialState, loading: false, error: null }, false, 'reset'),
});

export const createPersistStore = <T extends object, A extends object = {}>(
  name: string,
  stateCreator: StateCreator<
    Store<T, A>,
    [['zustand/devtools', never], ['zustand/persist', unknown]]
  >
) => {
  return create<Store<T, A>>()(
    devtools(
      persist(stateCreator, {
        name,
      })
    )
  );
};

export const createStore = <T extends object, A extends object = {}>(
  name: string,
  stateCreator: StateCreator<Store<T, A>, [['zustand/devtools', never]]>
) => {
  return create<Store<T, A>>()(devtools(stateCreator, { name }));
};
