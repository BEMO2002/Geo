import React from "react";
import AboutTwoImage from "../assets/services/servThird.png";
const ServicesThree = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl uppercase text-black mb-4">
          Construction Support
        </h2>
        <p className="mb-5 leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> offers
          construction support, including guidance on foundation preparation,
          panel installation, and backfill placement. They emphasize the
          importance of following specified construction procedures to ensure
          the integrity and performance of the wall system. we understand that
          no two projects are the same. That’s why we specialize in custom MSE
          wall solutions designed to meet the unique challenges of your site
          conditions, design specifications, and aesthetic preferences. Whether
          it's a curved alignment, complex geometry, variable heights, or
          integration with bridges, culverts, or drainage systems — our
          engineering team works closely with clients, contractors, and
          consultants to deliver tailored retaining wall systems that ensure
          structural integrity, long-term performance, and visual appeal. We
          combine advanced geotechnical design tools, premium-grade materials,
          and field-proven construction methods to provide reliable solutions
          for even the most demanding environments.
        </p>
      </div>
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={AboutTwoImage}
          alt="About Two"
          className="  object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServicesThree;
