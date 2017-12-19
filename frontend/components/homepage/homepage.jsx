import React from "react";
import Navbar from "./navbar";
import ContentContainer from "./content_container";
import Benefits from "./benefits";
import Footer from "./footer";
import {Link} from 'react-router-dom';

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
      <div className="social-proof">
        <div className="home-inner-width">
          <h2>
            Millions of people rely on Evernote to stay organized and get more done. Find out why.
          </h2>
          <div className="social-proof-signup">
            <Link to="/signup">Sign up for free</Link>
          </div>
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
          {this.socialProof()}
        </div>
        <Footer />
      </div>;
  }
}

export default Homepage;
