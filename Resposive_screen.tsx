import desktopImg;
import mobileImg;

function App() {

  const imageUrl = useWindowWidth() >= 650 ? desktopImg : mobileImg;
  
  return()
    ..
}

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
