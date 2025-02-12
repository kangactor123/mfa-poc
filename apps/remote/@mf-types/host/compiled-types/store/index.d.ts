interface AppState {
    count: number;
    increment: () => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppState>>;
export default useStore;
