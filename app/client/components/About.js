import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {push} from "react-router-redux";

// Home page component
class About extends React.Component {

  pushLink(name){
    this.props.dispatch(push('/topics/' + name));
  }

  // render
  render() {
    return (
      <div className="page-home">
        <h4>About</h4>
        <button onClick={()=>this.pushLink("TestName")}>Test Link</button>
      </div>
    );
  }
}

export default connect()(About);
