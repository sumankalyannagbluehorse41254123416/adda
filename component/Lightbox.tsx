"use client";

import { useEffect } from "react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[index];

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-content" onClick={(e) => e.stopPropagation()}>
        <div className="lb-inner">
          <button className="lb-close" onClick={onClose}>
            ✕
          </button>

          <img src={current} alt="" />

          {images.length > 1 && (
            <>
              <button className="lb-nav lb-prev" onClick={onPrev}>
                ‹
              </button>
              <button className="lb-nav lb-next" onClick={onNext}>
                ›
              </button>
            </>
          )}

          <div className="lb-counter">
            Image {index + 1} of {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
