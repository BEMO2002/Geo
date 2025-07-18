import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "swiper/css";
import new1 from "../assets/home/new1.webp";
import new2 from "../assets/home/new2.webp";
import new3 from "../assets/home/new3.webp";
import new4 from "../assets/home/new4.webp";
const newsItems = [
  {
    id: 1,
    image: new1,
    date: "2024-06-01T10:00:00Z",
    title: "New Project Launch",
    description: "A new project has been launched by the syndicate to improve services for members.",
  },
  {
    id: 2,
    image: new2,
    date: "2024-05-28T14:30:00Z",
    title: "Training Workshop",
    description: "A training workshop was held on the latest techniques in biochemistry.",
  },
  {
    id: 3,
    image: new3,
    date: "2024-05-20T09:00:00Z",
    title: "Cooperation Agreement Signed",
    description: "A cooperation agreement was signed with a leading company to enhance job opportunities for members.",
  },
  {
    id: 4,
    image: new4,
    date: "2024-05-15T16:45:00Z",
    title: "New Online Platform Launched",
    description: "A new online platform was launched to facilitate communication between syndicate members and management.",
  },
];

const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const News = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="px-4 sm:px-6 py-8 pt-20 relative">
      <div className="container mx-auto max-w-[1203px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-[#0a4267]">GeoDuke News</h2>
        </div>
       
        <div className="relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-[24px] shadow-[0px_4px_4px_0px_#DBE8E3] h-[400px] flex flex-col mb-2 border border-[#0a4267]/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-[24px]"
                  />
                  <div className="p-4 text-left flex flex-col flex-grow">
                    <p className="text-sm text-[#0a4267] mb-2 font-semibold">{formatDate(item.date)}</p>
                    <h3 className="text-lg font-bold mb-2 leading-snug line-clamp-2 text-[#0a4267]">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{item.description}</p>
                    <button
                      className="w-full bg-[#0a4267] text-white py-2 rounded-md hover:bg-white hover:text-[#0a4267] border border-[#0a4267] transition duration-300 mt-auto font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          className="swiper-nav-btn text-[#0a4267] rounded-full border-2 border-[#0a4267] transition-all"
          onClick={goPrev}
        >
          <MdOutlineKeyboardArrowRight size={28} />
        </button>
        <button
          className="swiper-nav-btn text-[#0a4267] rounded-full border-2 border-[#0a4267] transition-all"
          onClick={goNext}
        >
          <MdOutlineKeyboardArrowLeft size={28} />
        </button>
      </div>
      <style jsx>{`
        .swiper-nav-btn {
          background: none;
          cursor: pointer;
          line-height: 1;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default News;