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



export default function Home() {
  return (
    <div className="">
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

      </main>
    </div>
  );
}
