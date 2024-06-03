import React from "react";
import leftEnd from "../resources/Ellipse2.svg";
import rightEnd from "../resources/Ellipse3.svg";

const Secondpage = () => {
  return (
    <div className="flex items-center mb-7">
      <div className="flex-1  sm:ml-28">
        <h2 className="font-jost text-3xl mr-10 ml-7 sm:text-6xl font-semibold leading-[2.76rem]  sm:leading-[4.76rem] text-center sm:text-left ">
          The future cant wait, Plant a{" "}
          <span className="text-custom-green2">Vriksh</span> today
        </h2>
        <p className="font-jost ml-4 mr-2 sm:ml-8 text-base sm:text-2xl mt-5 sm:mt-10 leading-[2rem] font-medium sm:text-left ">
          Trees absorb carbon dioxide , which is a greenhouse gas which
          contributes to climate change and releases oxygen which we need to
          live
        </p>
        <button className="flex items-center justify-center mt-10 sm:mt-16 ml-24 sm:ml-16 px-8 py-2  sm:px-13 sm:py-3 pl-16 pr-16 sm:pl-20 sm:pr-20 font-jost font-semibold relative z-10 bg-custom-green2 text-white text-xl sm:text-3xl rounded-xl cursor-pointer">
          <span className="text-black font-semibold text-xl sm:text-5xl">
            Plant Now
          </span>
        </button>
      </div>
      <div className="relative w-[35rem] h-[39rem] py-8 px-4 my-8 mx-20 bg-white rounded-lg shadow-2xl hidden lg:block">
        <h1 className="text-5xl text-customGreen text-center font-jost text-custom-green2 font-bold mb-4">
          Why Us
        </h1>
        <div className="text-3xl font-jost font-semibold m-20">
          <ul className="list-disc pl-6">
            <li className="mb-10">Community Engagement</li>
            <li className="mb-10">Eco-conscious Mission</li>
            <li className="mb-10 whitespace-nowrap">
              Expertise and Experience
            </li>
            <li className="mb-10">Transparency and Accountability</li>
          </ul>
        </div>

        <img
          src={rightEnd}
          alt="right-end"
          className="absolute bottom-0 left-0 mb-[-13px] w-32 h-32"
        />
        <img
          src={leftEnd}
          alt="left-end"
          className="absolute bottom-0 right-0 mb-[-10px] w-48 h-48"
        />
      </div>
    </div>
  );
};

export default Secondpage;
