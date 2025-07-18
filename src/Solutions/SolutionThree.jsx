import React from "react";
import GoalImage from "../assets/Solutions/Picture6.png";
import Image from "../assets/Solutions/Picture7.png";
import ImageThree from "../assets/Solutions/Picture8.png";
import ImageFour from "../assets/Solutions/Picture9.png";
import ImageFive from "../assets/Solutions/Picture10.png";
const SolutionThree = () => {
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
            className="object-cover shadow-lg w-full md:h-[500px] h-auto rounded"
          />
          <img
            src={ImageThree}
            alt="About Two"
            className="object-cover shadow-lg w-full md:h-[500px] h-auto rounded"
          />
          <img
            src={ImageFour}
            alt="About Two"
            className="object-cover shadow-lg w-full md:h-[500px] h-[220px] rounded"
          />
          <img
            src={ImageFive}
            alt="About Two"
            className="object-cover shadow-lg w-full md:h-[500px] h-auto rounded"
          />
        </div>
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          3- Wire Walls (Gabion Wall)
        </h2>
        <p className="mb-5 leading-relaxed ">
          Structures designed to hold back soil or other materials, preventing
          erosion and providing support for slopes or embankments. These walls
          are constructed using wire mesh or welded wire forms filled with soil
          or other materials, often reinforced with geogrids . They offer a
          cost-effective and versatile solution for both temporary and permanent
          retaining wall applications.
        </p>
        <p className="mb-5 leading-relaxed">
          Temporary and permanent wire-based retaining walls.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="#" className="text-blue-600 underline">
              Two-Stage Walls
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Temporary Walls
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Permanent Green Walls
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SolutionThree;
