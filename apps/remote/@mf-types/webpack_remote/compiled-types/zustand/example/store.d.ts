export type ExampleState = {
    bears: number;
    fishes: number;
    addFish: () => void;
    addBear: () => void;
    eatFish: () => void;
};
export declare const useExampleStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ExampleState>, "setState"> & {
    setState(partial: ExampleState | Partial<ExampleState> | ((state: ExampleState) => ExampleState | Partial<ExampleState>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: ExampleState | ((state: ExampleState) => ExampleState), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
}>;
