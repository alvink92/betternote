import NotebookSlider from "./notebook_slider";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return { notebooks: [] };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookSlider)
);
