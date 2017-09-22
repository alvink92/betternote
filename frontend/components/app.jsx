import React from "react";
import SidebarContainer from "./sidebar/sidebar_container";
import NoteIndexContainer from "./notes/note_index_container";

const App = props => {
  console.log(props);
  return (
    <div id="main-app">
      <SidebarContainer />
      <NoteIndexContainer />
    </div>
  );
};

export default App;
