'use client'
import React, { useState, useEffect } from 'react';
import './header.scss';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import ArrowUp from '../../svgs/ArrowUp';

const Header = () => {
  const [show, setShow] = useState(false)


  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (scrollYProgress > 200) {
      setShow(true)
    }
  }, [scrollYProgress, show]);

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <AnimatePresence>
      <div className="header">
        <div className="header__menu">
          <div className="header__menu__left ">
            <a onClick={() => goTo('home')} className="hover">
              home
            </a>
            <Link href="#" className="logo hover">
              {/* Your logo SVG */}
            </Link>
            <a href='#about' className="hover scroll-smooth">
              about
            </a>
          </div>
          <div className="header__menu__right ">
            <a href='#work' className="hover">
              work
            </a>

            <ArrowUp color={"text-black"} show={show} />
            <a href='#connect' className="hover">
              connect
            </a>
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
