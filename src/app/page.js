"use client";
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
import "./components/work/work.scss";
import CarouselSwiper from "./components/carousel/CarouselSwiper";
import HorizontalScroll from "./components/horizontalScroll/HorizontalScroll";
import YourMoment from "./components/yourMoment/YourMoment";
import "./input.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CNDLA</title>
        <meta property="og:title" content="CNDLA" key="title" />
        <meta property="og:url" content="https://imgur.com/a/c9KeWw7" />
        <meta property="og:image" content="https://imgur.com/a/c9KeWw7" />
        <meta
          property="keywords"
          content="CNDLA, cndla, marketing, empresa, emprendedora, candela, saturno, web, web de marketing, diseño, diseño web, "
        />
        <meta
          property="og:description"
          content="Especialistas en marketing digital y estrategias creativas con enfoque global. Presencia en LATAM, USA y Europa. Impulsamos tu marca. ¡Contáctanos y descubre más!"
        />
      </Head>
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
    </>
  );
}
