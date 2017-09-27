import React from "react";

class NoteFormTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTagName: ""
    };

    this.handleAddTagChange = this.handleAddTagChange.bind(this);
  }

  handleAddTagChange(e) {
    this.setState({ newTagName: e.target.value });
  }

  render() {
    const noteTags = this.props.noteTags ? this.props.noteTags : [];
    return (
      <div className="note-form-tags-container">
        <div className="fa fa-tag" />
        <div className="note-form-tags">
          {noteTags.map(tag => {
            return (
              <div className="note-form-tag-container">
                <div className="note-form-tag">{tag.name}</div>
              </div>
            );
          })}
        </div>
        <input
          className="add-note-tag"
          onChange={this.handleAddTagChange}
          value={this.state.newTagName}
          placeholder="+"
        />
      </div>
    );
  }
}

export default NoteFormTags;
