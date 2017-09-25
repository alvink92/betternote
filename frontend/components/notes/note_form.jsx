import React from "react";
import ReactQuill from "react-quill"; // ES6

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

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    const note = this.props.note ? this.props.note : { title: "", body: "" };
    this.state = { note: note }; // You can also pass a Quill Delta here
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let newNote = newProps.note ? newProps.note : { title: "", body: "" };
    this.setState({ note: newNote });
  }

  handleBodyChange(value) {
    const updatedNote = Object.assign(this.state.note, { body: value });
    this.setState({ note: updatedNote });
  }

  handleTitleChange(e) {
    const updatedNote = Object.assign(this.state.note, {
      title: e.target.value
    });
    this.setState({ note: updatedNote });
  }

  render() {
    return (
      <div className="note-content-container">
        <input
          className="note-title"
          value={this.state.note.title}
          onChange={this.handleTitleChange}
          placeholder="Title your note"
        />
        <ReactQuill
          modules={modules}
          value={this.state.note.body}
          onChange={this.handleBodyChange}
        />
      </div>
    );
  }
}

export default NoteForm;
