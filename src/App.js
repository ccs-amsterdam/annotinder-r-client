import React, { useState, useEffect } from "react";
import { AnnotatorRClient } from "ccs-annotator-client";
import "style.css";

const App = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: document.documentElement.clientWidth,
  });

  useEffect(() => {
    // use window.innerHeight for height, because vh on mobile is weird (can include the address bar)
    // use document.documentElement.clientwidth for width, to exclude the scrollbar
    const onResize = () => {
      setSize({
        height: window.innerHeight,
        width: document.documentElement.clientWidth,
      });
    };
    window.addEventListener("resize", onResize);
    window.screen.orientation.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.screen.orientation.removeEventListener("change", onResize);
    };
  });

  return (
    <div style={{ height: `${size.height}px`, width: `${size.width}px` }}>
      <AnnotatorRClient />
    </div>
  );
};

export default App;
