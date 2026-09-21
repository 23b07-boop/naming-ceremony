import React, { useState, useRef, useEffect } from 'react';
import { Share2 } from 'lucide-react';
import './SendWishes.css';

const Bow = () => (
  <svg className="send-wishes__bow" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 36 C40 20, 5 10, 5 36 C5 55, 40 52, 60 36Z"  fill="#d98b8b" opacity="0.9"/>
    <path d="M60 36 C80 20, 115 10, 115 36 C115 55, 80 52, 60 36Z" fill="#d98b8b" opacity="0.9"/>
    <path d="M60 36 C48 44, 38 62, 50 68 C58 72, 60 52, 60 36Z"   fill="#c47070" opacity="0.8"/>
    <path d="M60 36 C72 44, 82 62, 70 68 C62 72, 60 52, 60 36Z"   fill="#c47070" opacity="0.8"/>
    <circle cx="60" cy="36" r="9" fill="#e8a8a8"/>
  </svg>
);

const SendWishes = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && wish.trim()) {
      setSent(true);
      setName('');
      setWish('');
      setTimeout(() => setSent(false), 3500);
    }
  };

  return (
    <section className="send-wishes" ref={ref} style={{ position: 'relative' }}>
      {/* Floating hearts background */}
      <div className="send-wishes__hearts" aria-hidden="true">
        <span className="send-wishes__heart">💜</span>
        <span className="send-wishes__heart">💗</span>
        <span className="send-wishes__heart">✨</span>
        <span className="send-wishes__heart">💜</span>
        <span className="send-wishes__heart">💗</span>
        <span className="send-wishes__heart">✨</span>
      </div>

      <div className="container send-wishes__grid">

        {/* Title */}
        <div className={`send-wishes__label ${visible ? 'is-visible' : ''}`}>
          <h2 className="send-wishes__title">Send your wishes</h2>
        </div>

        {/* Arch-form card */}
        <div className={`send-wishes__card arch-card ${visible ? 'is-visible' : ''}`}>
          <Bow />

          {sent ? (
            <div className="send-wishes__success">
              <span>🎉</span>
              <p>Thank you! Your wish has been sent.</p>
            </div>
          ) : (
            <form className="send-wishes__form" onSubmit={handleSubmit}>
              <div className="send-wishes__field">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="send-wishes__input"
                  required
                />
              </div>
              <div className="send-wishes__field send-wishes__field--ta">
                <textarea
                  placeholder="Your Wishes"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  className="send-wishes__input send-wishes__textarea"
                  required
                ></textarea>
                <button type="button" className="send-wishes__share" aria-label="Share">
                  <Share2 size={16} strokeWidth={1.8} />
                </button>
              </div>
              <button type="submit" className="send-wishes__submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SendWishes;
