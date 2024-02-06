import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperComponents = ({ parallaxOffset }) => {
  return (
    <section className="lg:h-[80vh] h-[60vh] w-full object-contain">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-center bg-fixed object-contain">
          <img src="/main_visual2.jpg" alt="carousel" className="object-contain"/>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-fixed">
          <img src="/main_visual4.jpg" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-fixed">
          <img src="/main_visual6.jpg" alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponents;
