import React from "react";
import Navbar from "./navbar";
import Content from "./content";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  vGap(height) {
    const divStyle = {
      display: "block",
      width: "100%",
      clear: "both",
      height: height
    };
    return <div style={divStyle} />;
  }

  render() {
    return (
      <div className="homepage-container">
        <Navbar />
        <div className="content-container inner-margin">
          {this.vGap("85px")}
          <Content />
        </div>
      </div>
    );
  }
}

export default Homepage;
