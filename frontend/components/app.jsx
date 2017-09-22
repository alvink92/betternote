import React from "react";
import SidebarContainer from "./sidebar/sidebar_container";
import NoteIndexContainer from "./notes/note_index_container";
import NoteShowContainer from "./notes/note_show_container";

const App = props => {
  return (
    <div id="main-app">
      <SidebarContainer />
      <NoteIndexContainer />
      <NoteShowContainer />
    </div>
  );
};

export default App;
