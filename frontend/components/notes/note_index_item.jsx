import React from "react";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-index-item-container">
        <div className="note-index-item">
          <div className="note-item-title-section">{this.props.note.title}</div>
          <div className="note-item-lastupdated-section">
            {this.props.note.last_updated.toUpperCase()}
          </div>
          <div className="note-item-body-section">{this.props.note.body}</div>
        </div>
      </div>
    );
  }
}

export default NoteIndexItem;
