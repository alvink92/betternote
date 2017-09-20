import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.processForm);
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  formHeaderName() {
    if (this.props.formType === "/login") {
      return "Sign In";
    } else {
      return "Sign Up";
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

  submitName() {
    if (this.props.formType === "/login") {
      return "Sign in";
    } else {
      return "Create Account";
    }
  }

  sessionSwitch() {
    const msg1 =
      this.props.formType === "/login"
        ? "Don't have an account?"
        : "Already have an account?";
    const msg2 =
      this.props.formType === "/login" ? "Create account" : "Sign in";
    return (
      <div className="switch">
        <div className="switch-msg-1">{msg1}</div>
        <div className="switch-msg-2">
          <Link to={this.props.formType === "/login" ? "/signup" : "/login"}>
            {msg2}
          </Link>
        </div>
      </div>
    );
  }

  altSessionRedirect() {}

  render() {
    return (
      <div className="session-page">
        <div className="horizontal-line" />
        <div className="session-form-container">
          <div className="form-header-container">
            <div className="form-header">
              <div className="logo">
                <img
                  src="https://www.evernote.com/redesign/global/img/elephant.png"
                  alt="Betternote logo"
                />
              </div>
              <div className="form-header-title">
                <h1>{this.formHeaderName()}</h1>
              </div>
            </div>
          </div>
          <ul>
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
          <div className="session-form-wrap">
            <form className="session-form" onSubmit={this.handleSubmit}>
              <button className="demo">Demo</button>
              {this.vGap("40px")}
              <div class="horizontal-text">or</div>
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
              <div className="remember-me">
                <label>
                  <input type="checkbox" />
                  Remember me for 30 days
                </label>
              </div>
              <input
                className="submit"
                type="submit"
                value={this.submitName()}
              />
            </form>
          </div>
          {this.vGap("30px")}
          {this.sessionSwitch()}
        </div>
      </div>
    );
  }
}

export default SessionForm;
