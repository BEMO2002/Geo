import React from "react";
import logo from "../assets/home/Picture2.png";
import videoShow from "../assets/home/video.mp4";
const Video = () => {
  return (
    <div className="relative w-screen h-[350px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[870px] overflow-hidden">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoShow} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-end text-left px-4 sm:px-12 pb-8 sm:pb-16">
        {/* Desktop/tablet text as before */}
        <div className=" max-w-xl w-full">
          <h1 className="text-[#fff]  lg:w-[700px] md:w-[300px] text-3xl md:text-[30px] lg:text-7xl font-bold mb-2 mt-2 tracking-normal lg:leading-[70px]">
            <img src={logo} alt="" className="md:w-90 w-40 mb-6" /> Your
            reliable partner for high-performance MSE wall solutions.
          </h1>
        </div>
      </div>

      {/* Animated Down Arrow Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 md:bottom-4 -bottom-16 sm:mb-4 mb-16 z-30 flex flex-col items-center">
        <svg
          className="md:w-8 w-6 md:h-8 h-6 text-[#aa0000] animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Video;
