import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSaveChange = this.handleSaveChange.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
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

  handleUpdate(e) {
    this.setState({ tagName: e.target.value });
  }

  handleSaveChange(e) {
    this.props.updateTag({ id: this.props.tag.id, name: this.state.tagName });
    this.setState({ editable: false });
  }

  clickEnterListener(e) {
    if (e.key === "Enter") {
      this.props.updateTag({ id: this.props.tag.id, name: this.state.tagName });
      this.setState({ editable: false });
    }
  }

  hiddenModButtons() {
    return this.state.editable ? (
      <div className="mod-btn-container hidden" />
    ) : (
      <div className="mod-btn-container hidden">
        <div className="tag-edit" onClick={this.handleUpdateClick}>
          <i className="fa fa-pencil" aria-hidden="true" />
        </div>
        <div className="tag-delete" onClick={this.handleDeleteClick}>
          <i className="fa fa-trash-o trash" aria-hidden="true" />
        </div>
      </div>
    );
  }

  tagSwitch() {
    if (this.state.editable) {
      return (
        <div className="editable">
          <input
            className="edit-form"
            value={this.state.tagName}
            onChange={this.handleUpdate}
            onKeyPress={this.clickEnterListener}
          />
          <div className="save-changes" onClick={this.handleSaveChange}>
            <i className="fa fa-check-circle" aria-hidden="true" />
          </div>
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
        <div className="tag-opts-wrap">
          {this.tagSwitch()}
          {this.hiddenModButtons()}
        </div>
      </div>
    );
  }
}

export default TagIndexItem;
