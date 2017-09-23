import React from "react";
import { NavLink, Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  logoContainer() {
    return (
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABfUlEQVR42u2X4W2DMBCFs0JX6ApdgRVYoSu0f1pTsJSskBW6gldgha7ACinPQHIxwfjsw0qrWDoJIhR/+O7eO3a7x/rPa/++f1KqOVSqMX2c+usW1/hNKfWcDaT+qF/6TYuqar4Bcjv0D4BzwXTYbBnmDHX8+mzeaOBFxE5vgsFmuF8HWg78D1IrAiMBNAVOLQoGNTEWr42wlAWFYQMh50PuL4E3EwI6xbR2K7V5MpBS9euWMAiWPEimxtNxBQNIl3cFZBX5noCk9AaNMSp1O9ciXTKBrAYlAg12cUu/2OLoN9FwAZwmgWSgrTuNDcQtbK6QRvkZNdbA9GwLhNkmdKzgppjd9qQ71t+8b4DgZ1OAqPPbE7CdN5cDeJ9jzMWoP4cl+RAddadNAUJhPM92SW4fu8Y6OmuPpxbN5jCu+NEumhe8PuYA6qh/Ua9ygdbSLLJ8+jIHyvBBSRX7eg7XpVPUJktBh6p6lnQxzDjP6Vx9HAxji3Ejyrse66+sX/zBMgpBp4lhAAAAAElFTkSuQmCC"
          alt="Betternote logo"
        />
      </div>
    );
  }

  btnGrp1() {
    return (
      <div className="btnGrp btnGrp1">
        <div className="grp1-btn-cont">
          <div className="grp1-btn">
            <div>
              <div className="fa my-plus">+</div>
            </div>
          </div>
        </div>
        <div className="grp1-btn-cont">
          <div className="grp1-btn">
            <div>
              <i className="fa fa-search" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  btnGrp2() {
    return (
      <div className="btnGrp btnGrp2">
        <div className="filter-link-cont">
          <NavLink to="/notes" className="filter-link">
            <div className="filter-btn-cont">
              <i className="fa fa-file-text" aria-hidden="true" />
            </div>
          </NavLink>
        </div>
        <div className="filter-link-cont">
          <NavLink to="/notebooks" className="filter-link">
            <div className="filter-btn-cont">
              <i className="fa fa-book" aria-hidden="true" />
            </div>
          </NavLink>
        </div>
        <div className="filter-link-cont">
          <NavLink to="/tags" className="filter-link">
            <div className="filter-btn-cont">
              <i className="fa fa-tag" aria-hidden="true" />
            </div>
          </NavLink>
        </div>
      </div>
    );
  }

  logoutSection() {
    return (
      <button className="app-logout" onClick={this.props.logout}>
        <i className="fa fa-sign-out" aria-hidden="true" />
      </button>
    );
  }

  render() {
    return (
      <div className="sidebar">
        {this.logoContainer()}
        {this.btnGrp1()}
        {this.btnGrp2()}
        {this.logoutSection()}
      </div>
    );
  }
}

export default Sidebar;
