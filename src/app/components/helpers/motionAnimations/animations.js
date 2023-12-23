export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
      type: "tween",
      staggerChildren: 0.5,
      staggerDirection: -1,
      when: "beforeChildren",
      stagger: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType: "reverse",
      yoyo: true,
      yoyoEase: "easeInOut",
      yoyoDuration: 0.5,
    },
  },
};
