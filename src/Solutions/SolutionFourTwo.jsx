import React from 'react'
import ImageFour from "../assets/Solutions/Picture14.png";
import ImageFive from "../assets/Solutions/Picture15.png";
import ImageSix from "../assets/Solutions/Picture16.png";
const SolutionFourTwo = () => {
  return (
<div className="container mx-auto flex flex-col-reverse items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
    {/* Left Side: Image */}
    <div className="flex-1 flex justify-center mb-6 md:mb-0">
      <div className="grid grid-cols-2 gap-4 w-full">

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
      <img
        src={ImageSix}
        alt="About Two"
        className="object-cover shadow-lg w-full md:h-[500px] h-auto rounded"
      />
      </div>
    </div>
    {/* Right Side: Text */}
    <div className="flex-1  text-base md:text-lg font-normal">
      <p className="mb-5 leading-relaxed ">
      Construction starts with the installation of cast-in-place or precast footings on both sides. The arch units are set and grouted along the footing keyway in a staggered pattern. After the third unit is set, the arches are self-supported during the remainder of construction. 
      </p>
      <p className="mb-5 leading-relaxed ">
      Geotextile or geomembrane is applied to the joints as designed. The crown beam is cast along the top of the arch, locking both sides together. MSE headwalls or wing walls are then installed as designed.
      </p>
    </div>
  </div>
  )
}

export default SolutionFourTwo