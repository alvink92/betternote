import React from "react";
import NoteFormContainer from "./note_form_container";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dummy;
    if (this.props.match.params.noteId)
      this.props
        .fetchNote(this.props.match.params.noteId)
        .then(note => (dummy = note), err => this.props.history.push("/notes"));
  }

  componentWillReceiveProps(nextProps) {
    let dummy;
    if (nextProps.match.params.noteId) {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        nextProps
          .fetchNote(nextProps.match.params.noteId)
          .then(
            note => (dummy = note),
            err => this.props.history.push("/notes")
          );
      }
    }
  }

  render() {
    return (
      <div className="note-show-container">
        <NoteFormContainer
          isUpdateForm={true}
          note={this.props.currNote}
          autoSave={true}
        />
      </div>
    );
  }
}

export default NoteShow;
