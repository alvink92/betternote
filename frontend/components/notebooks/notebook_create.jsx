import React from "react";

class NotebookCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
  }

  componentWillMount() {
    this.setState({ notebookTitle: "" });
  }

  handleChange(e) {
    this.setState({ notebookTitle: e.target.value });
  }

  handleCreate(e) {
    this.props.createNotebook({ title: this.state.notebookTitle });
    this.props.closeModal();
  }

  clickEnterListener(e) {
    if (e.key === "Enter") {
      this.props.createNotebook({ title: this.state.notebookTitle });
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="create-container">
        <div className="notebook-create-form-container">
          <div className="header">
            <div className="create-type-icon">
              <i className="fa fa-book" aria-hidden="true" />
            </div>
            <div className="create-title">CREATE NOTEBOOK</div>
          </div>
          <input
            className="create-type-input"
            value={this.state.notebookTitle}
            onChange={this.handleChange}
            onKeyPress={this.clickEnterListener}
            placeholder="Title your notebook"
          />
          <div className="action-btn-container">
            <button className="cancel-btn" onClick={this.props.closeModal}>
              cancel
            </button>
            {this.state.notebookTitle.length === 0 ? (
              <button className="invalid-submit">Create notebook</button>
            ) : (
              <button className="submit-btn" onClick={this.handleCreate}>
                Create notebook
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookCreate;
