import React from "react";
import AboutTwoImage from "../assets/services/servFour.png";
const ServicesFour = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={AboutTwoImage}
          alt="About Two"
          className="  object-cover shadow-lg rounded-lg"
        />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl uppercase text-black mb-4">
          {" "}
          Quality Control & Testing
        </h2>
        <p className="mb-5 leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> ensures that all
          materials and construction practices meet stringent quality standards,
          including the use of specific testing methods for backfill materials
          and reinforcement connections. All materials and construction
          processes undergo rigorous testing and quality control, ensuring
          long-term performance and compliance with national and international
          standards.
        </p>
        <p className="mb-5 leading-relaxed ">
          We prioritize safety, reliability, and performance through rigorous
          quality control and testing protocols at every stage of our MSE wall
          projects. From material selection to final installation, our team
          ensures that all components—such as backfill, geosynthetics, and
          facing units—meet or exceed industry standards and project
          specifications. We conduct laboratory testing, on-site inspections,
          and performance evaluations to verify soil properties, compaction
          quality, reinforcement strength, and alignment accuracy. Our quality
          assurance program follows ASTM, AASHTO, and local regulatory
          standards, ensuring consistent results and long-term wall stability.
          By maintaining strict quality oversight, we help our clients avoid
          costly rework and deliver MSE wall systems built to last.
        </p>
      </div>
    </div>
  );
};

export default ServicesFour;
