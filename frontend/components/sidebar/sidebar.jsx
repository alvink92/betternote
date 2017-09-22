import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <img
            className="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABfUlEQVR42u2X4W2DMBCFs0JX6ApdgRVYoSu0f1pTsJSskBW6gldgha7ACinPQHIxwfjsw0qrWDoJIhR/+O7eO3a7x/rPa/++f1KqOVSqMX2c+usW1/hNKfWcDaT+qF/6TYuqar4Bcjv0D4BzwXTYbBnmDHX8+mzeaOBFxE5vgsFmuF8HWg78D1IrAiMBNAVOLQoGNTEWr42wlAWFYQMh50PuL4E3EwI6xbR2K7V5MpBS9euWMAiWPEimxtNxBQNIl3cFZBX5noCk9AaNMSp1O9ciXTKBrAYlAg12cUu/2OLoN9FwAZwmgWSgrTuNDcQtbK6QRvkZNdbA9GwLhNkmdKzgppjd9qQ71t+8b4DgZ1OAqPPbE7CdN5cDeJ9jzMWoP4cl+RAddadNAUJhPM92SW4fu8Y6OmuPpxbN5jCu+NEumhe8PuYA6qh/Ua9ygdbSLLJ8+jIHyvBBSRX7eg7XpVPUJktBh6p6lnQxzDjP6Vx9HAxji3Ejyrse66+sX/zBMgpBp4lhAAAAAElFTkSuQmCC"
            alt="Betternote logo"
          />
        </div>
        <div className="btnGrp btnGrp1">
          <div>
            <i className="fa fa-plus" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="btnGrp btnGrp2">
          <div>
            <i className="fa fa-star" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-sticky-note" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-book" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-tag" aria-hidden="true" />
          </div>
        </div>
        <button className="app-logout" onClick={this.props.logout}>
          <i className="fa fa-sign-out" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default Sidebar;
