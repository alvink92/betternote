import SessionFormPageContainer from "./session/session_form_page_container";
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
        <AuthRoute path="/login" component={SessionFormPageContainer} />
        <AuthRoute path="/signup" component={SessionFormPageContainer} />
        <AuthRoute path="/" component={HomepageContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
