"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      if (window.scrollY > 100) {
        setMounted(true);

        if (!visible) {
          timer = setTimeout(() => {
            setVisible(true);
          }, 500);
        }
      } else {
        if (timer) clearTimeout(timer);
        setVisible(false);
        setMounted(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <a
      href="#"
      className={`scroll_top ${visible ? "goto" : ""}`}
      aria-label="Scroll to top">
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
};

export default ScrollTop;
