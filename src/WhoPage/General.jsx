import React from "react";
import GeneralImage from "../assets/who we are/Picture2.png";
const General = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Right Side: Text */}
      <div className="flex-1 text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          General Manager Message
        </h2>
        <p className="mb-5 leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> is one of the
          leading enterprises company in the field of engineering contracting in
          all fields <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> strength is also
          in the area of internal design, furnishing materials, and constructing
          Mechanically Stabilized Earth (<span className="font-bold">MSE</span>)
          walls works. It also leads the competition in this area of
          Infrastructure. We offer clients in various industries with effective
          and efficient project management, ensuring that its services are
          within budget, on time completion and in compliance with the project's
          technical specifications standards.
        </p>
        <p className="mb-5 leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> aims to provide
          its services in high quality and in an effective manner in all fields
          of engineering contracting in the Kingdom of Saudi Arabia and the GCC
          countries, and specialized technical competence with a high ability to
          implement projects with the highest standards of quality and safety.
        </p>
        <p className="leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span>
          <span className="text-second font-bold">DUKE</span> has adopted
          outstanding policies and strategies that contributed to the
          decentralization and full independence of all sectors and the
          implementation of the quality system in technical management in the
          completion of the project. Enabling it to take full advantage of its
          capacity and technical capabilities and raise the level of performance
          and commitment to the time programs adopted for the implementation and
          delivery of work following technical specifications and contractual
          dates.
        </p>
      </div>
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={GeneralImage}
          alt="About Two"
          className="  object-cover rounded-lg lg:w-[1000px]  lg:h-[500px] shadow-lg"
        />
      </div>
    </div>
  );
};

export default General;
