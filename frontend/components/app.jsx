import React from "react";
import SidebarContainer from "./sidebar/sidebar_container";

const App = props => {
  console.log(props);
  return (
    <div id="main-app">
      <SidebarContainer />
    </div>
  );
};

export default App;
