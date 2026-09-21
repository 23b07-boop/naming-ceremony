import React, { useState, useEffect } from 'react';
import babyFeetImg from '../assets/baby_feet.jpg';
import './OpeningCurtain.css';

const OpeningCurtain = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Scroll to top immediately when mounted and lock body scroll while curtain is active
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpenInvitation = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsAnimating(true);

    // Play high volume music
    window.__bgMusic?.play();

    // Trigger audio & confetti if callback provided
    if (onOpen) onOpen();

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.style.overflow = '';
      setIsOpen(true);
    }, 1300);
  };

  if (isOpen) return null;

  return (
    <div className={`opening-curtain-overlay ${isAnimating ? 'is-opening' : ''}`} role="dialog" aria-label="Invitation Cover Envelope">
      {/* Left Sliding Door */}
      <div className="curtain-door curtain-left">
        <div className="curtain-pattern" />
        <div className="curtain-gold-trim" />
      </div>

      {/* Right Sliding Door */}
      <div className="curtain-door curtain-right">
        <div className="curtain-pattern" />
        <div className="curtain-gold-trim" />
      </div>

      {/* Interactive 3D Envelope Card */}
      <div className="envelope-wrapper">
        <div className="envelope-card">
          <div className="envelope-top-flap">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <polygon points="0,0 250,140 500,0" fill="#b898bf" stroke="#9c7fa1" strokeWidth="2" />
            </svg>
          </div>

          <div className="envelope-body">
            <div className="envelope-teddy-badge">
              <img src={babyFeetImg} alt="Baby feet" className="envelope-teddy-img" />
            </div>

            <p className="envelope-sub">Mr &amp; Mrs Nair warmly invite you</p>
            <h1 className="envelope-title">Baby Naming Ceremony</h1>
            <p className="envelope-date">✨ 26th September 2026 ✨</p>

            <button
              type="button"
              className="envelope-open-btn"
              onClick={handleOpenInvitation}
            >
              <span className="wax-seal">✉️</span>
              <span className="btn-label">Tap to Open Invitation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningCurtain;

