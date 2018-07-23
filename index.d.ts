interface Opts {
    namespace: string;
}
interface CreateFactory {
    reduxReducers: any;
}
export function createReduxSagaLoading(opts?: Opts): CreateFactory;
export function startLoading(model: string): void;
export function stopLoading(model: string): void;