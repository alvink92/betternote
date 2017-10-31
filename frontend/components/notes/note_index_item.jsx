import React from "react";
import ReactHtmlParser from "react-html-parser";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    e.preventDefault();
    if (e.target.className === "fa fa-trash-o") {
      this.props.deleteNote(this.props.note.id);
    }
  }

  render() {
    return (
      <div className="note-index-item-container">
        <div className="note-index-item">
          <div className="note-item-title-section">
            <div className="note-item-title">{this.props.note.title}</div>
            <div className="note-item-delete trash" onClick={this.deleteNote} />
          </div>
          <div className="note-item-lastupdated-section">
            {this.props.note.last_updated.toUpperCase()}
          </div>
          <div className="note-item-body-section">
            {ReactHtmlParser(this.props.note.body)}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteIndexItem;
