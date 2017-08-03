import React from "react";
import { ConnectedRouter } from "react-router-redux"
import { Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import Topic from "./components/Topic";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <ConnectedRouter history={history}>
    <App>
      <Route component={Home} />
      <Route path="/about" component={About}/>
      <Route exact path="/topics" component={Topics}/>
      <Route exact path="/topics/:topic" component={Topic}/>
    </App>
  </ConnectedRouter>
);

// export
export { router };
