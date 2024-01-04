'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import wyndham from '../../../../public/images/picwyn.jpg'
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css'
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import logowyn from 'public/images/logowyn.png'
import { data } from './data';

const CarouselSwiper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='container'>
            <Image alt={item.id} width={1900} height={1080} src={item.pic.src} />
            <div className="icon">
              <Image width={1000} height={950} src={item.icon.src} alt="" className='logoWynd' />
              <div className="hiddenText">
                {item.text.map((text, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: i * 0.1 }}>{`| ${text} |`}</motion.p>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSwiper
