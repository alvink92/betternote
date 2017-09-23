import React from "react";
import NotebookIndex from "./notebook_index";

class NotebookSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ search: "" });
    this.props.fetchNotebooks();
  }

  componentWillUnmount() {
    this.props.clearNotebooks();
  }

  searchInput(type) {
    return (
      <input
        className="search"
        placeholder={`Find a ${type}`}
        value={this.state.search}
      />
    );
  }

  header() {
    return (
      <div className="header-wrap margined">
        <div className="header-container">
          <div className="header">
            <div className="title">NOTEBOOKS</div>
            <div className="create">+</div>
          </div>
        </div>
        <div className="search-container">{this.searchInput("notebook")}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="sliding-pane">
        {this.header()}
        <NotebookIndex
          history={this.props.history}
          notebooks={this.props.notebooks}
          deleteNotebook={this.props.deleteNotebook}
        />
      </div>
    );
  }
}

export default NotebookSlider;
