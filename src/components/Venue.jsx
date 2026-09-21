import React, { useRef, useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="venue" id="venue" ref={ref}>
      <div className="container venue__grid">
        {/* Left: details */}
        <div className={`venue__details ${visible ? 'is-visible' : ''}`}>
          <h2 className="venue__name">Hall Complex</h2>
          <p className="venue__address">
            Hall Complex, 1st B Cross Road,<br />
            7th Block, Koramangala,<br />
            Bengaluru, Karnataka — 560 095
          </p>
          <a
            href="https://www.google.com/maps/place/Hall+Complex,+1st+B+Cross+Rd,+7th+Block,+Koramangala,+Bengaluru,+Karnataka+560095/@12.9360833,77.6137733,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae144e76d1776f:0x2d3ed90329432ab8!8m2!3d12.9360833!4d77.6137733!16s%2Fg%2F11bbrm3m0j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-dark venue__btn"
          >
            <MapPin size={16} strokeWidth={1.8} />
            Open in Maps
          </a>
        </div>

        {/* Right: circular image */}
        <div className={`venue__img-wrap ${visible ? 'is-visible' : ''}`}>
          <div className="venue__img-ring">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&h=600&q=80"
              alt="Venue hall"
              className="venue__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
