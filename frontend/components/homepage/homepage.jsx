import React from "react";
import Navbar from "./navbar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container container">
        <Navbar />
      </div>
    );
  }
}

export default Homepage;
