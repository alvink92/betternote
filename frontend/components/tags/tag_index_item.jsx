import React from "react";

const TagIndexItem = props => {
  return (
    <div
      className="tag-item-container-wrapper"
      onClick={() => props.history.push(`/tags/${props.tag.id}`)}
    >
      tag index item
    </div>
  );
};

export default TagIndexItem;
