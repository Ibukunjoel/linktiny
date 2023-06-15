import React from 'react';
import hero from "./images/desktop-shape.svg";
import coder from "./images/coder.svg";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero1">
        <h1 className='hero-font'>
          Link Compression
          <br />
          and Beyond
        </h1>
        <p className='hero-sub--font'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='nav--btn color'>Get Started</button>
      </div>
      <div className="hero2">
        <img src={coder} alt="coder" />
      </div>
      <img src={hero} alt="hero-bg" className='hero-bg'/>
    </div>
  );
}
