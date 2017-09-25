import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormPageContainer from "./session/session_form_page_container";
import HomepageContainer from "./homepage/homepage_container";
import App from "./app";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <ProtectedRoute exact path="/notes/new" component={App} />
          <ProtectedRoute path="/notes/:noteId" component={App} />
          <ProtectedRoute path="/notes" component={App} />
          <ProtectedRoute
            path="/notebooks/:notebookId/notes/:noteId"
            component={App}
          />
          <ProtectedRoute path="/notebooks/:notebookId/notes" component={App} />
          <ProtectedRoute path="/notebooks/:notebookId" component={App} />
          <ProtectedRoute path="/notebooks" component={App} />
          <ProtectedRoute path="/tags/:tagId/notes/:noteId" component={App} />
          <ProtectedRoute path="/tags/:tagId/notes" component={App} />
          <ProtectedRoute path="/tags/:tagId" component={App} />
          <ProtectedRoute path="/tags" component={App} />
          <AuthRoute path="/login" component={SessionFormPageContainer} />
          <AuthRoute path="/signup" component={SessionFormPageContainer} />
          <AuthRoute path="/" component={HomepageContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Root;
