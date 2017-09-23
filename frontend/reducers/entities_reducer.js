import { combineReducers } from "redux";
import notesReducer from "./notes_reducer";
import notebooksReducer from "./notebooks_reducer";
import tagsReducer from "./tags_reducer";

const entitiesReducer = combineReducers({
  notes: notesReducer,
  notebooks: notebooksReducer,
  tags: tagsReducer
});

export default entitiesReducer;
