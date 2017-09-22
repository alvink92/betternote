import {
  RECEIVE_NOTE,
  REMOVE_NOTE,
  RECEIVE_NOTES
} from "../actions/note_actions";
import merge from "lodash/merge";

const notesReducer = (state = { all: {}, curr: null }, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, { all: action.notes });
    case RECEIVE_NOTE:
      newState = merge({}, state);
      newState.all[action.note.id] = action.note;
      newState.curr = action.note;
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState.all[action.note.id];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
