import React, { useState, useEffect } from 'react';
import butterflyImg from '../assets/butterfly.png';
import './PetalsAndSparkles.css';

/* Large Animated Background Flower SVG */
const LargeAnimatedFlower = () => (
  <svg viewBox="0 0 60 60" width="46" height="46">
    {/* Outer Petals */}
    <path d="M30 30 C20 10, 20 -5, 30 -5 C40 -5, 40 10, 30 30Z" fill="#dcaee5" opacity="0.85" />
    <path d="M30 30 C50 20, 65 20, 65 30 C65 40, 50 40, 30 30Z" fill="#dcaee5" opacity="0.85" />
    <path d="M30 30 C40 50, 40 65, 30 65 C20 65, 20 50, 30 30Z" fill="#dcaee5" opacity="0.85" />
    <path d="M30 30 C10 40, -5 40, -5 30 C-5 20, 10 20, 30 30Z" fill="#dcaee5" opacity="0.85" />
    {/* Inner Petal Highlights */}
    <path d="M30 30 C24 15, 24 5, 30 5 C36 5, 36 15, 30 30Z" fill="#edd6f7" opacity="0.7" />
    <path d="M30 30 C45 24, 55 24, 55 30 C55 36, 45 36, 30 30Z" fill="#edd6f7" opacity="0.7" />
    <path d="M30 30 C36 45, 36 55, 30 55 C24 55, 24 45, 30 30Z" fill="#edd6f7" opacity="0.7" />
    <path d="M30 30 C15 36, 5 36, 5 30 C5 24, 15 24, 30 30Z" fill="#edd6f7" opacity="0.7" />
    {/* Center Golden Stamen */}
    <circle cx="30" cy="30" r="7" fill="#f5ce76" />
    <circle cx="30" cy="30" r="4" fill="#e0ad38" />
  </svg>
);

const PetalsAndSparkles = () => {
  const [trail, setTrail] = useState([]);
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 60) {
        lastTime = now;
        const newSparkle = {
          id: `${now}-${Math.random()}`,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 6,
        };
        setTrail((prev) => [...prev.slice(-15), newSparkle]);
      }
    };

    const handleClick = (e) => {
      const now = Date.now();
      const newBurst = [...Array(4)].map((_, i) => {
        const angle = i * 90 + Math.random() * 30;
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * 45;
        const ty = Math.sin(rad) * 45;
        return {
          id: `burst-${now}-${i}`,
          x: e.clientX,
          y: e.clientY,
          tx: `${tx.toFixed(1)}px`,
          ty: `${ty.toFixed(1)}px`,
        };
      });
      setBursts((prev) => [...prev.slice(-10), ...newBurst]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="petals-sparkles-container" aria-hidden="true">
      {/* Background Large Animated Floating Flowers */}
      {[...Array(10)].map((_, i) => (
        <div key={`flower-${i}`} className="floating-flower floating-flower--large">
          <LargeAnimatedFlower />
        </div>
      ))}

      {/* Background Floating Petals */}
      {[...Array(12)].map((_, i) => (
        <div key={`petal-${i}`} className={`floating-petal petal-${i % 4}`}>
          <svg viewBox="0 0 30 30" width="18" height="18">
            <path
              d="M15 0 C22 10 30 18 15 30 C0 18 8 10 15 0 Z"
              fill="rgba(232, 160, 160, 0.55)"
            />
          </svg>
        </div>
      ))}

      {/* Floating Golden Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div key={`sparkle-${i}`} className="floating-sparkle">
          <svg viewBox="0 0 24 24" width="12" height="12">
            <polygon
              points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9"
              fill="#d4af37"
              opacity="0.75"
            />
          </svg>
        </div>
      ))}

      {/* Floating Butterflies (Right-side background flight) */}
      {[...Array(5)].map((_, i) => (
        <div key={`butterfly-${i}`} className={`floating-butterfly butterfly-${i}`}>
          <img src={butterflyImg} alt="" />
        </div>
      ))}

      {/* Interactive Cursor Trail Sparkles */}
      {trail.map((sp) => (
        <div
          key={sp.id}
          className="cursor-sparkle"
          style={{
            left: `${sp.x}px`,
            top: `${sp.y}px`,
            width: `${sp.size}px`,
            height: `${sp.size}px`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Click Petal Bursts */}
      {bursts.map((b) => (
        <div
          key={b.id}
          className="click-burst-petal"
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`,
            '--tx': b.tx,
            '--ty': b.ty,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default PetalsAndSparkles;
