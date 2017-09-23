import * as TagApiUtil from "../util/tags_api_util";

export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

export const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag
  };
};

export const removeTag = tag => {
  return {
    type: REMOVE_TAG,
    tag
  };
};

export const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const receiveTagErrors = errors => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors
  };
};

export const clearTags = () => {
  return {
    type: RECEIVE_TAGS,
    tags: {}
  };
};

export const fetchTags = () => dispatch => {
  return TagApiUtil.getTags().then(
    tags => dispatch(receiveTags(tags)),
    errors => dispatch(receiveTagErrors(errors))
  );
};

export const fetchTag = tagId => dispatch => {
  return TagApiUtil.getTag(tagId).then(
    tag => dispatch(receiveTag(tag)),
    errors => dispatch(receiveTagErrors(errors))
  );
};

export const createTag = tag => dispatch => {
  return TagApiUtil.createTag(tag).then(
    newTag => dispatch(receiveTag(newTag)),
    errors => dispatch(receiveTagErrors(errors))
  );
};

export const updateTag = tag => dispatch => {
  return TagApiUtil.updateTag(tag).then(
    updatedTag => dispatch(receiveTag(updatedTag)),
    errors => dispatch(receiveTagErrors(errors))
  );
};

export const deleteTag = tagId => dispatch => {
  return TagApiUtil.deleteTag(tagId).then(
    removedTag => dispatch(removeTag(removedTag)),
    errors => dispatch(receiveTagErrors(errors))
  );
};
