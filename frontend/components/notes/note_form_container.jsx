import { connect } from "react-redux";
import NoteForm from "./note_form";
import { withRouter } from "react-router";
import { fetchNote, updateNote, createNote } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  const emptyNote = { title: "", body: "", notebook: {}, taggings: [] };

  return {
    isUpdateForm: ownProps.match.url.includes("new-note") ? false : true,
    autoSave: ownProps.match.url.includes("new-note") ? false : true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const noteAction = ownProps.match.url.includes("new-note")
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
