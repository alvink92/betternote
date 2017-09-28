import NotebookCreate from "./notebook_create";
import { createNotebook } from "../../actions/notebook_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookCreate);
