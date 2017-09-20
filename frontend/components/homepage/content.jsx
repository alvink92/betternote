import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-content">
        <div className="desc-section">
          <section>
            <h1>Meet Betternote, your second brain.</h1>
            <p>
              Capture, organize, and share notes from anywhere. Your best ideas
              are always with you and always in sync.
            </p>
          </section>
        </div>
        <section className="content-divider">
          <div className="v-line"> </div>
        </section>
        <div className="registration-form-container">
          <h1>Sign Up for Free</h1>
        </div>
      </div>
    );
  }
}

export default Content;
