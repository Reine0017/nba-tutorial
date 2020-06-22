import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import promiseMiddleware from "redux-promise";

//import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

const createStorewithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStorewithMiddleware(reducers)}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
