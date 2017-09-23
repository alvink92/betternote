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

  componentWillUnmount() {}

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
    console.log(this.props);
    return (
      <div className="sliding-pane nb-index-container">
        {this.header()}
        <NotebookIndex
          notebooks={this.props.notebooks}
          deleteNotebook={this.props.deleteNotebook}
        />
      </div>
    );
  }
}

export default NotebookSlider;
