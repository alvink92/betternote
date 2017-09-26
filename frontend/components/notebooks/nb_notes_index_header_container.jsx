import { connect } from "react-redux";
import NotebookNotesIndexHeader from "./nb_notes_index_header";
import { withRouter } from "react-router";
import {
  fetchNotebook,
  updateNotebook,
  deleteNotebook
} from "../../actions/notebook_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currNotebook: state.entities.notebooks.curr
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookNotesIndexHeader)
);
