import {
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS
} from "../actions/notebook_actions";
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
      delete newState[action.notebook.id];
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
