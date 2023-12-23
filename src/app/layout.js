"use client";
import Header from "./components/header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });



export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReactLenis>
  );
}
