import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.match.path
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.match.path === "/signup" ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
