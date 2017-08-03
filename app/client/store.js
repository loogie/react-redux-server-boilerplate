import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux'

import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";
import createBrowserHistory from 'history/createBrowserHistory';

let browserHistory = createBrowserHistory();

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = browserHistory;
sagaMiddleware.run(sagas);

// export
export { store, history };
