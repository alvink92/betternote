import React from "react";
import NoteIndexItem from "./note_index_item";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  vGap(height) {
    const divStyle = {
      display: "block",
      width: "100%",
      clear: "both",
      height: height
    };
    return <div style={divStyle} />;
  }

  header() {
    return (
      <div className="note-index-header-container">
        <h1>{"NOTES"}</h1>
        {this.vGap("15px")}
        <div className="notes-count">
          {Object.keys(this.props.notes).length + " notes"}
        </div>
      </div>
    );
  }

  noteIndexItems() {
    return Object.keys(this.props.notes).map(id => (
      <NoteIndexItem
        key={id}
        noteId={id}
        history={this.props.history}
        note={this.props.notes[id]}
        match={this.props.match}
      />
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
