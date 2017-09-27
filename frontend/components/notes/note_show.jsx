import React from "react";
import NoteFormContainer from "./note_form_container";
import emptyNote from "../../util/entities_util";
import { Route, Switch } from "react-router-dom";

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
    return (
      <div className="note-show-container">
        <Switch>
          <Route path="/notes/new">
            <NoteFormContainer
              note={{
                title: "",
                body: "",
                notebook: {},
                taggings: [],
                last_updated: ""
              }}
              prevUrl={this.props.match.url}
            />
          </Route>
          <Route path="/">
            <NoteFormContainer note={this.props.currNote} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default NoteShow;
