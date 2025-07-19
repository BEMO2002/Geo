import React from "react";
import splitImg from "../assets/home/img-split-panel-recent-work-01-960x750.jpg";
import recentVideo from "../assets/home/recent.mp4";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div className="flex flex-col md:flex-row  min-h-0.5 pb-20">
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
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 mt-6">
            Recent Work
          </h1>
          <p className="md:text-lg text-sm mb-8 leading-relaxed ">
            Explore our recent commercial and residential retaining wall
            projects, showcasing the latest innovations and exceptional
            craftsmanship. At ROSCH Company, we deliver superior solutions
            tailored to meet each client's unique needs. From versatile modular
            block walls to mortared limestone structures, our portfolio reflects
            our commitment to excellence in every detail.
          </p>
          <Link
            to="/projects"
            className="px-9 py-4 text-lg mb-6 font-semibold border-2 border-white  transition bg-transparent text-white hover:bg-white duration-300 hover:text-[#0a4267] focus:outline-none"
          >
            OUR PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recent;
