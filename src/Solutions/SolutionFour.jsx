import React from "react";
import GoalImage from "../assets/Solutions/Picture11.png";
import Image from "../assets/Solutions/Picture12.png";
import ImageThree from "../assets/Solutions/Picture13.png";
import ImageFour from "../assets/Solutions/Picture14.png";
import ImageFive from "../assets/Solutions/Picture15.png";
const SolutionFour = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            src={GoalImage}
            alt="About Two"
            className="object-cover shadow-lg w-full  md:h-auto h-[220px]  rounded"
          />
          <img
            src={Image}
            alt="About Two"
            className="object-cover shadow-lg w-full md:h-[550px] h-auto rounded"
          />
          <img
            src={ImageThree}
            alt="About Two"
            className="object-cover shadow-lg w-full  h-auto rounded"
          />
          {/* <img
          src={ImageFour}
          alt="About Two"
          className="object-cover shadow-lg w-full md:h-[500px] h-[220px] rounded"
        />
        <img
          src={ImageFive}
          alt="About Two"
          className="object-cover shadow-lg w-full md:h-[500px] h-auto rounded"
        /> */}
        </div>
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          4- Precast Arches
        </h2>
        <p className="mb-5 leading-relaxed ">
          The engineering benefits of arches have been known for thousands of
          years, but the basic principles have remained the same.
        </p>
        <p className="mb-5 leading-relaxed ">
          The overburden load is carried along the arch from the top down to
          both ends, in pure compression, with zero or minimal tension in the
          arch member. It allows for a very efficient design of the arch span,
          and use of materials that typically do not have a high tensile
          capacity.
        </p>
        <p className="mb-2 leading-relaxed">
          Applications of Precast Arches include:
        </p>
        <ul className="list-disc pl-10 mb-5">
          <li>Short to medium-span bridges</li>
          <li>
            Tunnels for roadway, railway, pedestrian, and mining site reclaim or
            access
          </li>
          <li>Culverts</li>
          <li>Ammunition storage facilities</li>
          <li>Above-ground earth shelters.</li>
        </ul>
        <p className="mb-5 leading-relaxed ">
          Precast Arches is a three-hinged precast concrete arch system,
          consisting of half-arch units that meet at the crown, supported by
          precast or cast-in-place footings sized for site-specific conditions.
          MSE walls are easily customized and built at the ends of the arch
          tunnel, forming a standalone bridge, concrete tunnel, or hydraulic
          structure. The arch units are typically eight to ten inches thick and
          are custom-designed for application to minimize materials.
        </p>
        <p className="mb-5 leading-relaxed ">
          Each arch is carefully tailored and optimized, structurally and
          geometrically, to meet the individual needs of the project. The system
          can be designed to accommodate high fills, heavy live loads, and
          altering loading conditions. Arches can be installed over existing
          roads and waterways, live rail, or another service, with minimal
          disruption.
        </p>
      </div>
    </div>
  );
};

export default SolutionFour;
