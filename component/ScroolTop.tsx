"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a className="scroll_top goto" href="#banner">
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
};

export default ScrollTop;
