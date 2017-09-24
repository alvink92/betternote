import React from "react";

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleClick(e) {
    if (e.target.className !== "fa fa-trash-o") {
      this.props.history.push(`/notebooks/${this.props.notebook.id}`);
    }
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props
      .deleteNotebook(this.props.notebook.id)
      .then(this.props.fetchNotes());
  }

  render() {
    return (
      <div className="nb-item-container-wrapper" onClick={this.handleClick}>
        <div className="nb-item-container">
          <div className="nb-item">
            <div>
              <div className="nb-header">{this.props.notebook.title}</div>
              <div className="nb-count">
                {this.props.notebook.noteIds.length} notes
              </div>
            </div>
            <div className="nb-delete-wrap" onClick={this.handleDeleteClick}>
              <div className="nb-delete">
                <i className="fa fa-trash-o" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookIndexItem;
