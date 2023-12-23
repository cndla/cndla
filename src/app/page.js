import Presentation from "./components/presentation/Presentation";
import Hero from "./components/hero/Hero";
import OurServices from "./components/ourServices/OurServices";
import Lab from "./components/lab/Lab";
import Consorcio from "./components/consorcio/Consorcio";
import OnFire from "./components/onFire/OnFire";
import WeAreProud from "./components/weAreProud/WeAreProud";
import Contacto from "./components/contacto/Contacto";
import Header from "./components/header/Header";

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
        <Lab />
        <Consorcio />
        <OnFire />
        <Contacto />
      </main>
    </div>
  );
}
