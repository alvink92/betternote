import React from "react";
import NoteIndexItem from "./note_index_item";
import { NavLink, Link } from "react-router-dom";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes().then(notes => console.log(notes));
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
      <NavLink
        className="show-link"
        key={id}
        onClick={() => this.props.fetchNote(id)}
        to={`${this.props.match.path}/${id}`}
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
