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

import * as APIUtil from "./util/session_api_util";
import * as SessAction from "./actions/session_actions";

window.login = SessAction.login;
window.signup = APIUtil.signup;
window.logout = SessAction.logout;
