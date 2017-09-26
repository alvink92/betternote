import React from "react";
import NoteIndexItem from "./note_index_item";
import { NavLink, Link } from "react-router-dom";
import TagNotesIndexHeader from "../tags/tag_notes_index_header";
import NotebookNotesIndexHeaderContainer from "../notebooks/nb_notes_index_header_container";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dummy;

    if (this.props.match.params.notebookId) {
      this.props
        .fetchNotebookNotes(this.props.match.params.notebookId)
        .then(notes => dummy, error => this.history.push("/notes"));
    } else if (this.props.match.params.tagId) {
      this.props
        .fetchTagNotes(this.props.match.params.tagId)
        .then(notes => dummy, error => this.history.push("/notes"));
    } else {
      this.props.fetchNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    let willFetch = false;
    let dummy;

    const oldParams = this.props.match.params;
    const newParams = nextProps.match.params;

    if (oldParams.notebookId !== newParams.notebookId) {
      willFetch = true;
    } else if (oldParams.tagId !== newParams.tagId) {
      willFetch = true;
    }

    if (willFetch) {
      if (nextProps.match.params.notebookId) {
        nextProps
          .fetchNotebookNotes(nextProps.match.params.notebookId)
          .then(notes => dummy, error => this.history.push("/notes"));
      } else if (nextProps.match.params.tagId) {
        nextProps
          .fetchTagNotes(nextProps.match.params.tagId)
          .then(notes => dummy, error => this.history.push("/notes"));
      } else if (nextProps.match.url.includes("/notes")) {
        nextProps.fetchNotes();
      }
    }
  }

  notesIndexHeader() {
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

  header() {
    let headerComponent;
    if (this.props.match.params.tagId) {
      headerComponent = (
        <TagNotesIndexHeader
          tagId={this.props.match.params.tagId}
          history={this.props.history}
        />
      );
    } else if (this.props.match.params.notebookId) {
      headerComponent = <NotebookNotesIndexHeaderContainer />;
    } else {
      headerComponent = this.notesIndexHeader();
    }

    return headerComponent;
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
      <NavLink className="show-link" key={id} to={this.getShowNoteLink(id)}>
        <NoteIndexItem
          history={this.props.history}
          fetchNote={this.props.fetchNote}
          deleteNote={this.props.deleteNote}
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
