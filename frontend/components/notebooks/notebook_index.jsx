import React from "react";
import NotebookIndexItem from "./notebook_index_item";

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  nbIndexItems() {
    if (this.props.notebooks) {
      return Object.values(this.props.notebooks).map(notebook => (
        <NotebookIndexItem
          key={notebook.id}
          notebook={notebook}
          deleteNotebook={this.props.deleteNotebook}
        />
      ));
    }
  }

  render() {
    return (
      <div className="nb-index-container">
        <div className="nb-index">{this.nbIndexItems()}</div>
      </div>
    );
  }
}

export default NotebookIndex;
