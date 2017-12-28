import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return <div className="footer-container">
        <div className="footer-wrap nav">
          <div className="home-inner-width link-section-wrap">
            <div className="link-section">
              <p className="link-section-header">Plans</p>
              <ul>
                <li>
                  <a href="/">Getting started</a>
                </li>
                <li>
                  <a href="/">Basic</a>
                </li>
                <li>
                  <a href="/">Plus</a>
                </li>
                <li>
                  <a href="/">Premium</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Business</p>
              <ul>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Use cases</a>
                </li>
                <li>
                  <a href="/">Customer stories</a>
                </li>
                <li>
                  <a href="/">Contact sales</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Discover</p>
              <ul>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Certified consultants</a>
                </li>
                <li>
                  <a href="/">Events</a>
                </li>
                <li>
                  <a href="/">App center</a>
                </li>
                <li>
                  <a href="/">Web clipper</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Support</p>
              <ul>
                <li>
                  <a href="/">Help & Learning</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Forum</a>
                </li>
                <li>
                  <a href="/">Developers</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Company</p>
              <ul>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
              &copy; 2017 Betternote Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Footer;
