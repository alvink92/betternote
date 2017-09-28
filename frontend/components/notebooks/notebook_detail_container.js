import { connect } from "react-redux";
import NotebookDetail from "./notebook_detail";
import { withRouter } from "react-router";
import { updateNotebook, deleteNotebook } from "../../actions/notebook_actions";
import { fetchNotes } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookDetail)
);
