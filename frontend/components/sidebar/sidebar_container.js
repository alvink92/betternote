import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
