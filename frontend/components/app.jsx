import React from "react";
import SidebarContainer from "./sidebar/sidebar_container";
import NoteIndexContainer from "./notes/note_index_container";
import NoteShowContainer from "./notes/note_show_container";
import NotebookSliderContainer from "./notebooks/nb_slider_container";
import TagSliderContainer from "./tags/tag_slider_container";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div id="main-app">
      <SidebarContainer />
      <NoteIndexContainer />
      <NoteShowContainer />
      <Route exact path="/notebooks" component={NotebookSliderContainer} />
      <Route exact path="/tags" component={TagSliderContainer} />
    </div>
  );
};

export default App;
