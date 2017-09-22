import { connect } from "react-redux";
import MainApp from "./main_app";
import * as noteAction from "../../actions/note_actions";
import { logout } from "../../actions/session_actions";
// import { withRouter } from "react-router";

const mapStateToProps = state => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(noteAction.fetchNotes()),
    fetchNotebookNotes: notebookId =>
      dispatch(noteAction.fetchNotebookNotes(notebookId)),
    fetchNote: noteId => dispatch(noteAction.fetchNote(noteId)),
    createNote: note => dispatch(noteAction.createNote(note)),
    updateNote: note => dispatch(noteAction.updateNote(note)),
    deleteNote: noteId => dispatch(noteAction.deleteNote(noteId)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
