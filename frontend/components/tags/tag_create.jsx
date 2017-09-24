import React from "react";

class TagCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentWillMount() {
    this.setState({ tagName: "" });
  }

  handleChange(e) {
    this.setState({ tagName: e.target.value });
  }

  handleCreate(e) {
    this.props.createTag({ name: this.state.tagName });
    this.props.closeModal();
  }

  render() {
    return (
      <div className="create-container">
        <div className="tag-create-form-container">
          <div className="header">
            <div className="create-type-icon">
              <i className="fa fa-tag" aria-hidden="true" />
            </div>
            <div>CREATE TAG</div>
          </div>
          <input
            className="create-type-input"
            value={this.state.tagName}
            onChange={this.handleChange}
            placeholder="Name your tag"
          />
          <div className="action-btn-container">
            <button className="cancel-btn" onClick={this.props.closeModal}>
              cancel
            </button>
            {this.state.tagName.length === 0 ? (
              <button className="invalid-submit">Create tag</button>
            ) : (
              <button className="submit-btn" onClick={this.handleCreate}>
                Create tag
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TagCreate;
