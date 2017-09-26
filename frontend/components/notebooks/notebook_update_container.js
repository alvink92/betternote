import { connect } from "react-redux";
import NotebookUpdate from "./notebook_update";
import { withRouter } from "react-router";
import { updateNotebook, deleteNotebook } from "../../actions/notebook_actions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookUpdate)
);
