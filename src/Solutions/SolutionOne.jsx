import React from "react";
import GoalImage from "../assets/Solutions/Picture1.png";
import Image from "../assets/Solutions/Picture2.png";
const SolutionOne = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            src={GoalImage}
            alt="About Two"
            className="object-cover shadow-lg w-full md:h-[485px] h-auto  rounded"
          />
          <img
            src={Image}
            alt="About Two"
            className="object-cover shadow-lg w-full h-auto rounded"
          />
        </div>
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
          1- Strengthened Soil Walls
        </h2>
        <p className="mb-5 leading-relaxed ">
          Strengthened Soil Walls are modern retaining systems designed to
          support earth masses in a wide range of civil, commercial, and
          infrastructure projects. These systems combine compacted granular
          backfill with layers of high-tensile reinforcements—such as geogrids ,
          steel strips, or geotextiles —to create a stable and durable structure
          that can withstand significant vertical and lateral loads.
          <br />
          <br />
          These systems use layers of engineered backfill and high-strength
          reinforcements (such as geogrids , Geostrips or steel strips),
          combined with durable facing elements, to create retaining structures
          capable of withstanding significant loads and harsh environmental
          conditions.
        </p>
        <b>Our MSE walls are ideal for:</b>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Highway and Roadway Support:</b> Retaining walls, bridge
            abutments, and grade separations
          </li>
          <li>
            <b>Railway Infrastructure:</b> Embankment support and track
            stabilization
          </li>
          <li>
            <b>Residential & Commercial Sites:</b> Decorative or structural
            walls for landscaping and property development
          </li>
          <li>
            <b>Industrial & Utility Projects:</b> Retaining walls for storage
            yards, treatment plants, or substations
          </li>
          <li>
            <b>Flood & Coastal Protection:</b> Walls designed to handle
            hydrodynamic loading and erosion resistance
          </li>
        </ul>
        <p className="mb-5 leading-relaxed mt-4">
          We customize each wall system to meet site-specific requirements,
          including geometry, loading conditions, aesthetic preferences, and
          environmental considerations. With benefits such as cost efficiency,
          rapid construction, modular design, and long-term durability, our MSE
          wall solutions are a smart choice for modern civil engineering
          challenges.
        </p>
        <p className="mb-5 leading-relaxed">
          Pre-cast panel facing with galvanized steel or geo-synthetic soil
          reinforcement.
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

export default SolutionOne;
