/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ThreeBG from "./components/ThreeBG";
import MobileView from "./components/MobileView";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Navbar />
          <ThreeBG />
        </>
      )}
    </div>
  );
};

export default App;