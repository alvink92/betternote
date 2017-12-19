import React from "react";
import Navbar from "./navbar";
import ContentContainer from "./content_container";
import Benefits from "./benefits";
import Footer from "./footer";

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

  socialProof() {
    return (
      <div className="social-proof-container">
        <div classname="home-inner-width">
        asdf
        </div>
        </div>
    );
  }

  render() {
    return <div className="homepage-container">
        <Navbar />
        <div className="content-container">
          {this.vGap("200px")}
          <ContentContainer />
          <Benefits />
        </div>
        <Footer />
      </div>;
  }
}

export default Homepage;
