import React from "react";
import splitImg from "../assets/home/recent.jpg";
import recentVideo from "../assets/home/recent.mp4";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div className="flex flex-col md:flex-row  md:h-[70vh] pb-20">
      {/* Left Side - Image */}
      <div className="flex-1 overflow-hidden">
        <img
          src={splitImg}
          alt="Recent Work"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Side - Content */}
      <div className="flex-1 bg-[#0a4267d4] text-white flex flex-col justify-center items-start px-[8vw] relative overflow-hidden">
        {/* Optional: Video background pattern */}
        <video
          src={recentVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
        />
        <div
          className="relative z-10 max-w-2xl p-10 lg:p-0
         "
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 ">
            Recent Work
          </h1>
          <p className="md:text-lg text-sm mb-8 leading-relaxed ">
            Discover how GEODUKE is shaping the landscape with cutting-edge MSE
            wall and retaining wall projects across infrastructure, commercial,
            and urban development sectors. Our work combines innovative
            engineering, high-quality materials, and meticulous attention to
            detail to deliver robust, aesthetic, and sustainable wall systems.
            Every project we undertake reflects our dedication to customized
            solutions that meet the functional and architectural demands of
            modern construction.
          </p>
          <Link
            to="/projects"
            className="px-9 py-4 text-lg  font-semibold border-2 border-white  transition bg-transparent text-white hover:bg-white duration-300 hover:text-[#0a4267] focus:outline-none"
          >
            OUR PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recent;
