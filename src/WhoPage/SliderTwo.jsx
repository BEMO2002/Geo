import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay , FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import us from "../assets/who we are/usd.jpg"
const images = [
    '/us/Picture18.png',
    '/us/Picture19.png',
    '/us/Picture20.png',
    '/us/Picture21.png',
  ]
const SliderTwo = () => {
    return (
        <div className="w-full max-w-6xl mx-auto py-4 px-2 pt-30">
                <div className='flex items-center justify-center gap-3 mb-8'>
        <img src={us} alt=""  className=''/>
      <h2 className="text-center font-bold text-2xl md:text-3xl ">(United States)</h2>
      </div>
        
          <Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  freeMode={true}
  speed={1800}
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
    1024: { slidesPerView: 3 }
  }}
>
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-50 sm:h-50 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center p-1">
                  <img 
                    src={img} 
                    alt={`Saudi Arabia ${idx + 1}`} 
                    className=" object-contain w-40 bg-white"
                    style={{ display: 'block' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )
}

export default SliderTwo