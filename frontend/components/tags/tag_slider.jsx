import React from "react";
import TagIndex from "./tag_index";
import Modal from "react-modal";
import TagCreate from "./tag_create";

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

class TagSlider extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.filteredTags = this.filteredTags.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      modalIsOpen: false,
      search: ""
    });
  }

  componentWillUnmount() {}

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  searchInput(type) {
    return (
      <input
        className="search"
        placeholder={`Find a ${type}`}
        value={this.state.search}
        onChange={this.handleSearchChange}
      />
    );
  }

  filteredTags() {
    return Object.values(this.props.tags).filter(tag =>
      tag.name.toUpperCase().includes(this.state.search.toUpperCase())
    );
  }

  header() {
    return (
      <div className="header-wrap margined">
        <div className="header-container">
          <div className="header">
            <div className="title">TAGS</div>
            <div className="tag-create create" onClick={this.openModal}>
              <i />
            </div>
          </div>
        </div>
        <div className="search-container">{this.searchInput("tag")}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="sliding-pane-wrap">
        <div className="tags-sliding-pane sliding-pane hidden animated">
          {this.header()}
          <TagIndex
            fetchTags={this.props.fetchTags}
            clearTags={this.props.clearTags}
            tags={this.filteredTags()}
            history={this.props.history}
            updateTag={this.props.updateTag}
            deleteTag={this.props.deleteTag}
          />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create Tag Modal"
        >
          <TagCreate
            createTag={this.props.createTag}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

export default TagSlider;
