import { connect } from "react-redux";
import NoteForm from "./note_form";
import { withRouter } from "react-router";
import { fetchNote, updateNote, createNote } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    isUpdateForm: ownProps.match.url.includes("notes/new") ? false : true,
    autoSave: ownProps.match.url.includes("notes/new") ? false : true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const noteAction = ownProps.match.url.includes("notes/new")
    ? createNote
    : updateNote;
  return {
    fetchNote: id => dispatch(fetchNote(id)),
    noteAction: note => dispatch(noteAction(note))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
