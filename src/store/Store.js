import { createStore, compose, applyMiddleware } from "redux";
import { RootReducer } from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [])
];

export const store = createStore(
  RootReducer,
  initialState,
  compose(...middleware)
);
