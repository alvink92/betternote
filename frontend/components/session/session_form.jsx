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

  render() {
    return (
      <div className="session-form-container">
        <ul>{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}</ul>
        <h1>{this.props.formType}</h1>
        <div className="session-form-wrap">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <input
              className="creds"
              type="text"
              onChange={this.updateInput("username")}
              value={this.state.username}
              placeholder="username"
            />
            <input
              className="creds"
              type="password"
              onChange={this.updateInput("password")}
              value={this.state.password}
              placeholder="password"
            />
            <input type="submit" />
          </form>
        </div>
        <Link to={this.props.formType === "/signin" ? "/signup" : "/signin"}>
          {this.props.formType === "/signin" ? "Sign Up" : "Sign In"}
        </Link>
      </div>
    );
  }
}

export default SessionForm;
