// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

// Import images
import heroImage1 from '../assets/hero-image.jpg';
import heroImage2 from '../assets/hero-image2.jpg';
import heroImage3 from '../assets/hero-image3.jpg';
import heroImage4 from '../assets/hero-image4.jpg';
import heroImage5 from '../assets/hero-image5.jpg';

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
            src={heroImage1}
            alt="Hero 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src={heroImage2}
            alt="Hero 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src={heroImage3}
            alt="Hero 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src={heroImage4}
            alt="Hero 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            src={heroImage5}
            alt="Hero 5"
          />
        </SwiperSlide>
      </Swiper>


    </div>
  );
};

export default Slider;
