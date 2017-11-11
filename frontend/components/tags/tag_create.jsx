import React from "react";

class TagCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.clickEnterListener = this.clickEnterListener.bind(this);
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

  clickEnterListener(e) {
    if (e.key === "Enter") {
      this.props.createTag({ name: this.state.tagName });
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="create-container">
        <div className="tag-create-form-container">
          <div className="header">
            <div className="create-type-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAABxUlEQVR42u2Yv0vDQBTHK0VBF3HopC46CS7iZJ1EEN0c/AfcXFwddFJw1yJCQN1Cfk9BRQoObm4OTp0EFRGkKCqIFc/vkxcooc21SdsIXuDR9N378cm7ewd3mYx61CN/hBBdlmWtO45ThjxB1kj3J+Bs2+5xXdcClKgW6A4wlk0brh8g5wz1jCrO4HcO8sKQx77v96UFNwiAK4a7NU1zPBiDfgK6Bx67hG2uo3CAGUPiGwa4NgxjOGwDyBGMldimBJ/RjsBhGqe5ESjxha7rAxFVzlEF2fYR/yfbDbeIRO+8vlwk7JX50BqE/QlDvsJnvl1wK0jwxXB7zXSopmnd8DtiyE/Ickv3OABtcvBvgG3U2Wp2eR+8o3fSheN4nrcdFSdOp2aR7FD25QwnQlKoZQv9atVM7CfaKxFgh5O9QRbq2XHlBDdQnn3KER++hPEPskNVt2ID0qIOEkvs7hkqj+RTMkD2mQ02+CSAv9PVQKUbnuI48RMHoIYgIJ5qkkK4SVIFTC2+AlSACjBGgBr7XVOiANUaVE2imkStwX8GWKEA7bi6oKsTBqwkATxN2hQywXGhmPSCqBhUssVCx9gznOqGohh+AHVNwBrP2DQGAAAAAElFTkSuQmCC" width="40" height="36" class="gwt-Image"/>
            </div>
            <div>CREATE TAG</div>
          </div>
          <input
            className="create-type-input"
            value={this.state.tagName}
            onChange={this.handleChange}
            onKeyPress={this.clickEnterListener}
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
