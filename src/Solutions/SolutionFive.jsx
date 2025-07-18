import React from "react";
import Picture16 from "../assets/Solutions/Picture17.png";
import Picture17 from "../assets/Solutions/Picture18.png";
import Picture18 from "../assets/Solutions/Picture19.png";
import Picture19 from "../assets/Solutions/Picture20.png";
import Picture20 from "../assets/Solutions/Picture21.png";
import Picture21 from "../assets/Solutions/Picture22.png";

const SolutionFive = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-8">
      <div className="text-base md:text-lg font-normal text-left">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4 text-left">
          5- GeoCell panels
        </h2>
        <p className="mb-2 leading-relaxed ">
          <b>
            <span className="text-black">GeoCell Panels</span>
          </b>{" "}
          are an innovative{" "}
          <a href="#" className="text-blue-600 underline">
            geosynthetic
          </a>{" "}
          solution used to improve soil stability, prevent erosion, and
          distribute loads over soft or unstable ground.
        </p>
        <p className="mb-2 leading-relaxed ">
          <b>GEODUKE</b> offers cutting-edge{" "}
          <a href="#" className="text-blue-600 underline">
            GeoCell
          </a>{" "}
          panel solutions that are made to enhance soil stabilization, erosion
          control, and load support.{" "}
          <a href="#" className="text-blue-600 underline">
            GeoCell
          </a>{" "}
          panels—also known as cellular confinement systems—are
          three-dimensional, honeycomb-like structures made from high-density
          polyethylene (HDPE). When expanded and filled with compacted material
          such as soil, gravel, or concrete, they form a stable and reinforced
          layer ideal for a wide range of civil and{" "}
          <a href="#" className="text-blue-600 underline">
            geotechnical
          </a>{" "}
          applications.
        </p>
        <p className="mb-2 leading-relaxed ">
          Made from high-density polyethylene (HDPE),{" "}
          <a href="#" className="text-blue-600 underline">
            GeoCell
          </a>{" "}
          panels form a <b>3D cellular confinement system</b> that, when
          expanded and filled with soil, gravel, or concrete, creates a strong
          and stable foundation. These panels are ideal for{" "}
          <b>
            s<strong>oil reinforcement, slope protection, load support,</strong>{" "}
            and <strong>erosion control</strong>
          </b>{" "}
          applications.
        </p>
      </div>
      {/* جدول الصور والوصف */}
      <div className="mt-10">
        <table className="min-w-full rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <tbody>
            <tr className=" border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture16}
                  alt="GeoCell Example 1"
                  className="w-full h-auto  object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              Base Stabilization: GeoCell can also be used to strengthen paved areas.
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture17}
                  alt="GeoCell Example 2"
                  className="w-full h-auto object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              Slope Reinforcement: GeoCell is a flexible system that will contour to the subgrade of a slope, reducing preparation time. 
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture18}
                  alt="GeoCell Example 2"
                  className="w-full h-auto object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              Channel Protection : GeoCell can be installed on slopes as steep as 60 degrees and on channels with flow velocities greater than 25 ft/s (7.6 m/s)
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture19}
                  alt="GeoCell Example 2"
                  className="w-full h-auto object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              Retaining Walls : GeoCell can be easily installed around curves, pipes or other structures.
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture20}
                  alt="GeoCell Example 2"
                  className="w-full h-auto object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              The GeoCell shall be a No. 4 (0.5 inch) steel reinforcing rod or 10-12 mm rod with an GeoCell Stake Clip attached as an end cap as shown on the Construction Drawings.  The GeoCell shall be assembled in the field by inserting the GeoCell Stake Clip onto the rod so that the end of the rod is flush with the top of the GeoCell Stake Clip.  
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-6 w-1/3 align-middle text-center border-r border-gray-200">
                <img
                  src={Picture21}
                  alt="GeoCell Example 2"
                  className="w-full h-auto object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="p-6 align-middle  text-base">
              The GeoCell Speed Stake shall be a one-piece injection, non-metallic molded anchor with integral flanged arms and barbs for durability of use in wet or corrosive environments. The length of the GeoCell Speed Stake shall be 16 in (407 mm) or 20 in (508 mm) as shown on the Construction Drawings.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolutionFive;
