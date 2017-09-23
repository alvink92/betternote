import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";

class SessionFormPage extends React.Component {
  constructor(props) {
    super(props);
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

          <div className="session-form-wrap">
            <SessionForm
              match={this.props.match}
              clearSessionErrors={this.props.clearSessionErrors}
              errors={this.props.errors}
              history={this.props.history}
              login={this.props.login}
              formTypePath={this.props.formType}
              processForm={this.props.processForm}
            />
          </div>
          {this.vGap("30px")}
          {this.sessionSwitch()}
        </div>
      </div>
    );
  }
}

export default SessionFormPage;
