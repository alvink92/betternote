import NotebookSlider from "./notebook_slider";
import { connect } from "react-redux";
import {
  fetchNotebooks,
  createNotebook,
  deleteNotebook
} from "../../actions/notebook_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return { notebooks: state.entities.notebooks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotebookSlider)
);
