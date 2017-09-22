import { connect } from "react-redux";
import NoteShow from "./note_show";
import { withRouter } from "react-router";
import { fetchNote, updateNote, deleteNote } from "../../actions/note_actions";

const mapStateToProps = state => {
  return {
    currNote: state.entities.notes.curr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: id => dispatch(fetchNote(id)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteShow)
);
