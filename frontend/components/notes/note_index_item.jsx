import React from "react";
import ReactHtmlParser from "react-html-parser";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-index-item-container">
        <div className="note-index-item">
          <div className="note-item-title-section">
            <div className="note-item-title">{this.props.note.title}</div>
            <div
              className="note-item-delete hidden"
              onClick={() => this.props.deleteNote(this.props.note.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </div>
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
