import React from "react";
import Navbar from "./navbar";
import Content from "./content";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container">
        <Navbar />
        <div className="content-container inner-margin">
          <Content />
        </div>
      </div>
    );
  }
}

export default Homepage;
