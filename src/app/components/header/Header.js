"use client";
import React, { useState, useEffect } from "react";
import "./header.scss";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import ArrowUp from "../../svgs/ArrowUp";
import { roboto } from "../hero/Hero";

const Header = () => {
  const [show, setShow] = useState(false);

  const { scrollYProgress } = useScroll();

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      scrollYProgress.clearListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <div className={`header ${roboto.className}`}>
        <div className="m-auto text-sm header__menu sm:w-11/12">
          <div className="header__menu__left ">
            <a onClick={() => goTo("home")} className="hover">
              home
            </a>
            <Link href="#" className="logo hover">
              {/* Your logo SVG */}
            </Link>
            <a href="#about" className="hover scroll-smooth">
              about
            </a>
          </div>
          <div className="header__menu__right ">
            <a href="#work" className="hover">
              work
            </a>

            <div className="relative flex flex-col items-center justify-center">
              <ArrowUp color={"fill-black"} show={show} />
              <a href="#connect" className="hover">
                connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
