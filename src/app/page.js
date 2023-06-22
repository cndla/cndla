import Image from "next/image";
import Presentation from "./components/presentation/Presentation";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import OurServices from "./components/ourServices/OurServices";

export default function Home() {
  return (
    <main>
    <Presentation/>
    <Header/>
    <Hero/>
    <OurServices/>
    </main>
  
  );
}
