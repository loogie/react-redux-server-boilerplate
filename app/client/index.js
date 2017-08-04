import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { history, store } from "./store.js";
import { router } from "./router.js";

console.log("HISTORY");
console.log(history);
console.log("STORE");
console.log(store);

// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
