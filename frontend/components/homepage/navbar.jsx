import React from "react";

const Navbar = () => {
  return (
    <header className="home-header">
      <div className="row">
        <ul className="left-section">
          <li>logo</li>
          <li>Getting Started</li>
        </ul>
        <ul className="right-section">
          <li>Signup</li>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
