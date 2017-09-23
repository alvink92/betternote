import { connect } from "react-redux";
import SessionFormPage from "./session_form_page";
import { login, signup } from "../../actions/session_actions";
import { withRouter } from "react-router";
import { clearSessionErrors } from "../../actions/session_actions";

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
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionFormPage)
);
