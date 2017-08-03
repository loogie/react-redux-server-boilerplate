import React from "react";
import {Link} from "react-router-dom";

// Home page component
export default class About extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Topics</h4>
        <Link to="/topics/TestTopic">Test Topic</Link>
      </div>
    );
  }
}
