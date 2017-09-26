import React from "react";
import ReactQuill from "react-quill";
import merge from "lodash/merge";

// make a method to save change for both new and update

const emptyNote = { title: "", body: "", notebook: {}, taggings: [] };

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      expanded: this.props.isUpdateForm ? false : true,
      notebookId: this.props.note.notebook.id
        ? this.props.note.notebook.id
        : null
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.expandNote = this.expandNote.bind(this);
    this.collapseNote = this.collapseNote.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
    if (this.state.expanded) {
      this.expandNote();
    } else {
      this.collapseNote();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isUpdateForm) {
      this.setState({ note: emptyNote });
      this.expandNote();
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

  expandNote() {
    this.setState({ expanded: true });

    const sideBar = document.getElementsByClassName("sidebar")[0];
    const notesIndexContainer = document.getElementsByClassName(
      "note-index-container"
    )[0];
    const noteShowContainer = document.getElementsByClassName(
      "note-content"
    )[0];
    const noteAssocsContainer = document.getElementsByClassName(
      "note-assocs-container"
    )[0];

    sideBar.classList.add("move-side-bar-left");
    notesIndexContainer.classList.add("move-note-index-container-left");
    noteShowContainer.classList.add("move-note-content-left");
    noteAssocsContainer.classList.add("move-note-assocs-container-left");

    sideBar.classList.remove("move-side-bar-right");
    notesIndexContainer.classList.remove("move-note-index-container-right");
    noteShowContainer.classList.remove("move-note-content-right");
    noteAssocsContainer.classList.remove("move-note-assocs-container-right");
  }

  collapseNote() {
    this.setState({ expanded: false });

    const sideBar = document.getElementsByClassName("sidebar")[0];
    const notesIndexContainer = document.getElementsByClassName(
      "note-index-container"
    )[0];
    const noteShowContainer = document.getElementsByClassName(
      "note-content"
    )[0];
    const noteAssocsContainer = document.getElementsByClassName(
      "note-assocs-container"
    )[0];

    sideBar.classList.add("move-side-bar-right");
    notesIndexContainer.classList.add("move-note-index-container-right");
    noteShowContainer.classList.add("move-note-content-right");
    noteAssocsContainer.classList.add("move-note-assocs-container-right");

    sideBar.classList.remove("move-side-bar-left");
    notesIndexContainer.classList.remove("move-note-index-container-left");
    noteShowContainer.classList.remove("move-note-content-left");
    noteAssocsContainer.classList.remove("move-note-assocs-container-left");
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

  handleDoneClick(e) {
    const saveNote = merge({}, this.state.note);
    saveNote.notebook_id = this.state.notebookId;
    console.log("savenote", saveNote);
    if (this.props.isUpdateForm) {
      this.props.noteAction(saveNote);
    } else {
      this.props
        .noteAction(saveNote)
        .then(note =>
          this.props.history.push(
            `/notebooks/${note.notebookId}/notes/${note.id}`
          )
        );
    }
    this.collapseNote();
  }

  switchDoneCancelBtn() {
    if (
      !this.props.isUpdateForm &&
      (this.state.note.title.length === 0 || this.state.note.body.length === 0)
    ) {
      return (
        <button className="note-new-cancel-btn" onClick={this.collapseNote}>
          Cancel
        </button>
      );
    } else {
      return (
        <button className={`note-edit-done-btn`} onClick={this.handleDoneClick}>
          Done
        </button>
      );
    }
  }

  switchExpandCollapseBtn() {
    if (this.state.expanded) {
      return this.switchDoneCancelBtn();
    } else {
      return (
        <button className="note-expand-btn" onClick={this.expandNote}>
          <i className="fa fa-expand" aria-hidden="true" />
        </button>
      );
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
