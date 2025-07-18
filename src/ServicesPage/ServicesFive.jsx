import React from "react";
import AboutTwoImage from "../assets/services/servFive.png";
const ServicesFive = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          Inspection, Maintenance & Rehabilitation
        </h2>
        <p className="mb-5 leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> We offer
          post-installation services such as wall inspections, structural
          assessments, and repair or reinforcement of aging walls to assess the
          condition of existing MSE wall systems and address any structural or
          aesthetic concerns. Our certified engineers conduct detailed visual
          inspections, performance evaluations, and geotechnical assessments to
          identify signs of distress such as settlement, facing panel movement,
          erosion, or drainage issues. We develop tailored maintenance plans
          and, when needed, implement corrective actions including
          reinforcement, panel replacement, drainage upgrades, and structural
          retrofitting. Whether the wall is newly installed or decades old, our
          goal is to extend its service life, ensure compliance with safety
          standards, and minimize costly repairs in the future.
        </p>
      </div>
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={AboutTwoImage}
          alt="About Two"
          className="  object-cover shadow-lg md:h-[600px]"
        />
      </div>
    </div>
  );
};

export default ServicesFive;
