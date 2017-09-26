import { connect } from "react-redux";
import NotesIndex from "./note_index";
import { withRouter } from "react-router";
import {
  fetchNotes,
  fetchNotebookNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
  fetchTagNotes
} from "../../actions/note_actions";

const mapStateToProps = state => {
  return {
    notes: state.entities.notes.all,
    currNote: state.entities.notes.curr,
    currNotebook: state.entities.notebooks.curr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebookNotes: notebookId => dispatch(fetchNotebookNotes(notebookId)),
    fetchTagNotes: tagId => dispatch(fetchTagNotes(tagId)),
    fetchNote: id => dispatch(fetchNote(id)),
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotesIndex)
);
