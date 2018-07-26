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
    yield startLoading('users')
    const data = yield call(api.getUsers);
    yield put({ type: "SET_USERS", data });
  } catch (error) { } finally {
    yield stopLoading('users')
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

## License

[MIT](https://tldrlegal.com/license/mit-license)
