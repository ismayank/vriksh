import React from "react";
import "../css/Secondpage.css";
import leftEnd from "../resources/Ellipse2.svg";
import rightEnd from "../resources/Ellipse3.svg";

const Secondpage = () => {
  return (
    <div className="wrapper">
      <div className="text-section">
        <h2 className="text-sec">
          The future cant wait, Plant a <span className="glit">Vriksh</span>{" "}
          today
        </h2>
        <p className="text-sec2">
          Trees absorb carbon dioxide , which is a greenhouse gas which
          contributes to climate change and releases oxygen which we need to
          live
        </p>
        <button className="plant-button">
          <span className="plant-text">Plant Now</span>
        </button>
      </div>
      <div className="box-section">
        <h2 className="box-sec">Why Us</h2>

        <ul className="boxy">
          <li>Community Engagement</li>
          <li>Eco-conscious Mission</li>
          <li>Expertise and Experience</li>
          <li>Transparency and Accountability</li>
         
        </ul>
        
        <img src={rightEnd} alt="right-end" className="right-svg" />
        <img src={leftEnd} alt="left-end" className="left-svg" />
        
      </div>
    </div>
  );
};

export default Secondpage;
