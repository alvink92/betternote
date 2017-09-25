import React from "react";
import ReactQuill from "react-quill";

const emptyNote = { title: "", body: "", notebook: {}, taggings: [] };

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.isUpdateForm) {
      this.setState({ note: emptyNote });
      return;
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (!newProps.isUpdateForm) {
      this.setState({ note: emptyNote });
      return;
    }

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
              value={this.state.note.title}
              onChange={this.handleTitleChange}
              placeholder="Title your note"
              onClick={this.hideToolbar}
            />
            <ReactQuill
              modules={modules}
              value={this.state.note.body}
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
