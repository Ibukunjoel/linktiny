import React from 'react'
import hamburger from './images/hamburger-button.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-menu">
        <h3 className="logo">LinkTiny</h3>
        <ul className="menu">
          <li className="menu-lists">Features</li>
          <li className="menu-lists">Pricing</li>
          <li className="menu-lists">Resources</li>
        </ul>
      </div>
      <div className="navbar-btns">
        <button className="nav--btn">Login</button>
        <button className="nav--btn color">Sign Up</button>
      </div>
      <img src={hamburger} alt="menu-burger" className="burger" />
    </div>
  );
}

