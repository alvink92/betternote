import React from "react";
import { getTag } from "../../util/tags_api_util";

class TagNotesIndexHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: { name: "", noteIds: [] } };
  }

  componentWillMount() {
    getTag(this.props.tagId).then(tag => this.setState({ tag: tag }));
    console.log(this.state);
  }

  render() {
    return (
      <div className="tag-note-index-header-container">
        <div className="title-container">
          <div className="title">
            {"TAG: " + this.state.tag.name.toUpperCase()}
          </div>
        </div>
        <div className="notes-count">{this.state.tag.noteIds.length} notes</div>
      </div>
    );
  }
}

export default TagNotesIndexHeader;
