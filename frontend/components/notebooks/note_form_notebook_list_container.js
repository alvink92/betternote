import { connect } from "react-redux";
import NoteFormNotebookList from "./note_form_notebook_list";
import { fetchNotebooks } from "../../actions/notebook_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.entities.notebooks.all
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NoteFormNotebookList
);
