import React from "react";
import bar3 from "../resources/largeblack.svg";
import bar2 from "../resources/blackov.svg";
import bar1 from "../resources/black.svg";

const Fifthpage = () => {
    return (
        <div className="mb-[3.2rem]">
            <h1 className="font-jost text-base sm:text-5xl font-semibold leading-9 py-2 text-center text-black mt-20">number of trees planted by vriksh</h1>
            <div>
            <div className="text-left mx-[1.2rem] sm:mt-20 sm:ml-20">
                <h1 className="font-inter text-xs sm:text-4xl font-semibold sm:leading-9 mb-5 sm:ml-24">Trees in the forest  
                <span className="font-inter text-xs sm:text-4xl font-semibold leading-9 mb-5 ml-[30rem]">Trees this month </span></h1>
                <div className="relative inline-block mr-52">
                <div className="relative top-10 left-8 justify-start text-xl font-inter text-left z-30 font-bold text-black">1334567</div>
                <img src={bar1} className="relative top-0 left-0 z-10" />
                <img src={bar2} className=" absolute top-7 left-0 z-20" />
                </div>
                <div className="relative inline-block">
                <div className="relative top-10 left-8 justify-start text-xl font-inter text-left z-30 font-bold text-black">1294338</div>
                <img src={bar1} className="relative top-0 left-0 z-10" />
                <img src={bar3} className="absolute top-7 left-0 z-20" />
                </div>
                </div>  
       </div>
        </div>

    );
};

export default Fifthpage;