import React from "react";
import {Link} from "react-router-dom";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h1>Hello world!</h1>
        <Link to="/about">About</Link>
        &nbsp;|&nbsp;
        <Link to="/topics">Topics</Link>
      </div>
    );
  }
}
