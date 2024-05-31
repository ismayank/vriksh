import React from "react";
import "../css/Fifthpage.css";

import bar3 from "../resources/largeblack.svg";
import bar2 from "../resources/blackov.svg";
import bar1 from "../resources/black.svg";

const Fifthpage = () => {
    return (
        <div className="wrapup">
            <h1 className="no-plant">number of trees planted by vriksh</h1>
            <div>
            <div className="plant-container">
                <h1 className="text-1">Trees in the forest  <span className="text-2">Trees this month </span></h1>
                <div className="bar-contain">
                <div className="number-label">1334567</div>
                <img src={bar1} className="bar-l1" />
                <img src={bar2} className="bar-l2" />
                </div>
                <div className="bar-contain2">
                <div className="number-label">1294338</div>
                <img src={bar1} className="bar-l1" />
                <img src={bar3} className="bar-l2" />
                </div>
                </div>  
       </div>
        </div>

    );
};

export default Fifthpage;