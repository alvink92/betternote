import { connect } from "react-redux";
import MainApp from "./main_app";
// import SessionForm from "./session_form";
import { logout } from "../../actions/session_actions";
// import { withRouter } from "react-router";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
