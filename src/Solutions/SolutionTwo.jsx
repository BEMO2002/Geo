import React from "react";
import GoalImage from "../assets/Solutions/Picture3.png";
import Image from "../assets/Solutions/Picture4.png";
import ImageTwo from "../assets/Solutions/Picture5.png";
const SolutionTwo = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            src={GoalImage}
            alt="About Two"
            className="object-cover shadow-lg w-full h-auto  rounded"
          />
          <img
            src={Image}
            alt="About Two"
            className="object-cover shadow-lg w-full h-auto rounded"
          />
          <img
            src={ImageTwo}
            alt="About Two"
            className="object-cover shadow-lg w-full h-auto rounded"
          />
        </div>
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          2- Omega Block Walls
        </h2>
        <p className="mb-5 leading-relaxed ">
          Omega Block Walls are an advanced segmental retaining wall system
          engineered for both structural strength and aesthetic appeal. At{" "}
          <b>GEODUKE</b>, we specialize in designing and constructing Omega
          Block Walls for a wide range of applications—from roadway embankments
          and bridge approaches to residential landscapes and commercial
          developments.
          <br />
          <br />
          The Omega Block system is built using interlocking precast concrete
          units that are dry-stacked and secured with geogrid reinforcements.
          These blocks are designed to provide high stability while allowing
          flexibility in design, making them ideal for projects that require
          durability, ease of installation, and architectural finish.
        </p>
        <div className="flex items-center mb-2">
          <span className="mr-2"></span>
          <b>Key Features of Omega Block Walls</b>
        </div>
        <ul className="pl-0 space-y-4">
          <li className="flex items-start">
            <span className="mr-2 mt-1"></span>
            <div>
              <b>Modular & Scalable</b>
              <br />
              Perfect for low to high retaining walls; height can be increased
              with proper reinforcement.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1"></span>
            <div>
              <b>Easy Installation</b>
              <br />
              Dry-stack system with no need for mortar, reducing construction
              time and labor costs.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1"></span>
            <div>
              <b>Aesthetic Versatility</b>
              <br />
              Available in various colors, textures, and finishes to suit
              architectural requirements.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1"></span>
            <div>
              <b>Reinforced Stability</b>
              <br />
              When combined with{" "}

                geogrid

              , Omega Blocks offer exceptional load-bearing capacity and
              resistance to movement.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1"></span>
            <div>
              <b>Durability</b>
              <br />
              Precast concrete units are resistant to weathering, freeze-thaw
              cycles, and erosion.
            </div>
          </li>
        </ul>
        <p className="mb-5 leading-relaxed mt-4">
          With a commitment to <b>excellence, durability, and visual impact</b>,{" "}
          <b>GEODUKE</b> is your trusted partner in delivering Omega Block Wall
          systems that stand the test of time.
        </p>
        <p className="mb-5 leading-relaxed">
          Block facing with geo-synthetic soil reinforcement.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="#" className="text-blue-600 underline">
              Construction Manual
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Specifications
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Drawings
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Typical Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Case Studies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SolutionTwo;
