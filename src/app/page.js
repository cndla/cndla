'use client'
import Presentation from "./components/presentation/Presentation";
import Hero from "./components/hero/Hero";
import OurServices from "./components/ourServices/OurServices";
import Lab from "./components/lab/Lab";
import Consorcio from "./components/consorcio/Consorcio";
import OnFire from "./components/onFire/OnFire";
import WeAreProud from "./components/weAreProud/WeAreProud";
import Contacto from "./components/contacto/Contacto";
import Header from "./components/header/Header";
import { UnderOneRoof } from "./components/underOneRoof/UnderOneRoof";
import WeBelive from "./components/weBelive/WeBelive";
import SmoothScroll from "./components/work/Work";
import './components/work/work.scss'
import CarouselSwiper from "./components/carousel/CarouselSwiper";
import HorizontalScroll from "./components/horizontalScroll/HorizontalScroll";
import YourMoment from "./components/yourMoment/YourMoment";
import ArrowUp from "./svgs/ArrowUp";
import { useEffect, useRef, useState } from "react";

// export const metadata = {
//   title: "Cndla Collective",
//   description: "",
// };

export default function Home() {
  const [showToTopArrow, setShowToTopArrow] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    setShowToTopArrow(scrollTop > 0); // Only show arrow when scrolled down
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {

      element.addEventListener('scroll', handleScroll);
    }
    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToTopClick = () => {
    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div ref={scrollRef}>
      <Header />
      <main>
        <Presentation />
        <Hero />
        <OurServices />
        <WeAreProud />
        <UnderOneRoof />
        <WeBelive />

        <HorizontalScroll />

        <Lab />
        <Consorcio />
        <OnFire />
        <YourMoment />
        <Contacto />
        {showToTopArrow && (
          <button
            className="back-to-top"
            onClick={handleToTopClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up"
            >
              <path d="M5 16L12 12L19 16" />
            </svg>
          </button>
        )}
      </main>
    </div>
  );
}
