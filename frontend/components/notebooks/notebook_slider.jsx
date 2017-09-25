import React from "react";
import NotebookIndex from "./notebook_index";
import Modal from "react-modal";
import NotebookCreate from "./notebook_create";

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

class NotebookSlider extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.setState({ search: "" });
    this.props.fetchNotebooks();
  }

  componentWillUnmount() {
    // this.props.clearNotebooks();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false });
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
            <div className="create" onClick={this.openModal}>
              +
            </div>
          </div>
        </div>
        <div className="search-container">{this.searchInput("notebook")}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="sliding-pane-wrap">
        <div className="sliding-pane">
          {this.header()}
          <NotebookIndex
            fetchNotes={this.props.fetchNotes}
            history={this.props.history}
            notebooks={this.props.notebooks}
            deleteNotebook={this.props.deleteNotebook}
          />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create Notebook Modal"
        >
          <NotebookCreate
            createNotebook={this.props.createNotebook}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

export default NotebookSlider;
