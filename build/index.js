'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopLoading = exports.startLoading = exports.createReduxSagaLoading = undefined;

var _console;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _effects = require('redux-saga/effects');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAMESPACE = 'loading';
var START = '@@REDUX_SAGA_LOADING/START';
var STOP = '@@REDUX_SAGA_LOADING/STOP';

function createReduxSagaLoading() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var namespace = opts.namespace || NAMESPACE;
    var initialState = {
        models: {}
    };
    var reduxReducers = _defineProperty({}, namespace, function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];
        var model = action.model;

        switch (action.type) {
            case START:
                return {
                    models: _extends({}, state.models, _defineProperty({}, model, true))
                };
            case STOP:
                return {
                    models: _extends({}, state.models, _defineProperty({}, model, false))
                };
            default:
                return state;
        }
    });
    return {
        reduxReducers: reduxReducers
    };
}

var startLoading = function startLoading(model) {
    return (0, _effects.put)({
        type: START,
        model: model
    });
};
var stopLoading = function stopLoading(model) {
    return (0, _effects.put)({
        type: STOP,
        model: model
    });
};

exports.createReduxSagaLoading = createReduxSagaLoading;
exports.startLoading = startLoading;
exports.stopLoading = stopLoading;


var data = { models: { users: true } };
(_console = console).log.apply(_console, _toConsumableArray(data.models));
//# sourceMappingURL=index.js.map