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
          <ProtectedRoute path="/app" component={App} />
          <AuthRoute path="/login" component={SessionFormPageContainer} />
          <AuthRoute path="/signup" component={SessionFormPageContainer} />
          <AuthRoute path="/" component={HomepageContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Root;
