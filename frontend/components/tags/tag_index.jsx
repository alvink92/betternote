import React from "react";
import TagIndexItem from "./tag_index_item";

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  tagIndexItems() {
    if (this.props.tags) {
      return Object.values(this.props.tags).map(tag => (
        <TagIndexItem
          key={tag.id}
          tag={tag}
          updateTag={this.props.updateTag}
          deleteTag={this.props.deleteTag}
        />
      ));
    }
  }

  render() {
    return (
      <div className="tag-index-container">
        <div className="tag-index">{this.tagIndexItems()}</div>
      </div>
    );
  }
}

export default TagIndex;
