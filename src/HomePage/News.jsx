import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import shape from "../assets/home/Picture3.png";
const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://geoduke.runasp.net/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#0a4267] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-[#0a4267] text-lg font-semibold">
          Loading news...
        </span>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 pt-20 relative">
<img
  src={shape}
  alt=""
  className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[700px] hidden md:block"
/>
      <div className="container mx-auto max-w-[1203px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-base">
             News
          </h2>
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
              <SwiperSlide key={item.slug}>
                <div className="bg-white rounded-[24px] shadow-[0px_4px_4px_0px_#DBE8E3] h-[400px] flex flex-col mb-2 border border-[#0a4267]/10">
                  <img
                    src={item.image?.url}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-[24px]"
                  />
                  <div className="p-4 text-left flex flex-col flex-grow">
                    <p className="text-sm text-[#444444] mb-2 font-semibold">
                      {formatDate(item.createdAt)}
                    </p>
                    <h3 className="text-lg font-bold mb-1 leading-snug line-clamp-2 text-[#444444]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#444444] mb-2 font-medium line-clamp-2">
                      {item.subTitle}
                    </p>
                    <button
                      className="w-full bg-primary text-white py-2 rounded-md hover:bg-white hover:text-[#0000] border border-primary transition duration-300 mt-auto font-semibold"
                      onClick={() => navigate(`/news/${item.slug}`)}
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
          className="swiper-nav-btn text-primary rounded-full border-2 border-primary  transition-all"
          onClick={goPrev}
        >
          <MdOutlineKeyboardArrowRight size={28} />
        </button>
        <button
          className="swiper-nav-btn text-primary rounded-full border-2 border-primary transition-all"
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
