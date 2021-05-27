import logo from "../Assets/Logo.svg";
import hamburger from "../Assets/Hamburger Menu.svg";
import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Commune logo" />
      <img className="header__hamburger" src={hamburger} alt="hamburger icon" />
      <ul className="header__nav">
        <li>Features</li>
        <li>Affiliates</li>
        <li>Pricing</li>
        <li>Communities</li>
        <li>
          <button>Join Waitlist</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
