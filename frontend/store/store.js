import thunk from "redux-thunk";
// import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
