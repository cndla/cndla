'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import wyndham from '../../../../public/images/WYNDHAM.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css'
import { Navigation } from 'swiper/modules';
import Image from 'next/image';


const CarouselSwiper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><div className='container'><Image alt='wyndham' width={1900} height={1080} src={wyndham.src} />
        <div className="text">
          <div className="textLeft">
            <p>| engagement strategy |</p>
            <p>| content production |</p>
          </div>
          <div className="textRight">
            <p>| social media | paid media</p>
            <p>| brand experience |</p>
          </div>
        </div></div></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default CarouselSwiper
