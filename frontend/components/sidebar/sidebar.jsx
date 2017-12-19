import React from "react";
import { NavLink, Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.showNbsPane = this.showNbsPane.bind(this);
    this.showTagsPane = this.showTagsPane.bind(this);
    this.hideNbsPane = this.hideNbsPane.bind(this);
    this.hideTagsPane = this.hideTagsPane.bind(this);
    this.hideAllPanes = this.hideAllPanes.bind(this);
  }

  componentDidMount() {
    if (this.props.match.url === "/notebooks") {
      this.showNbsPane();
    } else if (this.props.match.url === "/tags") {
      this.showTagsPane();
    } else {
      this.hideAllPanes();
    }


    // FOR DEMO USER
    let demoProps = this.props;
    if (this.props.currentUser.username === "demo") {
      (function() {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 1000);
        });
      })()
        .then(() => {
          return new Promise((resolve, reject) => {
            demoProps.history.push("/notebooks");
            setTimeout(() => resolve(), 1000);
          });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            demoProps.history.push("/tags");
            setTimeout(() => resolve(), 1000);
          });
        })
        .then(() => {
          demoProps.history.push("/notes");
        });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.url === "/notebooks") {
      this.showNbsPane();
    } else if (newProps.match.url === "/tags") {
      this.showTagsPane();
    } else {
      this.hideAllPanes();
    }

    const oldUrl = this.props.match.url;
    const newUrl = newProps.match.url;
    if (oldUrl === "/notebooks" && newUrl === "/notebooks") {
      this.props.history.push("/notes");
    } else if (oldUrl === "/tags" && newUrl === "/tags") {
      this.props.history.push("/notes");
    }
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

  slidePanelInLeft(panelClassName) {
    let dom = document.getElementsByClassName(panelClassName)[0];
    let overlay = document.getElementsByClassName("slider-overlay")[0];

    overlay.classList.remove("hidden");
    dom.classList.remove("hidden");
    dom.classList.remove("slideOutLeft");
    dom.classList.add("slideInLeft");
  }

  slidePanelOutLeft(panelClassName) {
    let dom = document.getElementsByClassName(panelClassName)[0];
    let overlay = document.getElementsByClassName("slider-overlay")[0];

    overlay.classList.add("hidden");
    dom.classList.remove("slideInLeft");
    dom.classList.add("slideOutLeft");
  }

  showNbsPane(e) {
    if (e) {
      if (e.currentTarget.className.includes("active")) {
        this.hideNbsPane();
        return;
      }
    }
    this.hideTagsPane();
    this.slidePanelInLeft("notebooks-sliding-pane");
  }

  showTagsPane(e) {
    if (e) {
      if (e.currentTarget.className.includes("active")) {
        this.hideTagsPane();
        return;
      }
    }
    this.hideNbsPane();
    this.slidePanelInLeft("tags-sliding-pane");
  }

  hideNbsPane() {
    this.slidePanelOutLeft("notebooks-sliding-pane");
  }

  hideTagsPane() {
    this.slidePanelOutLeft("tags-sliding-pane");
  }

  hideAllPanes() {
    this.hideTagsPane();
    this.hideNbsPane();
  }

  btnGrp1() {
    return (
      <div className="btnGrp btnGrp1">
        <div className="grp1-btn-cont">
          <Link
            to="/notes/new"
            onClick={this.hideAllPanes}
            className="sidebar-link"
          >
            <div className="grp1-btn bnicon bn-plus" />
          </Link>
        </div>
      </div>
    );
  }

  btnGrp2() {
    return (
      <div className="btnGrp btnGrp2">
        <div className="sidebar-link-cont">
          <NavLink to="/notes" className="sidebar-link">
            <div className="filter-btn-cont bnicon bn-note" />
          </NavLink>
        </div>
        <div className="sidebar-link-cont">
          <NavLink to="/notebooks" className="sidebar-link">
            <div className="filter-btn-cont bnicon bn-notebook" />
          </NavLink>
        </div>
        <div className="sidebar-link-cont">
          <NavLink to="/tags" className="sidebar-link">
            <div className="filter-btn-cont bnicon bn-tag" />
          </NavLink>
        </div>
      </div>
    );
  }

  logoutSection() {
    return (
      <button
        className="app-logout"
        onClick={() =>
          this.props
            .logout()
            .then(user => user, err => this.props.history.push("/"))}
      >
        <div className="bnicon fa fa-sign-out" aria-hidden="true" />
      </button>
    );
  }

  render() {
    return (
      <div className="sidebar-container">
        <div
          onClick={() => this.props.history.push("/notes")}
          className="slider-overlay hidden"
        />
        <div className="sidebar">
          {this.logoContainer()}
          {this.btnGrp1()}
          {this.btnGrp2()}
          {this.logoutSection()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
