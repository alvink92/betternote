import React from "react";
import { Route, Switch } from "react-router-dom";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-app">
        <button onClick={this.props.logout}>Get out</button>
      </div>
    );
  }
}

export default MainApp;
