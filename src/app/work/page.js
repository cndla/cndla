'use client'
import { ParallaxProvider } from "react-scroll-parallax";
import WorkingList from "./workingWith/WorkingList";

export default function Home() {

  return (
    <ParallaxProvider>
      <main>
        <WorkingList />
      </main>
    </ParallaxProvider>
  );
}
