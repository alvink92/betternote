import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="home-header">
      <div className="header-nav home-inner-width">
        <ul className="left-section">
          <li>
            <img
              className="logo"
              src="https://www.evernote.com/redesign/global/img/elephant.png"
              alt="Betternote logo"
            />
            <p className="brand-text">BETTERNOTE</p>
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
        <ul className="right-section">
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
