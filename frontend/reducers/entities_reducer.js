import { combineReducers } from "redux";
import notesReducer from "./notes_reducer";

const entitiesReducer = combineReducers({
  notes: notesReducer
});

export default entitiesReducer;
