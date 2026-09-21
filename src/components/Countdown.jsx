import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

const pad = (n) => String(n).padStart(2, '0');

/* The event date — Sept 26 2026 at 11:45 AM */
const TARGET = new Date('2026-09-26T11:45:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isPast, setIsPast] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Intersection observer for reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* Live countdown tick */
  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        setIsPast(true);
        setTimeLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
        return;
      }
      setIsPast(false);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = timeLeft
    ? [
      { label: 'DAYS', value: pad(timeLeft.days) },
      { label: 'HRS', value: pad(timeLeft.hrs) },
      { label: 'MINS', value: pad(timeLeft.mins) },
      { label: 'SECS', value: pad(timeLeft.secs) },
    ]
    : [];

  return (
    <section className="countdown" ref={ref}>
      <h2 className={`countdown__heading ${visible ? 'is-visible' : ''}`}>
        {isPast ? 'The celebration has begun! 🎉' : 'Let the countdown begin'}
      </h2>

      {isPast && (
        <p className={`countdown__past-msg ${visible ? 'is-visible' : ''}`}>
          Thank you to everyone who joined us on this beautiful day.
        </p>
      )}

      <div className="countdown__badges">
        {units.map((u) => (
          <div key={u.label} className={`countdown__item ${visible ? 'is-visible' : ''}`}>
            <div className="countdown__circle">
              <span className="countdown__value">{u.value}</span>
            </div>
            <span className="countdown__label">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
