import { connect } from "react-redux";
import Content from "./content";
import { signup } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
