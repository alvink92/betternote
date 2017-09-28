import { connect } from "react-redux";
import NoteDetail from "./note_detail";

const mapStateToProps = state => {
  return {
    note: state.entities.notes.curr
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
