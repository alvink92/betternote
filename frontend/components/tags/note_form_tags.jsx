import React from "react";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default NoteIndex;
