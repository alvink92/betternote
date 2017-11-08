import {
  RECEIVE_NOTE,
  REMOVE_NOTE,
  RECEIVE_NOTES,
  UPDATE_ONLY_NOTES_WITH_NOTE
} from "../actions/note_actions";
import { RECEIVE_TAGGING, REMOVE_TAGGING } from "../actions/tag_actions";
import { emptyNote } from "../util/entities_util";
import merge from "lodash/merge";

const notesReducer = (state = { all: {}, curr: null }, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTES:
      newState = merge({}, state);
      newState.all = action.notes;
      newState.curr = newState.curr
        ? Object.values(action.notes)
            .map(note => note.id)
            .includes(newState.curr.id)
          ? newState.curr
          : null
        : Object.values(action.notes)[0];
      // newState.curr = newState.curr ? newState.curr : emptyNote;
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
      // newState.curr = Object.values(newState.all)[0]
      //   ? Object.values(newState.all)[0]
      //   : null;
      newState.curr = null;
      return newState;
    case RECEIVE_TAGGING:
      newState = merge({}, state);

      // Below block of code only if update note in NoteShow from frontend, not from server

      // if (Object.keys(newState.all).includes(String(action.tagging.noteId))) {
      //   newState.all[action.tagging.noteId].tags.push(action.tagging.tag);
      // }
      if (newState.curr.id === action.tagging.noteId) {
        newState.curr.tags.push(action.tagging.tag);
      }
      return newState;
    case REMOVE_TAGGING:
      newState = merge({}, state);
      let removeIndex;

      // Below block of code only if update note in NoteShow from frontend, not from server

      // if (Object.keys(newState.all).includes(String(action.tagging.noteId))) {
      //   newState.all[action.tagging.noteId].tags.forEach((tag, i) => {
      //     if (tag.id === action.tagging.tag.id) {
      //       removeIndex = i;
      //     }
      //   });
      //   if (typeof removeIndex !== "undefined") {
      //     let tags = newState.all[action.tagging.noteId].tags;
      //     tags = tags.slice(0, removeIndex).concat(tags.slice(removeIndex + 1));
      //     newState.all[action.tagging.noteId].tags = tags;
      //   }
      // }
      if (newState.curr.id === action.tagging.noteId) {
        removeIndex = undefined;
        newState.curr.tags.forEach((tag, i) => {
          if (tag.id === action.tagging.tag.id) {
            removeIndex = i;
          }
        });

        if (typeof removeIndex !== "undefined") {
          let currTags = newState.curr.tags;
          currTags = currTags
            .slice(0, removeIndex)
            .concat(currTags.slice(removeIndex + 1));
          newState.curr.tags = currTags;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
