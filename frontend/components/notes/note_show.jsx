import React from "react";
import NoteFormContainer from "./note_form_container";
import { emptyNote } from "../../util/entities_util";
import { Route, Switch } from "react-router-dom";
import merge from "lodash/merge";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dummy;
    if (this.props.match.params.noteId)
      this.props
        .fetchNote(this.props.match.params.noteId)
        .then(note => (dummy = note));
  }

  componentWillReceiveProps(nextProps) {
    let dummy;
    if (nextProps.match.params.noteId) {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        nextProps
          .fetchNote(nextProps.match.params.noteId)
          .then(note => (dummy = note));
      }
    }
  }

  render() {
    console.log(merge({}, emptyNote, { notebook: this.props.currNotebook }));
    return (
      <div className="note-show-container">
        {this.props.match.url === "/notes/new" ? (
          <NoteFormContainer
            note={merge({}, emptyNote, { notebook: this.props.currNotebook })}
            prevUrl={this.props.match.url}
          />
        ) : (
          <NoteFormContainer note={this.props.currNote} />
        )}
      </div>
    );
  }
}

export default NoteShow;
