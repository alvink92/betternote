import React from "react";
import ReactQuill from "react-quill";
import merge from "lodash/merge";

const emptyNote = { title: "", body: "", notebook: {}, taggings: [] };

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      expanded: this.props.isUpdateForm ? false : true
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    if (!newProps.isUpdateForm) {
      this.setState({ note: emptyNote });
      return;
    }

    const nextNote = merge({}, newProps.note);
    if (
      this.props.match.url !== newProps.match.url &&
      !this.props.match.url.includes("note/new")
    ) {
      this.props.noteAction(this.state.note);
    }
    this.setState({ note: newProps.note });
  }

  componentWillUnmount() {
    if (!this.props.match.url.includes("note/new")) {
      this.props.noteAction(this.state.note);
    }
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

  switchDoneCancelBtn() {
    if (this.props.isUpdateForm) {
      return <button className="note-edit-done-btn">done</button>;
    } else {
      return <button className="note-new-cancel-btn">cancel</button>;
    }
  }

  switchExpandCollapseBtn() {
    if (this.state.expanded) {
      return this.switchDoneCancelBtn();
    } else {
      return <button className="note-expand-btn">expand</button>;
    }
  }

  noteOpts() {
    return (
      <div className="note-opts-container">
        <div className="note-assocs-container">notes, tags</div>
        <div className="note-expand-collapse-btn-container">
          {this.switchExpandCollapseBtn()}
        </div>
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
