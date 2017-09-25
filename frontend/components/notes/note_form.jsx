import React from "react";
import ReactQuill from "react-quill";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    const note = this.props.note ? this.props.note : { title: "", body: "" };
    this.state = {
      currNote: note,
      savedNote: note,
      autoSave: this.props.autoSave
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let newNote = newProps.note ? newProps.note : { title: "", body: "" };
    this.setState({ savedNote: newNote, currNote: newNote });
  }

  handleBodyChange(value) {
    const updatedNote = Object.assign(this.state.currNote, { body: value });
    this.setState({ currNote: updatedNote });
  }

  handleTitleChange(e) {
    const updatedNote = Object.assign(this.state.currNote, {
      title: e.target.value
    });
    this.setState({ currNote: updatedNote });
  }

  noteOpts() {
    return (
      <div className="note-opts-container">
        <div className="note-opts">notes, tags</div>
      </div>
    );
  }

  render() {
    return (
      <div className="note-container">
        {this.noteOpts()}
        <div className="note-content-container">
          <div className="note-content">
            <input
              className="note-title"
              value={this.state.currNote.title}
              onChange={this.handleTitleChange}
              placeholder="Title your note"
              onClick={this.hideToolbar}
            />
            <ReactQuill
              modules={modules}
              value={this.state.currNote.body}
              onChange={this.handleBodyChange}
              onClick={this.showToolbar}
            />
          </div>
        </div>
      </div>
    );
  }
}

const toolBarOpts = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  ["clean"], // remove formatting button

  ["link", "image", "video", "formula"] // misc
];

const modules = {
  toolbar: toolBarOpts
};

export default NoteForm;
