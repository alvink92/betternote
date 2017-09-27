import {
  RECEIVE_NOTE,
  REMOVE_NOTE,
  RECEIVE_NOTES,
  UPDATE_ONLY_NOTES_WITH_NOTE
} from "../actions/note_actions";
import { emptyNote } from "../util/entities_util";
import merge from "lodash/merge";

const notesReducer = (state = { all: {}, curr: emptyNote }, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTES:
      newState = merge({}, state);
      newState.all = action.notes;
      newState.curr = newState.curr.id
        ? newState.curr
        : Object.values(action.notes)[0];
      newState.curr = newState.curr ? newState.curr : emptyNote;
      return newState;
    case RECEIVE_NOTE:
      newState = merge({}, state);
      newState.all[action.note.id] = action.note;
      newState.curr = action.note;
      return newState;
    case UPDATE_ONLY_NOTES_WITH_NOTE:
      newState = merge({}, state);
      newState.all[action.note.id] = action.note;
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState.all[action.note.id];
      newState.curr = Object.values(newState.all)[0]
        ? Object.values(newState.all)[0]
        : emptyNote;

      return newState;
    default:
      return state;
  }
};

export default notesReducer;
