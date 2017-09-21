import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="home-header inner-margin">
      <div className="header-nav">
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
            <a href="https://github.com/alvink92">Github</a>
          </li>
        </ul>
        <ul className="right-section">
          <li>
            <Link to={"/login"}>Log in</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
