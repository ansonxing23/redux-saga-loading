import {
    put
} from "redux-saga/effects"
const NAMESPACE = 'loading';
const START = '@@REDUX_SAGA_LOADING/START'
const STOP = '@@REDUX_SAGA_LOADING/STOP'
const START_ALL = '@@REDUX_SAGA_LOADING/START_ALL'
const STOP_ALL = '@@REDUX_SAGA_LOADING/STOP_ALL'

function createReduxSagaLoading(opts = {}) {
    const namespace = opts.namespace || NAMESPACE;
    const initialState = {
        models: {}
    };
    const reduxReducers = {
        [namespace](state = initialState, action) {
            const {
                modelNames
            } = action
            switch (action.type) {
                case START:
                    let startModels = {}
                    for (const name of modelNames) {
                        startModels[name] = true
                    }
                    return {
                        models: Object.assign({}, {
                            ...state.models
                        }, startModels)
                    };
                case STOP:
                    let stopModels = {}
                    for (const name of modelNames) {
                        stopModels[name] = false
                    }
                    return {
                        models: Object.assign({}, {
                            ...state.models
                        }, stopModels)
                    };
                case START_ALL:
                    const starts = Object.keys(state.models).reduce((obj, key) => {
                        obj[key] = true;
                        return obj
                    }, {})
                    return {
                        models: starts
                    };
                case STOP_ALL:
                    const stops = Object.keys(state.models).reduce((obj, key) => {
                        obj[key] = false;
                        return obj
                    }, {})
                    return {
                        models: stops
                    };
                default:
                    return state;
            }
        }
    }
    return {
        reduxReducers
    };
}

const startLoading = (...modelNames) => put({
    type: START,
    modelNames
})
const stopLoading = (...modelNames) => put({
    type: STOP,
    modelNames
})
const startAllLoading = () => put({
    type: START_ALL
})
const stopAllLoading = () => put({
    type: STOP_ALL
})

export {
    createReduxSagaLoading,
    startLoading,
    stopLoading,
    startAllLoading,
    stopAllLoading
}