import React from "react";
import TagIndex from "./tag_index";

class TagSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ search: "" });
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
            <div className="title">TAGS</div>
            <div className="create">+</div>
          </div>
        </div>
        <div className="search-container">{this.searchInput("tag")}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="sliding-pane">
        {this.header()}
        <TagIndex
          fetchTags={this.props.fetchTags}
          clearTags={this.props.clearTags}
          tags={this.props.tags}
          history={this.props.history}
          updateTag={this.props.updateTag}
          deleteTag={this.props.deleteTag}
        />
      </div>
    );
  }
}

export default TagSlider;
