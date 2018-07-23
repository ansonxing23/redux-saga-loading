import { put } from "redux-saga/effects";
const NAMESPACE = 'loading';
const ISLOADING = 'REDUX_SAGA_IS_LOADING'
const NOTLOADING = 'REDUX_SAGA_NOT_LOADING'

function createReduxSagaLoading(opts = {}) {
    const namespace = opts.namespace || NAMESPACE;
    const initialState = {
        models: {}
    };
    const reduxReducers = {
        [namespace](state = false, action) {
            switch (action.type) {
                case ISLOADING:
                    return true;
                case NOTLOADING:
                    return false;
                default:
                    return state;
            }
        }
    }
    
    return {
        reduxReducers
    };
}

const startLoading = () => yield put({ type: ISLOADING })
const stopLoading = () => yield put({ type: NOTLOADING })

export {
    createReduxSagaLoading,
    startLoading,
    stopLoading
}