import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './WishesCarousel.css';

const WISHES = [
  {
    name: 'Ananya',
    message:
      'May this precious little one be blessed with a life filled with love, good health, and endless joy. Wishing your family beautiful memories as this special name begins a wonderful journey. Always!!!!',
  },
  {
    name: 'Bhuvan',
    message:
      'May this special day begin a beautiful journey for your precious little one. Wishing a lifetime filled with love, good health, joyful laughter, bright dreams, endless blessings, and cherished memories.',
  },
  {
    name: 'Nikhil',
    message:
      'May this beautiful naming ceremony mark the start of a joyful journey filled with love and blessings. Wishing the little one good health, bright dreams, sweet laughter, and precious memories for life.',
  },
];

const WishesCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [animDir, setAnimDir] = useState('');
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

  const navigate = (dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setIdx((prev) =>
        dir === 'next'
          ? (prev + 1) % WISHES.length
          : (prev - 1 + WISHES.length) % WISHES.length
      );
      setAnimDir('');
    }, 220);
  };

  return (
    <section className="wishes" ref={ref}>
      <div className={`wishes__card sage-card ${visible ? 'reveal d1' : ''}`}>
        <h2 className="wishes__heading">Wishes for the baby</h2>

        <div className={`wishes__slide ${animDir === 'next' ? 'slide-left' : animDir === 'prev' ? 'slide-right' : ''}`}>
          <p className="wishes__name">{WISHES[idx].name}</p>
          <p className="wishes__message">{WISHES[idx].message}</p>
        </div>

        <div className="wishes__controls">
          <button
            className="wishes__btn"
            onClick={() => navigate('prev')}
            aria-label="Previous wish"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <span className="wishes__counter">
            {idx + 1}&nbsp;/&nbsp;{WISHES.length}
          </span>
          <button
            className="wishes__btn"
            onClick={() => navigate('next')}
            aria-label="Next wish"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WishesCarousel;
