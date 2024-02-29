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
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

// export const metadata = {
//   title: "Cndla Collective",
//   description: "",
// };

export default function Home() {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('fill-white')
  const { scrollY } = useScroll()



  useEffect(() => {
    const handleScroll = (latest) => {
      if (latest > 6240) {
        setShow(true);
      } else {
        setShow(false);
      }
      if (latest > 16421 && latest < 17981 || latest > 20984 && latest < 22064) {
        setColor('fill-black');
      } else {
        setColor('fill-white');
      }
    };

    // Subscribe to scroll events
    scrollY.on("change", handleScroll);

    // Cleanup function to unsubscribe on unmount
    // return () => scrollY.off("change", handleScroll);
  }, [scrollY]); // Add scrollY as a dependency

  const scrollRef = useRef(null);



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
        <div className="relative">
          <div className="fixed bottom-24 right-24 ">
            <ArrowUp show={show} color={color} />
          </div>
          <Consorcio />
          <OnFire />
          <YourMoment />
          <Contacto />
        </div>

      </main>
    </div>
  );
}
