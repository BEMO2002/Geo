import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay , FreeMode} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import saudi from "../assets/who we are/sar.jpg"
const images = [
  '/Saudi Arabia/saudia (1).png ',
  '/Saudi Arabia/saudia (2).png',
  '/Saudi Arabia/saudia (3).png',
  '/Saudi Arabia/saudia (4).png',
  '/Saudi Arabia/saudia (5).png',
  '/Saudi Arabia/saudia (6).png',
  '/Saudi Arabia/saudia (7).png',
  '/Saudi Arabia/saudia (8).png',
  '/Saudi Arabia/saudia (9).png',
  '/Saudi Arabia/saudia (10).png',
  '/Saudi Arabia/saudia (11).png',
  '/Saudi Arabia/saudia (12).png',
  '/Saudi Arabia/saudia (13).png',
  '/Saudi Arabia/saudia (14).png',
]

const SliderOne = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-2">
      <div className='flex items-center justify-center gap-3 mb-8'>
        <img src={saudi} alt=""  className=''/>
      <h2 className="text-center font-bold text-2xl md:text-3xl ">(Saudi Arabia)</h2>
      </div>
      <Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  freeMode={true}
  speed={1850}
  loopedSlides={images.length}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  spaceBetween={12}
  slidesPerView={1}
  breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-50 sm:h-48 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center p-1">
              <img 
                src={img} 
                alt={`Saudi Arabia ${idx + 1}`} 
                className=" object-contain  bg-white"
                style={{ display: 'block' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderOne