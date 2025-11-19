
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css';





// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src="/src/assets/hero-image.jpg"  // ✅ Fixed: Put in /public folder
            alt="Hero 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src="/src/assets/hero-image2.jpg"
            alt="Hero 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src="/src/assets/hero-image3.jpg"
            alt="Hero 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src="/src/assets/hero-image4.jpg"
            alt="Hero 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src="/src/assets/hero-image5.jpg"
            alt="Hero 5"
          />
        </SwiperSlide>
      </Swiper>


    </div>
  );
};

export default Slider;
