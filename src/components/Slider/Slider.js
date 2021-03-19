import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = (props) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={props.loop}
        pagination={props.pagination}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.50": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@2.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {props.images.map((el, index) => (
          <SwiperSlide key={index} className="py-4">
            <div>
              <img key={index} src={el} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
