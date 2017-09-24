import React from "react";
import { getNotebook } from "../../util/notebooks_api_util";

class NotebookNotesIndexHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notebook: { title: "", noteIds: [] } };
  }

  componentWillMount() {
    getNotebook(this.props.notebookId).then(notebook =>
      this.setState({ notebook: notebook })
    );
  }

  render() {
    return (
      <div className="notebook-note-index-header-container">
        <div className="title-container">
          <div className="nb-info-row">
            <div className="nb-info-btn">i</div>
          </div>
          <div className="title">{this.state.notebook.title}</div>
        </div>
        <div className="notes-count-container">
          <div className="notes-count">
            {this.state.notebook.noteIds.length} notes
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookNotesIndexHeader;
