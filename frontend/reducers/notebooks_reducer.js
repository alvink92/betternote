import {
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS
} from "../actions/notebook_actions";
import { RECEIVE_NOTE, REMOVE_NOTE } from "../actions/note_actions";
import merge from "lodash/merge";

const nullNotebook = { title: "", noteIds: [] };

const notebooksReducer = (state = { all: {}, curr: nullNotebook }, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      newState = merge({}, state);
      newState.all = action.notebooks;
      if (!newState.curr.id) {
        let firstKey = Object.keys(action.notebooks)[0];
        if (firstKey) {
          newState.curr = action.notebooks[Object.keys(action.notebooks)[0]];
        }
      }
      return newState;
    case RECEIVE_NOTEBOOK:
      newState = merge({}, state);
      newState.all[action.notebook.id] = action.notebook;
      newState.curr = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      newState = merge({}, state);
      delete newState.all[action.notebook.id];
      return newState;
    case RECEIVE_NOTE:
      newState = merge({}, state);
      if (Object.keys(newState.all).includes(action.note.notebook.id)) {
        let notebookNoteIds = newState.all[action.note.notebook.id].noteIds;
        if (!notebookNoteIds.includes(action.note.id)) {
          newState.all[action.note.notebook.id].noteIds.push(action.note.id);
        }
      }

      if (newState.curr.id === action.note.notebook.id) {
        if (!newState.curr.noteIds.includes(action.note.id)) {
          newState.curr.noteIds.push(action.note.id);
        }
      }
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      if (Object.keys(newState.all).includes(action.note.notebook.id)) {
        let notebookNoteIds = newState.all[action.note.notebook.id].noteIds;
        notebookNoteIds = notebookNoteIds.filter(
          item => item !== action.note.id
        );
        newState.all[action.note.notebook.id].noteIds = notebookNoteIds;
      }

      if (newState.curr.id === action.note.notebook.id) {
        let notebookNoteIds = newState.curr.noteIds;
        notebookNoteIds = notebookNoteIds.filter(
          item => item !== action.note.id
        );
        newState.curr.noteIds = notebookNoteIds;
      }
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
