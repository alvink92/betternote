import React from "react";
import Navbar from "./navbar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container">
        <Navbar />
        <div className="content-container inner-margin">
          <div>filler</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
