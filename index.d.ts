interface Opts {
    namespace: string;
}
interface CreateFactory {
    reduxReducers: any;
}
export function createReduxSagaLoading(opts?: Opts): CreateFactory;
export function startLoading(...modelNames: string[]): void;
export function stopLoading(...modelNames: string[]): void;
export function startAllLoading(): void;
export function stopAllLoading(): void;