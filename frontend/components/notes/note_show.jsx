import React from "react";

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dummy;
    if (this.props.match.params.noteId)
      this.props
        .fetchNote(this.props.match.params.noteId)
        .then(note => (dummy = note), err => this.props.history.push("/notes"));
  }

  componentWillReceiveProps(nextProps) {
    let dummy;
    if (nextProps.match.params.noteId) {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        nextProps
          .fetchNote(nextProps.match.params.noteId)
          .then(
            note => (dummy = note),
            err => this.props.history.push("/notes")
          );
      }
    }
  }

  render() {
    return (
      <div className="note-show-container">
        <div className="note-opts-container">
          <div className="note-opts">note options filler</div>
        </div>
        <div className="style-bar-container">
          <div className="style-bar">text style edit bar filler</div>
        </div>
        <div className="note-container">
          <div className="note">
            <div className="note-title">
              {this.props.currNote ? this.props.currNote.title : ""}
            </div>
            <div className="note-body">
              {this.props.currNote ? this.props.currNote.body : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteShow;
