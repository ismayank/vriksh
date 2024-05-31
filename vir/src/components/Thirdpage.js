import React from "react";
import "../css/Thirdpage.css";
import backgroundImage from '../resources/img2.svg';

const Thirdpage = () => {
    return (
        <div className="objective-section">
      <h2 className="objective-heading">Our Objective</h2>
      <div className="image-container">
        <img src={backgroundImage} alt="Background" className="background-img" />
        <div className="text-overlay">
          <h3 className="headline-text">ONE MILLION <span className="tree">TREES </span><span className="by-span"> BY </span> 2030</h3>
        </div>
      </div>
    </div>

    );
};

export default Thirdpage;
