import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import image1 from "../assets/home/whygeo.png";
import image2 from "../assets/home/Project.png";
import image3 from "../assets/home/Picture1.png";
import image4 from "../assets/home/serv.png";
import shape from "../assets/home/shape-1.png";
// import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
import { Link } from "react-router-dom";
const ProfessionalCarousel = ({ items, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setTimeout(goToNext, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative w-full h-[90vh] max-h-screen overflow-hidden  md:mt-0 z-20 "
      onMouseEnteroverflow-hidden={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={shape}
              alt=""
              className="absolute -top-20 left-0 inset-0 opacity-30 rotate-180 hidden md:block"
            />
            <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
              <div className="w-full max-w-[1500px] mx-auto px-2 md:px-4 py-6 md:py-12">
                <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-12">
                  {/* Text Section */}
                  <div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="max-w-full lg:w-1/2 z-50 relative"
                  >
                    {/* الأسهم فوق التيكست */}
                    <div className="absolute top-0 left-0 flex flex-row gap-2 items-center z-10">
                      <button
                        onClick={goToPrev}
                        className="p-2 md:p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
                        aria-label="Previous slide"
                      >
                        <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="p-2 md:p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
                        aria-label="Next slide"
                      >
                        <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                    <div className="pt-12 md:pt-14">
                      {" "}
                      {/* Add padding to avoid overlap with arrows */}
                      {item.paragraph && (
                        <h2 className="text-xl md:text-3xl lg:text-6xl font-semibold mb-2 md:mb-4 text-black leading-tight break-words">
                          {item.paragraph}
                        </h2>
                      )}
                      {item.title && (
                        <h3 className="md:text-xl lg:text-4xl mb-1 md:mb-2 text-primary break-words">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="text-sm md:text-xl w-full max-w-xs md:max-w-md text-black mb-4 md:mb-6 leading-6 md:leading-7 break-words">
                          {item.description}
                        </p>
                      )}
                      {item.cta && item.href ? (
                        <Link
                          to={item.href}
                          className="relative inline-block my-2 md:my-4 md:px-12 px-4 md:py-6 py-2 text-center border-2 border-black text-sm md:text-lg tracking-wider text-black no-underline font-bold cursor-pointer transition-all duration-500 ease-out shadow-[inset_0_0_0_0_#000] hover:text-white hover:shadow-[inset_0_-100px_0_0_#000] active:scale-90"
                        >
                          {item.cta}
                          <TfiArrowTopRight className="inline-block ml-2 text-lg md:text-xl" />
                        </Link>
                      ) : item.cta ? (
                        <button className="relative inline-block my-2 md:my-4 md:px-12 px-4 md:py-6 py-2 text-center border-2 border-black text-sm md:text-lg tracking-wider text-black no-underline font-bold cursor-pointer transition-all duration-500 ease-out shadow-[inset_0_0_0_0_#000] hover:text-white hover:shadow-[inset_0_-100px_0_0_#000] active:scale-90">
                          {item.cta}
                          <TfiArrowTopRight className="inline-block ml-2 text-lg md:text-xl" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="max-w-full lg:w-1/2 relative mt-4 md:mt-0"
                  >
                    <div className="relative w-[80vw] max-w-xs h-[80vw] max-h-xs md:w-full md:h-[400px] flex items-center justify-center mx-auto">
                      <img
                        src={item.image}
                        alt={item.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              index === currentIndex
                ? "bg-red-600 w-4 md:w-6"
                : "bg-red-500 hover:bg-red-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const Slider = () => {
  const carouselItems = [
    {
      id: 1,
      image: image1,
      paragraph: "WHY GEODUKE?",
      title:
        "We're built on nearly 20 years of success in the wider Gulf region.",
      description:
        "GEODUKE  is a regional leader in engineered retaining wall systems, serving Saudi Arabia and the wider Gulf region. We provide innovative, durable, and cost-effective solutions using modern mechanical stabilization techniques and high-quality Retaining Walls, Precast Concrete Arches, Omega Walls, and Large Block Wall systems. We deliver smart, sustainable solutions tailored for the future of construction in Saudi Arabia and beyond.",
      cta: "Explore Now",
      href: "/projects",
    },
    {
      id: 2,
      image: image2,
      paragraph: "PROJECT MANAGEMENT",
      title: "Let’s lay the foundation for the future. ",
      description:
        "GEODUKE support project management team enables clients to focus on their core business, with the assurance that their project goals will be successfully taken care. We ensure that a qualified and dedicated team of professionals is assembled to suit the specific project needs. We then provide a focal point for the client, ensuring clear communication, overall quality control, and simplified project administration.",
      cta: "View Projects",
      href: "/projects",
    },
    {
      id: 3,
      image: image3,
      paragraph: "CAREERS",
      title: "Build the future with GEODUKE ",
      description:
        "Join GEODUKE and be part of shaping the future through transformative infrastructure and construction projects that make a lasting impact.",
      cta: "Explore Careers",
      href: "/who",
    },
    {
      id: 4,
      image: image4,
      paragraph: "MSE WALL SOLUTIONS",
      title: "From concept to completion, we deliver strength and reliability.",
      description:
        "GEODUKE specializes in the supply, design, and installation of Mechanically Stabilized Earth (MSE) walls, offering end-to-end solutions for our projects. ",
      cta: "Explore Services",
      href: "/services",
    },
  ];

  return (
    <div className="bg-secondary">
      <ProfessionalCarousel
        items={carouselItems}
        autoPlay={true}
        interval={6000}
      />
    </div>
  );
};

export default Slider;
