import React from "react";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.match.notebookId) {
    } else if (this.props.match.tagId) {
    } else {
      this.props
        .fetchNote(this.props.noteId)
        .then(this.props.history.push(`/notes/${this.props.noteId}`));
    }
  }

  render() {
    return (
      <div className="note-index-item-container" onClick={this.handleClick}>
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
