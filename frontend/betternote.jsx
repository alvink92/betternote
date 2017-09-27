import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const preloadedState = { session: { currentUser: null } };
  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});

// import * as nb from "./actions/notebook_actions";
// import * as tag from "./actions/tag_actions";
// //
// // window.nb = nb;
// window.tag = tag;
