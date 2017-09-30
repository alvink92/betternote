import React from "react";

class NoteFormTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTagName: ""
    };

    this.handleAddTagChange = this.handleAddTagChange.bind(this);
    this.pressEnterListener = this.pressEnterListener.bind(this);
  }

  handleAddTagChange(e) {
    this.setState({ newTagName: e.target.value });
  }

  pressEnterListener(e) {
    if (e.key === "Enter") {
      const tag = { name: this.state.newTagName };
      this.props.addTagDispatch(tag);

      this.setState({ newTagName: "" });
    }
  }

  render() {
    const noteTags = this.props.noteTags ? this.props.noteTags : [];
    return (
      <div className="note-form-tags-container">
        <img
          className="bnicon bn-tag-small"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAAiElEQVR42mNgQAP79++XOXLkyGkgvgxkKzDgA0BF2kD8CIj/Q/Gzo0ePGmBVfPDgQTuggvdIisEYqOEDkHZFUXzo0KEQoOAPqKJ/QNwNxF1QNkjs5+HDhyORnfIVydTzMHGg6WeRxL8ha0B2xneQjVBbvyPL4dKAE1OuAU9wDwUbjhGh4RhILQAqjUwqv0PysAAAAABJRU5ErkJggg=="
        />
        <div className="note-form-tags">
          {noteTags.map(tag => {
            return (
              <div key={tag.name} className="note-form-tag-container">
                <div className="note-form-tag">{tag.name}</div>
                <div
                  className="note-form-tag-delete"
                  onClick={() => this.props.removeTagDispatch(tag)}
                >
                  x
                </div>
              </div>
            );
          })}
        </div>
        <input
          className="add-note-tag"
          onChange={this.handleAddTagChange}
          onKeyPress={this.pressEnterListener}
          value={this.state.newTagName}
          placeholder="+"
        />
      </div>
    );
  }
}

export default NoteFormTags;
