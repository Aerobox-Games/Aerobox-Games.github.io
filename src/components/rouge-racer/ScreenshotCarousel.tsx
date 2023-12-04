// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import Screenshot_1 from "../../assets/rogue-racer/screenshots/screenshot_1.png"
import Screenshot_2 from "../../assets/rogue-racer/screenshots/screenshot_2.jpg"
import Screenshot_3 from "../../assets/rogue-racer/screenshots/screenshot_3.png"
import Screenshot_4 from "../../assets/rogue-racer/screenshots/screenshot_4.png"
import Screenshot_5 from "../../assets/rogue-racer/screenshots/screenshot_5.png"
import Screenshot_6 from "../../assets/rogue-racer/screenshots/screenshot_6.png"
import Screenshot_7 from "../../assets/rogue-racer/screenshots/screenshot_7.png"
import Screenshot_8 from "../../assets/rogue-racer/screenshots/screenshot_8.png"


function ScreenshotCarousel() {
  return (
    <div className="flex justify-center rounded-xl lg:rounded-3xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoHeight={true}
        spaceBetween={10}
        centeredSlides={true}
        keyboard={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={Screenshot_1} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_2} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_3} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_4} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_5} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_6} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_7} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
        <SwiperSlide><img src={Screenshot_8} loading="lazy"/><div className="swiper-lazy-preloader"/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ScreenshotCarousel