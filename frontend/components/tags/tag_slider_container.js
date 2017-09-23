import TagSlider from "./tag_slider";
import { connect } from "react-redux";
import {
  fetchTags,
  createTag,
  deleteTag,
  clearTags
} from "../../actions/tag_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return { tags: state.entities.tags };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
    createTag: tag => dispatch(createTag(tag)),
    deleteTag: id => dispatch(deleteTag(id)),
    clearTags: () => dispatch(clearTags())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TagSlider)
);
