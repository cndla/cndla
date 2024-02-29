import React, { useState, useEffect } from 'react';
import './header.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Check for scroll position on initial render and component updates
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const halfPageHeight = docHeight / 2;

      setShowScrollButton(scrollTop > halfPageHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pointer = { cursor: 'pointer' };

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
            <a onClick={() => goTo("about")} className="hover">
              about
            </a>
          </div>
          <div className="header__menu__right ">
            <a onClick={() => goTo("work")} className="hover">
              work
            </a>
            <a onClick={() => goTo("connect")} className="hover">
              connect
            </a>
          </div>
          {showScrollButton && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => goTo('top')}
              style={pointer}
              className="scroll-to-top fixed bottom-0 bg-red-800 border-red-50 z-50"
            >
              {/* Your up arrow icon */}
            </motion.button>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
