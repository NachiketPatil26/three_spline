/* eslint-disable no-unused-vars */

import React from "react";
import Spline from '@splinetool/react-spline';
import assets from "../assets/asset";

const ThreeBG = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10">
      {/* Spline scene container */}
      <Spline
        className='w-full h-full'
        scene="https://prod.spline.design/vTwioKQtvdizYR0c/scene.splinecode"
      />

      {/* Optional: Red div fixed on top-right */}
      <div className="absolute bottom-0 right-0 bg-black w-40 h-20 z-20">
        <img className="ml-10 w-20 h-20" src={assets.Shaids_black} alt="" />
      </div>
    </div>
  );
};

export default ThreeBG;

