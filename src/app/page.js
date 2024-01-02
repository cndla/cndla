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

export const metadata = {
  title: "Cndla Collective",
  description: "",
};

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <Presentation />
        <Hero />
        <OurServices />
        <WeAreProud />
        <UnderOneRoof />
        <WeBelive />
        <CarouselSwiper />

        <Lab />
        <Consorcio />
        <OnFire />
        <Contacto />

      </main>
    </div>
  );
}
