import React from "react";
import NoteIndexItem from "./note_index_item";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  header() {
    return (
      <div className="notes-index-header-container">
        <h1>{"NOTES"}</h1>
      </div>
    );
  }

  noteIndexItems() {
    return Object.keys(this.props.notes).map(id => (
      <NoteIndexItem key={id} note={this.props.notes[id]} />
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
