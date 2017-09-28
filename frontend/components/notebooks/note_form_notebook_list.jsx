import React from "react";

class NoteFormNotebookList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ notebookTitle: "" });
  }

  render() {
    return (
      <div className="notebook-list">
        <div className="create-new-notebook notebook-title-container">
          <div className="notebook-title-wrapper">
            <div className="notebook-title">
              <div>Create new notebook</div>
            </div>
          </div>
        </div>
        {Object.values(this.props.notebooks).map(notebook => (
          <div
            key={notebook.id}
            onClick={() => this.props.handleSelectNotebookClick(notebook)}
          >
            <div className="notebook-title-wrapper">
              <div className="notebook-title">{notebook.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NoteFormNotebookList;
