interface Opts {
    namespace: string;
}
interface CreateFactory {
    reduxReducers: any;
}
export function createReduxSagaLoading(opts: Opts): CreateFactory;
export function startLoading(): void;
export function stopLoading(): void;