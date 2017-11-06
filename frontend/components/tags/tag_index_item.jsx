import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.editableId = this.editableId.bind(this);
    this.saveChangeId = this.saveChangeId.bind(this);
    this.tagWidth = this.tagWidth.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSaveChange = this.handleSaveChange.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
  }

  componentWillMount() {
    this.setState({
      editable: false,
      tagName: this.props.tag.name
    });
  }

  tagWidth() {
    return (
      (this.state.tagName.length +
        parseInt(this.props.tag.noteIds.length / 10) +
        1) *
        10 +
      20
    );
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

    let editableInput = $(`#${this.editableId()}`);
    editableInput.focus();
    editableInput.val(this.state.tagName + " ");
    editableInput.val(this.state.tagName);

    setTimeout(() => {
      document
        .getElementById(this.editableId())
        .classList.add("edit-form-expand");
    }, 0);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deleteTag(this.props.tag.id);
  }

  handleUpdate(e) {
    this.setState({ tagName: e.target.value });
  }

  handleSaveChange(e) {
    if (this.props.tag.name !== this.state.tagName)
      this.props.updateTag({ id: this.props.tag.id, name: this.state.tagName });

    document
      .getElementById(this.editableId())
      .classList.remove("edit-form-expand");
    document.getElementById(this.saveChangeId()).outerHTML = "";

    setTimeout(() => {
      this.setState({ editable: false });
    }, 250);
  }

  clickEnterListener(e) {
    if (e.key === "Enter") {
      this.handleSaveChange(e);
    }
  }

  hiddenModButtons() {
    return this.state.editable ? (
      <div className="mod-btn-container hidden" />
    ) : (
      <div className="mod-btn-container hidden">
        <div className="tag-edit tag-pencil" onClick={this.handleUpdateClick} />
        <div
          className="tag-delete tag-trash"
          onClick={this.handleDeleteClick}
        />
      </div>
    );
  }

  editableId() {
    return "editable-" + this.state.tagName;
  }

  saveChangeId() {
    return "save-" + this.state.tagName;
  }

  tagSwitch() {
    if (this.state.editable) {
      return (
        <div className="editable">
          <input
            id={this.editableId()}
            className="edit-form"
            value={this.state.tagName}
            onChange={this.handleUpdate}
            onKeyPress={this.clickEnterListener}
            style={{ width: `${this.tagWidth()}px` }}
          />
          <div
            id={this.saveChangeId()}
            className="save-changes"
            onClick={this.handleSaveChange}
          >
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
