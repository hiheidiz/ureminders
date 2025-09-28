import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate floating squares
    const squares = container.querySelectorAll('.floating-square');
    squares.forEach((square, index) => {
      gsap.to(square, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-15, 15),
        duration: () => gsap.utils.random(6, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 1
      });
    });

  }, []);

  return (
    <div className="animated-background" ref={containerRef}>
      {/* Floating squares with more variety */}
      <div className="floating-square square-1"></div>
      <div className="floating-square square-2"></div>
      <div className="floating-square square-3"></div>
      <div className="floating-square square-4"></div>
      <div className="floating-square square-5"></div>
      <div className="floating-square square-6"></div>
      <div className="floating-square square-7"></div>
    </div>
  );
};

export default AnimatedBackground;
