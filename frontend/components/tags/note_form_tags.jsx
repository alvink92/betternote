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
        <div className="fa fa-tag" />
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
