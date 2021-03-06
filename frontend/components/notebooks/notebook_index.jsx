import React from "react";
import NotebookIndexItem from "./notebook_index_item";

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  nbIndexItems() {
    return this.props.notebooks.map(notebook => (
      <NotebookIndexItem
        key={notebook.id}
        notebook={notebook}
        fetchNotes={this.props.fetchNotes}
        history={this.props.history}
        deleteNotebook={this.props.deleteNotebook}
      />
    ));
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
