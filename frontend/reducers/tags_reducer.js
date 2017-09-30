import {
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from "../actions/tag_actions";
// import { RECEIVE_NOTE } from "../actions/note_actions";
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
      if (!newState[tag.id]) {
        newState[tag.id] = tag;
      }
      return newState;
    // case RECEIVE_NOTE:
    //   newState = merge({}, state);
    //   const note = action.note;
    //   const tags = note.tags;
    //
    //   tags.map(currTag => currTag.id).forEach(tagId => {
    //     if (!newState[tagId].noteIds.includes(note.id)) {
    //       newState[tagId].noteIds = newState[tagId].noteIds.push(note.id);
    //     }
    //   });
    //   return newState;
    default:
      return state;
  }
};

export default tagsReducer;
