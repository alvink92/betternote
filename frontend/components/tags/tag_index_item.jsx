import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  componentWillMount() {
    this.setState({ editable: false, tagName: this.props.tag.name });
  }

  handleClick(e) {
    if (
      e.target.className === "tag-item" ||
      e.target.className === "tag-name" ||
      e.target.className === "tag-count"
    ) {
      this.props.history.push(`/tags/${this.props.tag.id}`);
    }
  }

  handleUpdateClick(e) {
    this.setState({ editable: true });
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deleteTag(this.props.tag.id);
  }

  hiddenModButtons() {
    return (
      <div className="mod-btn-container hidden">
        <div className="tag-edit" onClick={this.handleUpdateClick}>
          <i className="fa fa-pencil" aria-hidden="true" />
        </div>
        <div className="tag-delete" onClick={this.handleDeleteClick}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </div>
      </div>
    );
  }

  tagSwitch() {
    if (this.state.editable) {
      return (
        <div className="editable">
          <input />
        </div>
      );
    } else {
      return (
        <span className="tag-item">
          <div className="tag-name">{this.state.tagName}</div>
          <div className="tag-count">{this.props.tag.noteIds.length}</div>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="tag-item-container" onClick={this.handleClick}>
        {this.tagSwitch()}
        <div className="hack hidden" />
        {this.hiddenModButtons()}
      </div>
    );
  }
}

export default TagIndexItem;
