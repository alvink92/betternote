import React from "react";
import NoteIndexItem from "./note_index_item";
import { NavLink, Link } from "react-router-dom";
import TagNotesIndexHeader from "../tags/tag_notes_index_header";
import NotebookNotesIndexHeader from "../notebooks/nb_notes_index_header";

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
    let willFetch = false;

    const oldParams = this.props.match.params;
    const newParams = nextProps.match.params;

    if (oldParams.notebookId !== newParams.notebookId) {
      willFetch = true;
    } else if (oldParams.tagId !== newParams.tagId) {
      willFetch = true;
    }

    if (willFetch) {
      let fetchNotesAction;
      if (nextProps.match.params.notebookId) {
        fetchNotesAction = () =>
          nextProps.fetchNotebookNotes(nextProps.match.params.notebookId);
      } else if (nextProps.match.params.tagId) {
        fetchNotesAction = () =>
          nextProps.fetchTagNotes(nextProps.match.params.tagId);
      } else {
        fetchNotesAction = () => nextProps.fetchNotes();
      }
      fetchNotesAction();
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
    if (this.props.match.path === "/tags/:tagId") {
      headerComponent = (
        <TagNotesIndexHeader tagId={this.props.match.params.tagId} />
      );
    } else if (this.props.match.path === "/notebooks/:notebookId") {
      headerComponent = (
        <NotebookNotesIndexHeader
          notebookId={this.props.match.params.notebookId}
        />
      );
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
