//export interface StoreState {
//  loading: boolean;
//  error: string | null;
//}
//
//export interface StoreActions {
//  setLoading: (loading: boolean) => void;
//  setError: (error: string | null) => void;
//  reset: () => void;
//}

export type Store<T extends object, A = {}> = T & A;

export type PartialState<T> = Partial<T>;
