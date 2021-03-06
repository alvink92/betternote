import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleDemoButtonClick = this.handleDemoButtonClick.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // console.log(this.props);
    // console.log(newProps);
    if (this.props.match.url !== newProps.match.url) {
      this.props.clearSessionErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
  }

  clickEnterListener(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props
        .processForm(this.state)
        .then(() => this.props.history.push("/"));
    }
  }

  handleDemoButtonClick(e) {
    e.preventDefault();
    this.setState({ username: "", password: "" });
    const demoUsername = Array.from("demo");
    const demoPassword = Array.from("password");

    let loginDemoInterval = () => {
      const intervalId = setInterval(() => {
        let username = this.state.username;
        let password = this.state.password;

        if (demoUsername.length > 0) {
          username += demoUsername.shift();
          this.setState({ username: username });
        } else if (demoPassword.length > 0) {
          password += demoPassword.shift();
          this.setState({ password: password });
        } else {
          clearInterval(intervalId);
          this.props
            .login({ username: "demo", password: "password" })
            .then(() => this.props.history.push("/"));
        }
      }, 100);
    };
    loginDemoInterval();
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
        <button
          className="demo animated pulse infinite"
          onClick={this.handleDemoButtonClick}
        >
          <img
            className="demo-logo"
            src="https://www.evernote.com/redesign/global/img/elephant.png"
          />
          <div className="demo-message">{"Sign in with Demo"}</div>
        </button>
        {this.vGap("40px")}
        <div className="horizontal-text">
          <span>or</span>
        </div>
        {this.vGap("15px")}
        <ul className="session-errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        <input
          className="creds usr"
          type="text"
          onChange={this.updateInput("username")}
          onKeyPress={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              $(".pwd").focus();
            }
          }}
          value={this.state.username}
          placeholder="Username"
        />
        <input
          className="creds pwd"
          type="password"
          onChange={this.updateInput("password")}
          onKeyPress={this.clickEnterListener}
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
          <div className="register-terms">
            By clicking Create Account, I agree to the <u>Terms of Service</u>{" "}
            and <u>Privacy Policy</u>.
          </div>
        )}
        <input className="submit" type="submit" value={this.submitName()} />
      </form>
    );
  }
}

export default SessionForm;
