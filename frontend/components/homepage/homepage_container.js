import { connect } from "react-redux";
import Homepage from "./homepage";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
