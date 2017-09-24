import React from "react";
import {
  updateNotebook,
  deleteNotebook
} from "../../util/notebooks_api_util.js";

class NotebookUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: this.props.notebook.id,
      title: this.props.notebook.title
    });
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  //

  handleDelete(e) {
    deleteNotebook(this.state.id);
    this.props.history.push("/notes");
    this.props.closeModal();
  }
  handleUpdate(e) {
    this.props.updateNotebookState(this.state);
    updateNotebook(this.state).then(this.props.closeModal());
  }
  //
  clickEnterListener(e) {
    if (e.key === "Enter") {
      updateNotebook(this.state);
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="notebook-update-container">
        <div className="notebook-update-wrapper">
          <div className="header-container-wrapper">
            <div className="header-container">
              <div className="info-icon-wrap">
                <div className="info-icon">i</div>
              </div>
              <div className="info-title">NOTEBOOK INFO</div>
            </div>
          </div>
          <div className="nb-content-container">
            <div className="overview-container">
              <div className="overview">Overview</div>
              <div className="edit-form-wrapper">
                <input
                  className="edit-form"
                  value={this.state.title}
                  onChange={this.handleChange}
                  onKeyPress={this.clickEnterListener}
                />
              </div>
              <div className="nb-desc">
                <div className="desc-title">CREATOR:</div>
                <div className="desc-content">
                  New notes are saved here unless you create them in another
                  notebook
                </div>
              </div>
              <div className="delete-link-container">
                <a className="deleteLink" onClick={this.handleDelete}>
                  Delete notebook
                </a>
              </div>
            </div>
            <div className="share-settings-container">
              <div className="share-settings-title">Share settings</div>
              <div className="share-setting-status">
                <div className="share-status-title">SHARING: </div>
                <div className="share-setting-status-desc">Not shared</div>
              </div>
            </div>

            <div className="nb-update-btn-container">
              <button
                className="nb-update-cancel-btn"
                onClick={this.handleDelete}
              >
                Cancel
              </button>
              <button className="nb-save-btn" onClick={this.handleUpdate}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookUpdate;
