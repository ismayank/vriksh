import React from "react";
import "../css/Fourthpage.css";
import leftEnd from "../resources/ver-line.svg";
import rightEnd from "../resources/hor-line.svg";
import bar1 from "../resources/bar1.svg";
import bar2 from "../resources/bar2.svg";

const Fourthpage = () => {
  return (
    <div className="wrapper1">
      <div className="text-section1">
        <p className="text-sec3">
          3.5 billion to 7 billion trees are being cut each year.
           We at vriksh plan to plant a million trees by 2030.
            Vriksh will be focuses on receiving donations as a non profit organisation by being accessible and transparent.
           The donations to the planet will be secure and transparent to you. Keep in mind, there is no PLANet B
        </p>
      
      </div>
      <div className="box-section1">
       <h3 className="head1">Number of trees cut down vs planted every month

       </h3>
       <img src={bar1} className="bar-line1" />
       <img src={bar2} className="bar-line2" />
       <img src={leftEnd} alt="left-end" className="hor-line" />
       <img src={rightEnd} alt="right-end" className="ver-line" />
       
       <div>
        <span className="graph1">Cut Down </span>
       <span className="graph2"> Planted</span>
       </div>
       
        
        
      </div>
    </div>
  );
};

export default Fourthpage;
