import SessionFormContainer from "./session/session_form_container";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MainAppContainer from "./main_app/main_app_container";
import HomepageContainer from "./homepage/homepage_container";

const App = () => (
  <div>
    <header>
      <Switch>
        <ProtectedRoute path="/app" component={MainAppContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/" component={HomepageContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
