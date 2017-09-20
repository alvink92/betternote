import { connect } from "react-redux";
import Content from "./content";
import { signup, login } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
