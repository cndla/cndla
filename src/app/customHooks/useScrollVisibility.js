import React, { useEffect, useState } from "react";

const useScrollVisibility = (timeoutDuration = 300) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [timeoutDuration]);

  return isVisible;
};

export default useScrollVisibility;