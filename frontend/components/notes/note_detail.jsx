import React from "react";

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-detail-container">
        <div className="note-detail-wrapper">
          <div className="header-container-wrapper">
            <div className="header-container">
              <div className="info-icon-wrap">
                <div className="info-icon">i</div>
              </div>
              <div className="info-title">NOTE INFO</div>
            </div>
          </div>
          <div className="note-title">{this.props.note.title}</div>
          <div className="note-content-container">
            <div className="overview-container">
              <div className="overview">Overview</div>
              <div className="created-at">
                <div className="created-at-key">CREATED: </div>
                <div className="created-at-val">
                  {this.props.note.created_at}
                </div>
              </div>
              <div className="updated-at">
                <div className="updated-at-key">UPDATED: </div>
                <div className="updated-at-val">
                  {this.props.note.updated_at}
                </div>
              </div>
              <div className="author-username">
                <div className="author-key">AUTHOR: </div>
                <div className="author-val">{this.props.note.username}</div>
              </div>
            </div>
            <div className="share-settings-container">
              <div className="share-settings-title">Share settings</div>
              <div className="share-setting-status">
                <div className="share-status-title">SHARING: </div>
                <div className="share-setting-status-desc">Not shared</div>
              </div>
            </div>

            <div className="note-detail-btn-container">
              <button
                className="note-detail-cancel-btn"
                onClick={this.props.closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteDetail;
