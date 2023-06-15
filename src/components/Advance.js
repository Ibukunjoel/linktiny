import React from "react";
import icon1 from "./images/card-1.svg";
import icon2 from "./images/card-2.svg";
import icon3 from "./images/card-3.svg";

export default function Advance() {
  return (
    <div className="advance">
      <h2 className="advance-heading">Advance Statistics</h2>
      <p className="advance-body">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="card-container">
        <div className="card-bar"></div>
        <div className="card">
          <div className="card-icon-container">
            <img src={icon1} alt="card-icon" className="card-icon" />
          </div>
          <div className="card-details">
            <p className="card-heading">Brand Recognition</p>
            <p className="card-body">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-container">
            <img src={icon2} alt="card-icon" className="card-icon" />
          </div>
          <div className="card-details">
            <p className="card-heading">Detailed Records</p>
            <p className="card-body">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-container">
            <img src={icon3} alt="card-icon" className="card-icon" />
          </div>
          <div className="card-details">
            <p className="card-heading">Fully Customizable</p>
            <p className="card-body">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
