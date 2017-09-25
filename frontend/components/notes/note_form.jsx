import React from "react";
import ReactQuill from "react-quill"; // ES6

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    const note = this.props.note ? this.props.note : { title: "", body: "" };
    this.state = { note: note }; // You can also pass a Quill Delta here
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ note: newProps.note });
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
        />
        <ReactQuill
          value={this.state.note.body}
          onChange={this.handleBodyChange}
        />
      </div>
    );
  }
}

export default NoteForm;
