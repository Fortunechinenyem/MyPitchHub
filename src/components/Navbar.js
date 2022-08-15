import React from "react";
import logo from "../images/pitchlogo.png";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt={Navbar.png} />
      </div>
      <nav className="nav d-flex">
        <ul className="nav__list">
          <li>Log in</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
