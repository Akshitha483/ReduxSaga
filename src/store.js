import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
// import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga/";
import rootSaga from "./sagas/rootSaga"

let sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga)

export default store;
