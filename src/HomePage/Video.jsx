import React from "react";
import design from "../assets/home/business-home-rev-slider-img-02.png";
import videoShow from "../assets/home/video.mp4";
const Video = () => {
  return (
    <div className="relative w-screen h-[350px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] overflow-hidden">
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

      {/* Diagonal White Overlay (hidden on mobile) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <svg
          className="w-full h-full"
          viewBox="0 20 1800 400 "
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 1920,600 1920,800 0,800"
            fill="white"
            opacity="0.77"
            filter="url(#white-shadow)"
          />
        </svg>
      </div>
      {/* <div className="absolute hidden lg:block left-0 lg:top-30 md:top-18 z-50">
        <img src={design} alt="" className="lg:w-[250px] md:w-[160px]" />
      </div> */}

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center sm:items-start sm:justify-end sm:text-left px-4 sm:px-12 pb-8 sm:pb-16">
        {/* Mobile white box only around text */}
        <div className="block lg:hidden bg-white/60 rounded-2xl mt-10 px-4 py-5 max-w-lg w-full mx-auto md:max-w-2xl md:px-10 md:py-10">
          <h1 className="text-[#aa0000] text-lg xs:text-xl font-extrabold mb-3 tracking-tight md:text-2xl">
          “GEO<span className="text-second">DUKE</span> is your trusted partner for MSE wall solutions”
          </h1>
          <p className="text-base text-sm xs:text-lg font-bold md:text-lg mb-2">
            We're built on nearly 20 years of success in the wider Gulf region.
          </p>
          <p className="text-base text-sm xs:text-sm font-medium md:text-base">
            GEODUKE is a regional leader in engineered retaining wall systems, serving Saudi Arabia and the wider Gulf region. We provide innovative, durable, and cost-effective solutions using modern mechanical stabilization techniques and high-quality Retaining Walls, Precast Concrete Arches, Omega Walls, and Large Block Wall systems. We deliver smart, sustainable solutions tailored for the future of construction in Saudi Arabia and beyond.
          </p>
        </div>
        {/* Desktop/tablet text as before */}
        <div className="hidden lg:block max-w-xl w-full">
          <h1 className="text-[#aa0000] lg:w-[600px] md:w-[300px] text-3xl md:text-[30px] lg:text-6xl font-bold mb-2 mt-2 tracking-normal lg:leading-[70px]">
          GEO<span className="text-second">DUKE</span> is your trusted partner for MSE wall solutions
          </h1>
          <p className="text-lg md:text-sm lg:text-xl md:w-[350px] lg:w-[650px] font-bold">We're built on nearly 20 years of success in the wider Gulf region. </p>
          <p className="text-lg md:text-sm lg:text-sm md:w-[350px] lg:w-[600px] font-medium">
          GEODUKE is a regional leader in engineered retaining wall systems, serving Saudi Arabia and the wider Gulf region. We provide innovative, durable, and cost-effective solutions using modern mechanical stabilization techniques and high-quality Retaining Walls, Precast Concrete Arches, Omega Walls, and Large Block Wall systems. We deliver smart, sustainable solutions tailored for the future of construction in Saudi Arabia and beyond.
          </p>
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
