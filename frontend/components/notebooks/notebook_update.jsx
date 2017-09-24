import React from "react";
import {
  updateNotebook,
  deleteNotebook
} from "../../util/notebooks_api_util.js";

class NotebookUpdate extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleCreate = this.handleCreate.bind(this);
    // this.clickEnterListener = this.clickEnterListener.bind(this);
  }

  componentWillMount() {
    this.setState({ notebook: this.props.notebook });
  }

  // handleChange(e) {
  //   this.setState({ notebookTitle: e.target.value });
  // }
  //
  // handleCreate(e) {
  //   this.props.createNotebook({ title: this.state.notebookTitle });
  //   this.props.closeModal();
  // }
  //
  // clickEnterListener(e) {
  //   if (e.key === "Enter") {
  //     this.props.createNotebook({ title: this.state.notebookTitle });
  //     this.props.closeModal();
  //   }
  // }

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
                <input className="edit-form" value={""} />
                <div classname="edit-type">TITLE</div>
              </div>
              <div className="nb-desc">
                <div className="desc-title">CREATOR:</div>
                <div className="desc-content">
                  New notes are saved here unless you create them in another
                  notebook
                </div>
              </div>
              <div className="delete-link-container">
                <a className="deleteLink">Delete notebook</a>
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
              <button className="nb-update-cancel-btn">Cancel</button>
              <button className="nb-save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookUpdate;
