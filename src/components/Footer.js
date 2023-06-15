import React from 'react'
import facebook from './images/facebook-icon.svg'
import twitter from "./images/twitter-icon.svg";
import linkedln from "./images/linkedln-icon.svg";

export default function Footer() {
  return (
    <div className='footer'>
      <h3 className="logo footer-logo">LinkTiny</h3>
      <div className="footer-menus">
        <div className="footer-menu">
          <p>Features</p>
          <ul>
            <li>Link shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-menu">
          <p>Resourses</p>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-menu">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="socials">
        <img src={facebook} alt="facebook" className='social'/>
        <img src={twitter} alt="twitter" className='social'/>
        <img src={linkedln} alt="instagram" className='social'/>
      </div>
    </div>
  );
}
