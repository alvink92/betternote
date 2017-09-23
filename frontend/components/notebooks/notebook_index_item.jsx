import React from "react";

const NotebookIndexItem = props => {
  return (
    <div className="nb-item-container-wrapper">
      <div className="nb-item-container">
        <div className="nb-item">
          <div>
            <div className="nb-header">{props.notebook.title}</div>
            <div className="nb-count">
              {props.notebook.noteIds.length} notes
            </div>
          </div>
          <div className="nb-delete-wrap">
            <div
              className="nb-delete"
              onClick={() => props.deleteNotebook(props.notebook.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookIndexItem;
