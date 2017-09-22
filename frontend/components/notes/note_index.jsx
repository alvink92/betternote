import React from "react";
import NoteIndexItem from "./note_index_item";
import { NavLink, Link } from "react-router-dom";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let fetchNotesAction;
    if (this.props.match.params.notebookId) {
      fetchNotesAction = () =>
        this.props.fetchNotebookNotes(this.props.match.params.notebookId);
    } else if (this.props.match.params.tagId) {
      fetchNotesAction = () =>
        this.props.fetchTagNotes(this.props.match.params.tagId);
    } else {
      fetchNotesAction = () => this.props.fetchNotes();
    }
    fetchNotesAction();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      let fetchNotesAction;
      if (this.props.match.params.notebookId) {
        fetchNotesAction = () =>
          this.props.fetchNotebookNotes(this.props.match.params.notebookId);
      } else if (this.props.match.params.tagId) {
        fetchNotesAction = () =>
          this.props.fetchTagNotes(this.props.match.params.tagId);
      } else {
        fetchNotesAction = () => this.props.fetchNotes();
      }
      fetchNotesAction();
    }
  }

  header() {
    let headerType;
    if (this.props.match.params.notebookId) {
    } else if (this.props.match.params.tagId) {
    } else {
    }

    return (
      <div className="note-index-header-container">
        <h1>{"NOTES"}</h1>
        <br />
        <div className="notes-count">
          {Object.keys(this.props.notes).length + " notes"}
        </div>
      </div>
    );
  }

  getShowNoteLink(id) {
    let url;
    if (this.props.match.params.notebookId) {
      url = `/notebooks/${this.props.match.params.notebookId}/notes/${id}`;
    } else if (this.props.match.params.tagId) {
      url = `/tags/${this.props.match.params.tagId}/notes/${id}`;
    } else {
      url = `/notes/${id}`;
    }
    return url;
  }

  noteIndexItems() {
    return Object.keys(this.props.notes).map(id => (
      <NavLink
        className="show-link"
        key={id}
        onClick={() => this.props.fetchNote(id)}
        to={this.getShowNoteLink(id)}
      >
        <NoteIndexItem
          history={this.props.history}
          fetchNote={this.props.fetchNote}
          note={this.props.notes[id]}
          match={this.props.match}
        />
      </NavLink>
    ));
  }

  render() {
    return (
      <div className="note-index-container">
        {this.header()}
        <div className="note-index-items-container">
          {this.noteIndexItems()}
        </div>
      </div>
    );
  }
}

export default NoteIndex;
