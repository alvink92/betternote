import React from "react";
import { getNotebook } from "../../util/notebooks_api_util";
import Modal from "react-modal";
import NotebookUpdate from "./notebook_update";

const customStyles = {
  content: {
    // top                   : '50%',
    // left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-50%',
    // transform             : 'translate(-50%, -50%)'
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    overflow: "hidden"
  }
};

class NotebookNotesIndexHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notebook: { title: "", noteIds: [] } };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.setState({
      modalIsOpen: false
    });

    getNotebook(this.props.notebookId).then(notebook =>
      this.setState({ notebook: notebook })
    );
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="notebook-note-index-header-container">
        <div className="title-container">
          <div className="nb-info-row">
            <div className="nb-info-btn" onClick={this.openModal}>
              i
            </div>
          </div>
          <div className="title">{this.state.notebook.title}</div>
        </div>
        <div className="notes-count-container">
          <div className="notes-count">
            {this.state.notebook.noteIds.length} notes
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Update Notebook Modal"
        >
          <NotebookUpdate
            history={this.props.history}
            notebook={this.state.notebook}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

export default NotebookNotesIndexHeader;
