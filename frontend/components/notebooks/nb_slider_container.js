import NotebookSlider from "./notebook_slider";
import { connect } from "react-redux";
import {
  fetchNotebooks,
  createNotebook,
  deleteNotebook,
  clearNotebooks
} from "../../actions/notebook_actions";
import { fetchNotes } from "../../actions/note_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.entities.notebooks.all,
    currNotebook: state.entities.notebooks.curr
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    clearNotebooks: () => dispatch(clearNotebooks())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookSlider)
);
