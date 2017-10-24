import React from "react";
import Navbar from "./navbar";
import ContentContainer from "./content_container";

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
        <div className="content-container">
          {this.vGap("200px")}
          <ContentContainer />
          {this.vGap("300px")}
        </div>
      </div>
    );
  }
}

export default Homepage;
