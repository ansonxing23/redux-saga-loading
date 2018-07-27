'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopAllLoading = exports.startAllLoading = exports.stopLoading = exports.startLoading = exports.createReduxSagaLoading = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _effects = require('redux-saga/effects');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAMESPACE = 'loading';
var START = '@@REDUX_SAGA_LOADING/START';
var STOP = '@@REDUX_SAGA_LOADING/STOP';
var START_ALL = '@@REDUX_SAGA_LOADING/START_ALL';
var STOP_ALL = '@@REDUX_SAGA_LOADING/STOP_ALL';

function createReduxSagaLoading() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var namespace = opts.namespace || NAMESPACE;
    var initialState = {
        models: {}
    };
    var reduxReducers = _defineProperty({}, namespace, function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];
        var modelNames = action.modelNames;

        switch (action.type) {
            case START:
                var startModels = {};
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = modelNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var name = _step.value;

                        startModels[name] = true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return {
                    models: Object.assign({}, _extends({}, state.models), startModels)
                };
            case STOP:
                var stopModels = {};
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = modelNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _name = _step2.value;

                        stopModels[_name] = false;
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return {
                    models: Object.assign({}, _extends({}, state.models), stopModels)
                };
            case START_ALL:
                var starts = Object.keys(state.models).reduce(function (obj, key) {
                    obj[key] = true;
                    return obj;
                }, {});
                return {
                    models: starts
                };
            case STOP_ALL:
                var stops = Object.keys(state.models).reduce(function (obj, key) {
                    obj[key] = false;
                    return obj;
                }, {});
                return {
                    models: stops
                };
            default:
                return state;
        }
    });
    return {
        reduxReducers: reduxReducers
    };
}

var startLoading = function startLoading() {
    for (var _len = arguments.length, modelNames = Array(_len), _key = 0; _key < _len; _key++) {
        modelNames[_key] = arguments[_key];
    }

    return (0, _effects.put)({
        type: START,
        modelNames: modelNames
    });
};
var stopLoading = function stopLoading() {
    for (var _len2 = arguments.length, modelNames = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        modelNames[_key2] = arguments[_key2];
    }

    return (0, _effects.put)({
        type: STOP,
        modelNames: modelNames
    });
};
var startAllLoading = function startAllLoading() {
    return (0, _effects.put)({
        type: START_ALL
    });
};
var stopAllLoading = function stopAllLoading() {
    return (0, _effects.put)({
        type: STOP_ALL
    });
};

exports.createReduxSagaLoading = createReduxSagaLoading;
exports.startLoading = startLoading;
exports.stopLoading = stopLoading;
exports.startAllLoading = startAllLoading;
exports.stopAllLoading = stopAllLoading;
//# sourceMappingURL=index.js.map