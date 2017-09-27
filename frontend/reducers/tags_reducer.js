import {
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from "../actions/tag_actions";
import merge from "lodash/merge";

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      newState = merge({}, state);
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      newState = merge({}, state);
      delete newState[action.tag.id];
      return newState;
    case RECEIVE_TAGGING:
      newState = merge({}, state);
      const tag = action.tagging.tag;
      // if break maybe here
      if (!newState[tag.id]) {
        newState[tag.id] = tag;
      }
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;
