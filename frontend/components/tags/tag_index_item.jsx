import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (e.target.className !== "") {
      this.props.history.push(`/tags/${this.props.tag.id}`);
    }
  }

  render() {
    return (
      <div className="tag-name-container" onClick={this.handleClick}>
        {this.props.tag.name}
      </div>
    );
  }
}

export default TagIndexItem;
