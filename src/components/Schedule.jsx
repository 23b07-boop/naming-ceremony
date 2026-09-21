import React, { useRef, useState } from 'react';
import './Schedule.css';

/* ── Decorative SVG Elements matching reference screenshot ── */
const TopLeftBranch = () => (
  <svg className="schedule__decor schedule__decor--top-left" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 C40 40, 70 80, 100 130" stroke="#b495be" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 20 C50 10, 80 15, 95 30 C80 50, 50 45, 20 20Z" fill="#b495be" opacity="0.85" />
    <path d="M45 55 C75 40, 110 50, 125 70 C105 85, 75 80, 45 55Z" fill="#b495be" opacity="0.85" />
    <path d="M70 90 C100 80, 135 95, 145 115 C125 130, 95 120, 70 90Z" fill="#b495be" opacity="0.85" />
  </svg>
);

const BottomRightBranch = () => (
  <svg className="schedule__decor schedule__decor--bottom-right" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M180 240 C140 180, 100 100, 60 0" stroke="#b495be" strokeWidth="4" strokeLinecap="round" />
    <path d="M160 210 C120 180, 80 190, 60 215 C90 235, 130 230, 160 210Z" fill="#b495be" opacity="0.8" />
    <path d="M125 150 C85 110, 40 130, 15 155 C50 175, 95 165, 125 150Z" fill="#b495be" opacity="0.8" />
    <path d="M90 90 C50 60, 10 75, -10 100 C20 120, 65 110, 90 90Z" fill="#b495be" opacity="0.8" />
    <path d="M65 30 C35 10, 0 20, -20 40 C10 60, 45 50, 65 30Z" fill="#b495be" opacity="0.8" />
  </svg>
);

const PinkFlower = ({ className }) => (
  <svg className={`schedule__flower ${className}`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 40 C30 20, 30 0, 40 0 C50 0, 50 20, 40 40Z" fill="#e8b5b5" opacity="0.85" />
    <path d="M40 40 C60 30, 80 30, 80 40 C80 50, 60 50, 40 40Z" fill="#e8b5b5" opacity="0.85" />
    <path d="M40 40 C50 60, 50 80, 40 80 C30 80, 30 60, 40 40Z" fill="#e8b5b5" opacity="0.85" />
    <path d="M40 40 C20 50, 0 50, 0 40 C0 30, 20 30, 40 40Z" fill="#e8b5b5" opacity="0.85" />
    <path d="M40 40 C55 25, 70 15, 65 25 C60 35, 45 45, 40 40Z" fill="#e2a3a3" opacity="0.75" />
    <path d="M40 40 C25 55, 15 70, 25 65 C35 60, 45 45, 40 40Z" fill="#e2a3a3" opacity="0.75" />
    <circle cx="40" cy="40" r="5" fill="#d48a8a" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
  </svg>
);

const Bow = () => (
  <svg className="schedule__bow-img" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Loop */}
    <path d="M70 45 C45 25, 10 15, 10 45 C10 70, 45 65, 70 45Z" fill="#f5b3b3" opacity="0.95"/>
    <path d="M68 45 C48 30, 20 22, 20 45 C20 62, 48 58, 68 45Z" fill="#fbc5c5" opacity="0.7"/>
    {/* Right Loop */}
    <path d="M70 45 C95 25, 130 15, 130 45 C130 70, 95 65, 70 45Z" fill="#f5b3b3" opacity="0.95"/>
    <path d="M72 45 C92 30, 120 22, 120 45 C120 62, 92 58, 72 45Z" fill="#fbc5c5" opacity="0.7"/>
    {/* Ribbon Tails */}
    <path d="M70 45 C55 58, 40 80, 52 88 C62 92, 68 68, 70 45Z" fill="#e69c9c"/>
    <path d="M70 45 C85 58, 100 80, 88 88 C78 92, 72 68, 70 45Z" fill="#e69c9c"/>
    {/* Center Knot */}
    <ellipse cx="70" cy="45" rx="10" ry="11" fill="#f7c8c8"/>
    <ellipse cx="70" cy="45" rx="7" ry="8" fill="#f5b3b3"/>
  </svg>
);

const EVENTS = [
  { time: '10:30 am', label: 'Welcome & Gathering' },
  { time: '11:00 am', label: 'Namakarana Pooja' },
  { time: '11:45 am', label: 'Blessings & Celebration' },
  { time: '12:30 pm', label: 'Lunch Reception' },
];

const Schedule = () => {
  const [idx, setIdx] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 708; // card width (680) + gap (28)
      const newIdx = Math.round(scrollLeft / cardWidth);
      setIdx(Math.min(Math.max(newIdx, 0), EVENTS.length - 1));
    }
  };

  const scrollTo = (index) => {
    if (sliderRef.current) {
      const cardWidth = 708;
      sliderRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setIdx(index);
    }
  };

  return (
    <section className="schedule">
      {/* Decorative florals matching reference */}
      <TopLeftBranch />
      <BottomRightBranch />
      <PinkFlower className="schedule__flower--top-right" />
      <PinkFlower className="schedule__flower--bottom-left" />
      <PinkFlower className="schedule__flower--bottom-right" />

      {/* Faint stars in background */}
      <StarIcon className="schedule__bg-star schedule__bg-star--1" />
      <StarIcon className="schedule__bg-star schedule__bg-star--2" />

      <h2 className="schedule__title">Schedule</h2>

      <div className="schedule__carousel-wrapper">
        <div 
          className="schedule__slider" 
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {EVENTS.map((ev, i) => (
            <div key={i} className={`schedule__slide ${idx === i ? 'is-active' : ''}`}>
              <div className="schedule__card">
                <StarIcon className="schedule__card-star schedule__card-star--left" />
                <StarIcon className="schedule__card-star schedule__card-star--right" />
                <Bow />
                <h3 className="schedule__label">{ev.label}</h3>
                <p className="schedule__time">{ev.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule__dots">
        {EVENTS.map((_, i) => (
          <button
            key={i}
            className={`schedule__dot ${idx === i ? 'active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Schedule;
