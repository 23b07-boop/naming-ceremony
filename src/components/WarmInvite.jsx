import React, { useRef, useEffect, useState } from 'react';
import './WarmInvite.css';

/* Pink bow as a React component */
const Bow = () => (
  <svg className="warm-invite__bow" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 36 C40 20, 5 10, 5 36 C5 55, 40 52, 60 36Z"  fill="#d98b8b" opacity="0.9"/>
    <path d="M60 36 C80 20, 115 10, 115 36 C115 55, 80 52, 60 36Z" fill="#d98b8b" opacity="0.9"/>
    <path d="M60 36 C48 44, 38 62, 50 68 C58 72, 60 52, 60 36Z"   fill="#c47070" opacity="0.8"/>
    <path d="M60 36 C72 44, 82 62, 70 68 C62 72, 60 52, 60 36Z"   fill="#c47070" opacity="0.8"/>
    <circle cx="60" cy="36" r="9" fill="#e8a8a8"/>
  </svg>
);

const WarmInvite = () => {
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
    <section className="warm-invite" ref={ref}>
      <div className={`warm-invite__card sage-card ${visible ? 'is-visible' : ''}`}>
        <Bow />
        <h2 className="warm-invite__heading">Warm Invite</h2>
        <p className="warm-invite__body">
          With hearts overflowing with gratitude and joy, Mr &amp; Mrs Nair joyfully invite
          you to the naming ceremony of their little blessing. Come, celebrate this
          beautiful milestone with us, and shower our little Vihaan with your warmest
          wishes and love. Your presence will make this day even more special and
          memorable for our entire family.
        </p>
      </div>
    </section>
  );
};

export default WarmInvite;
