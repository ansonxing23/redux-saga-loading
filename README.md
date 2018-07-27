redux-saga-loading
===============
store loading state with redux.

---

## Install

```bash
$ npm install redux-saga-loading --save
```

## Usage

#### store.js

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createReduxSagaLoading } from 'redux-saga-loading'

const loading = createReduxSagaLoading()
const rootReducer = combineReducers({
  ...reducers,
  ...loading.reduxReducers
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware)
)
```
#### saga.js

```javascript
import { call, put } from "redux-saga/effects";
import { api } from 'apis'
import { startLoading, stopLoading } from 'redux-saga-loading'

function* list(action: any) {
  try {
    yield startLoading('users', 'rooms')
    const users = yield call(api.getUsers);
    const rooms = yield call(api.getRooms);
    yield put({ type: "SET_USERS", users });
    yield put({ type: "SET_ROOMS", rooms });
  } catch (error) { } finally {
    yield stopLoading('users', 'rooms')
    // or yield stopAllLoading()
  }
}
```

Then we can access loading state from store.

### opts

- `opts.namespace`: property key on global state, type String, Default `loading`


## State Structure

```
loading: {
  models: {
    users: false,
    ...
  },
}
```

## API

### createReduxSagaLoading([opts])

Create reducers for loading.

#### opts

Type: `Object`

`opts.namespace`: property key on global state, type String, Default `loading`

ex. { namespace: 'myLoading' }

### startLoading(modelNames)

Set start state of models.

#### modelNames

Type: `string` `Array`

List of name for models.

### stopLoading(modelNames)

Set start state of models.

#### modelNames

Type: `string` `Array`

List of name for models.

### startAllLoading()

Start all loading state. Should make sure that the models are existing in reducer.

### stopAllLoading()

Stop all loading state.

## License

[MIT](https://tldrlegal.com/license/mit-license)
