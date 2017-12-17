import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="footer-container">
        {/* <div className="footer-wrap nav">
          <div className="home-inner-width" />
        </div> */}
        <div className="footer-wrap social">
          <div className="home-inner-width">
            <ul className="social-links">
                <li>
                    <a href="http://www.alvink.me">
                    <i className="fa fa-home" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/alvink92/betternote">
                    <i className="fa fa-github" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alvink92/">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="mailto:alvinkong92@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <div className="footer-wrap legal">
          <div className="home-inner-width">
            <p className="copyright">
              © 2017 Betternote Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Footer;
