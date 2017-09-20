import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleDemoButtonClick = this.handleDemoButtonClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
  }

  handleDemoButtonClick(e) {
    this.props
      .login({ username: "demo", password: "password" })
      .then(() => this.props.history.push("/"));
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  submitName() {
    if (this.props.formTypePath === "/login") {
      return "Sign in";
    } else {
      return "Create Account";
    }
  }

  vGap(height) {
    const divStyle = {
      display: "block",
      width: "100%",
      clear: "both",
      height: height
    };
    return <div style={divStyle} />;
  }

  render() {
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <button className="demo" onClick={this.handleDemoButtonClick}>
          Demo
        </button>
        {this.vGap("40px")}
        <div className="horizontal-text">Or</div>
        {this.vGap("15px")}
        <input
          className="creds"
          type="text"
          onChange={this.updateInput("username")}
          value={this.state.username}
          placeholder="Username"
        />
        <input
          className="creds"
          type="password"
          onChange={this.updateInput("password")}
          value={this.state.password}
          placeholder="Password"
        />
        {this.props.formTypePath === "/login" ? (
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember me for 30 days
            </label>
          </div>
        ) : (
          <br />
        )}
        <input className="submit" type="submit" value={this.submitName()} />
      </form>
    );
  }
}

export default SessionForm;
