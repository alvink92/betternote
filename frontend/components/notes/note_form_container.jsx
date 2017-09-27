import { connect } from "react-redux";
import NoteForm from "./note_form";
import { withRouter } from "react-router";
import {
  fetchNote,
  updateNote,
  createNote,
  resetCurrNote
} from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { fetchTags } from "../../actions/tag_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.entities.notebooks.all,
    tags: state.entities.tags,
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
    noteAction: note => dispatch(noteAction(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchTags: () => dispatch(fetchTags()),
    resetCurrNote: () => dispatch(resetCurrNote())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NoteForm)
);
