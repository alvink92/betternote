import {
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS
} from "../actions/notebook_actions";
import merge from "lodash/merge";

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      newState = merge({}, state);
      newState[action.notebook.id] = action.notebook;
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
