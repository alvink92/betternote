import React from "react";
import ReactQuill from "react-quill";
import merge from "lodash/merge";
import Modal from "react-modal";
import NotebookUpdate from "../notebooks/notebook_update";

// make a method to save change for both new and update

const emptyNote = { title: "", body: "", notebook: {}, taggings: [] };

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      expanded: this.props.isUpdateForm ? false : true
      // selectedNotebookId: null
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.expandNote = this.expandNote.bind(this);
    this.collapseNote = this.collapseNote.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
    this.handleSelectNotebookClick = this.handleSelectNotebookClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks().then(notebooks => {
      if (!this.state.selectedNotebookId) {
        this.state.selectedNotebookId = Object.keys(this.props.notebooks)[0];
      }
    });
    this.props.fetchTags();
    if (this.state.expanded) {
      this.expandNote();
    } else {
      this.collapseNote();
    }
  }

  componentWillReceiveProps(newProps) {
    const nextNote = merge({}, newProps.note);

    // saves previous note to db if user clicks out
    if (
      this.props.match.url !== newProps.match.url &&
      !this.props.match.url.includes("note/new")
    ) {
      this.props.noteAction(this.state.note);
    }
    // continues to new url
    this.setState({
      note: newProps.note,
      selectedNotebookId: newProps.note.notebook.id
    });
  }

  componentWillUnmount() {
    // if component unmounts, then saves current note to db
    if (!this.props.match.url.includes("/note/new")) {
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
    const noteOptsContainer = document.getElementsByClassName(
      "note-opts-wrap"
    )[0];

    sideBar.classList.add("move-side-bar-left");
    notesIndexContainer.classList.add("move-note-index-container-left");
    noteShowContainer.classList.add("move-note-content-left");
    noteAssocsContainer.classList.add("move-note-assocs-container-left");
    noteOptsContainer.classList.add("move-note-opts-wrap-left");

    sideBar.classList.remove("move-side-bar-right");
    notesIndexContainer.classList.remove("move-note-index-container-right");
    noteShowContainer.classList.remove("move-note-content-right");
    noteAssocsContainer.classList.remove("move-note-assocs-container-right");
    noteOptsContainer.classList.remove("move-note-opts-wrap-right");
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
    const noteOptsContainer = document.getElementsByClassName(
      "note-opts-wrap"
    )[0];

    sideBar.classList.add("move-side-bar-right");
    notesIndexContainer.classList.add("move-note-index-container-right");
    noteShowContainer.classList.add("move-note-content-right");
    noteAssocsContainer.classList.add("move-note-assocs-container-right");
    noteOptsContainer.classList.add("move-note-opts-wrap-right");

    sideBar.classList.remove("move-side-bar-left");
    notesIndexContainer.classList.remove("move-note-index-container-left");
    noteShowContainer.classList.remove("move-note-content-left");
    noteAssocsContainer.classList.remove("move-note-assocs-container-left");
    noteOptsContainer.classList.remove("move-note-opts-wrap-left");
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

    if (this.props.isUpdateForm) {
      this.props.noteAction(saveNote);
    } else {
      this.props.noteAction(saveNote);
      // this.props.history.push(`/notebooks/${saveNote.notebookId}/notes`)
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
        <div className="note-opts-wrap">note opts</div>
        <div className="note-expand-collapse-btn-container">
          {this.switchExpandCollapseBtn()}
        </div>
      </div>
    );
  }

  noteAssocs() {
    return (
      <div className="note-assocs-container">
        <button className="curr-notebook">
          <div className="fa fa-book" aria-hidden="true" />
          <div className="notebook-title">
            {this.state.note.notebook.id ? this.state.note.notebook.title : ""}
          </div>
          <i className="fa fa-angle-down" aria-hidden="true" />
        </button>
        <div className="note-list-wrap">{this.notesList()}</div>
        <div className="tag-list-wrap">
          <ul className="tag-list">tags</ul>
        </div>
      </div>
    );
  }

  handleSelectNotebookClick(notebookId) {
    const newNotebook = this.props.notebooks[notebookId];
    const currNote = this.state.note;
    currNote.notebook = newNotebook ? newNotebook : {};
    this.setState({ note: currNote });
  }

  notesList() {
    return (
      <div className="note-list">
        <div className="create-new-notebook notebook-title-container">
          <div className="notebook-title-wrapper">
            <div className="notebook-title">
              <div>Create new notebook</div>
            </div>
          </div>
        </div>
        {Object.values(this.props.notebooks).map(notebook => (
          <div
            key={notebook.id}
            onClick={() => this.handleSelectNotebookClick(notebook.id)}
            className={`notebook-title-container${this.state.note.notebook.id
              ? this.state.note.notebook.id === notebook.id ? " active" : ""
              : ""}`}
          >
            <div className="notebook-title-wrapper">
              <div className="notebook-title">{notebook.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="note-container">
        <div className="note-opts-assocs-wrapper">
          {this.noteOpts()}
          {this.noteAssocs()}
        </div>
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
