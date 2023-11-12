// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import Screenshot_1 from "../../assets/element-x/screenshots/screenshot_1.jpg"
import Screenshot_2 from "../../assets/element-x/screenshots/screenshot_2.jpg"
import Screenshot_3 from "../../assets/element-x/screenshots/screenshot_3.jpg"
import Screenshot_4 from "../../assets/element-x/screenshots/screenshot_4.jpg"
import Screenshot_5 from "../../assets/element-x/screenshots/screenshot_5.jpg"
import Screenshot_6 from "../../assets/element-x/screenshots/screenshot_6.jpg"
import Screenshot_7 from "../../assets/element-x/screenshots/screenshot_7.jpg"


function ScreenshotCarousel() {
  return (
    <div className="flex justify-center">
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
      </Swiper>
    </div>
  );
}

export default ScreenshotCarousel